import net from 'node:net';
import tls from 'node:tls';

type FormType = 'contact' | 'resource';

type DeliveryOptions = {
  type: FormType;
  webhookEnv: string;
};

type SmtpMessage = {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
};

const DEFAULT_RECIPIENT = 'info@qualitytechnoservices.com';

export async function deliverFormSubmission(payload: Record<string, unknown>, options: DeliveryOptions) {
  const webhookUrl = process.env[options.webhookEnv];
  const hasSmtpConfig = Boolean(process.env.SMTP_HOST || process.env.EMAIL_SERVER_HOST);
  let delivered = false;

  if (hasSmtpConfig) {
    await deliverBySmtp(payload, options.type);
    delivered = true;
  }

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: options.type, receivedAt: new Date().toISOString(), payload }),
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with status ${response.status}`);
      }

      delivered = true;
    } catch (error) {
      if (!delivered) throw error;
      console.warn('QTS webhook delivery failed after SMTP delivery.', error);
    }
  }

  if (!delivered) {
    throw new Error('Configure SMTP_HOST or a QTS webhook URL to send QTS form emails.');
  }
}

async function deliverBySmtp(payload: Record<string, unknown>, type: FormType) {
  const smtpHost = process.env.SMTP_HOST || process.env.EMAIL_SERVER_HOST;
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_SERVER_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_SERVER_PASSWORD;
  const smtpPort = Number(process.env.SMTP_PORT || process.env.EMAIL_SERVER_PORT || '465');
  const smtpSecure = (process.env.SMTP_SECURE || process.env.EMAIL_SERVER_SECURE || 'true').toLowerCase() !== 'false';
  const to = process.env.QTS_MAIL_TO || process.env.CONTACT_TO || DEFAULT_RECIPIENT;
  const from = process.env.SMTP_FROM || process.env.EMAIL_FROM || smtpUser || DEFAULT_RECIPIENT;
  const replyTo = getString(payload.email);

  if (!smtpHost) {
    throw new Error('SMTP_HOST is required to send QTS form emails.');
  }

  const { subject, text, html } = buildFormEmail(payload, type);

  await sendSmtpMessage(
    {
      to,
      from,
      replyTo,
      subject,
      text,
      html,
    },
    {
      host: smtpHost,
      port: Number.isFinite(smtpPort) ? smtpPort : 465,
      secure: smtpSecure,
      user: smtpUser,
      pass: smtpPass,
    },
  );
}

function buildFormEmail(payload: Record<string, unknown>, type: FormType) {
  const isContact = type === 'contact';
  const title = isContact ? 'Nueva consulta desde la web de QTS' : 'Nueva solicitud desde Centro de Recursos QTS';
  const subject = isContact ? 'Nueva consulta web - Quality Techno Services' : 'Nueva solicitud de recursos - Quality Techno Services';

  const labels: Record<string, string> = isContact
    ? {
        name: 'Nombre',
        company: 'Empresa',
        email: 'Correo',
        phone: 'Teléfono',
        inquiryType: 'Tipo de consulta',
        message: 'Mensaje',
      }
    : {
        name: 'Nombre',
        company: 'Empresa',
        email: 'Correo',
        interest: 'Interés',
        material: 'Material solicitado',
        comment: 'Comentario',
      };

  const entries = Object.entries(labels).map(([key, label]) => ({ label, value: getString(payload[key]) || 'No indicado' }));
  const receivedAt = new Intl.DateTimeFormat('es-PA', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/Panama',
  }).format(new Date());

  const text = [
    title,
    `Fecha: ${receivedAt}`,
    '',
    ...entries.map((entry) => `${entry.label}: ${entry.value}`),
  ].join('\n');

  const htmlRows = entries
    .map(
      (entry) => `
        <tr>
          <td style="padding:12px 14px;border-bottom:1px solid #e8e8e8;color:#556173;font-weight:700;width:190px;">${escapeHtml(entry.label)}</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e8e8e8;color:#1e2430;white-space:pre-wrap;">${escapeHtml(entry.value)}</td>
        </tr>`,
    )
    .join('');

  const html = `<!doctype html>
<html lang="es">
  <head><meta charset="utf-8" /></head>
  <body style="margin:0;background:#f5f4f1;font-family:Arial,Helvetica,sans-serif;color:#1e2430;">
    <div style="max-width:720px;margin:0 auto;padding:28px 18px;">
      <div style="background:#1f2c46;color:#ffffff;border-radius:22px 22px 0 0;padding:26px 28px;">
        <p style="margin:0 0 8px;color:#f47a20;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">Quality Techno Services</p>
        <h1 style="margin:0;font-size:24px;line-height:1.25;">${escapeHtml(title)}</h1>
        <p style="margin:10px 0 0;color:#eef1f5;font-size:14px;">Recibido el ${escapeHtml(receivedAt)}</p>
      </div>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;background:#ffffff;border:1px solid #e8e8e8;border-top:0;border-radius:0 0 22px 22px;overflow:hidden;">
        ${htmlRows}
      </table>
      <p style="margin:18px 0 0;color:#556173;font-size:12px;line-height:1.6;">Este correo fue generado automáticamente desde el formulario de qualitytechnoservices.com.</p>
    </div>
  </body>
</html>`;

  return { subject, text, html };
}

async function sendSmtpMessage(
  message: SmtpMessage,
  config: { host: string; port: number; secure: boolean; user?: string; pass?: string },
) {
  let socket: net.Socket | tls.TLSSocket = config.secure
    ? tls.connect({ host: config.host, port: config.port, servername: config.host })
    : net.connect({ host: config.host, port: config.port });

  socket.setEncoding('utf8');
  socket.setTimeout(15000);

  let buffer = '';
  const waitForResponse = (expectedCode: number) =>
    new Promise<string>((resolve, reject) => {
      const cleanup = () => {
        socket.off('data', onData);
        socket.off('error', onError);
        socket.off('timeout', onTimeout);
      };

      const onError = (error: Error) => {
        cleanup();
        reject(error);
      };

      const onTimeout = () => {
        cleanup();
        reject(new Error('SMTP connection timed out'));
      };

      const onData = (chunk: Buffer | string) => {
        buffer += chunk.toString();
        const lines = buffer.split(/\r?\n/);
        const lastCompleteLine = [...lines].reverse().find((line) => /^\d{3}\s/.test(line));

        if (!lastCompleteLine) return;

        const code = Number(lastCompleteLine.slice(0, 3));
        if (code === expectedCode) {
          const response = buffer;
          buffer = lines.at(-1) || '';
          cleanup();
          resolve(response);
        } else if (code >= 400) {
          const response = buffer;
          cleanup();
          reject(new Error(`SMTP error ${code}: ${response}`));
        }
      };

      socket.on('data', onData);
      socket.on('error', onError);
      socket.on('timeout', onTimeout);
    });

  const sendCommand = async (command: string, expectedCode: number) => {
    socket.write(`${command}\r\n`);
    return waitForResponse(expectedCode);
  };

  try {
    await waitForResponse(220);
    await sendCommand(`EHLO ${process.env.SMTP_EHLO_DOMAIN || 'qualitytechnoservices.com'}`, 250);

    if (!config.secure) {
      await sendCommand('STARTTLS', 220);
      socket = tls.connect({ socket, servername: config.host });
      socket.setEncoding('utf8');
      socket.setTimeout(15000);
      buffer = '';
      await sendCommand(`EHLO ${process.env.SMTP_EHLO_DOMAIN || 'qualitytechnoservices.com'}`, 250);
    }

    if (config.user && config.pass) {
      await sendCommand('AUTH LOGIN', 334);
      await sendCommand(Buffer.from(config.user).toString('base64'), 334);
      await sendCommand(Buffer.from(config.pass).toString('base64'), 235);
    }

    await sendCommand(`MAIL FROM:<${extractEmail(message.from)}>`, 250);
    await sendCommand(`RCPT TO:<${extractEmail(message.to)}>`, 250);
    await sendCommand('DATA', 354);
    socket.write(`${buildRawEmail(message)}\r\n.\r\n`);
    await waitForResponse(250);
    await sendCommand('QUIT', 221);
  } finally {
    socket.end();
  }
}

function buildRawEmail(message: SmtpMessage) {
  const headers = [
    `From: ${formatAddress(message.from)}`,
    `To: ${formatAddress(message.to)}`,
    message.replyTo ? `Reply-To: ${formatAddress(message.replyTo)}` : undefined,
    `Subject: ${encodeHeader(message.subject)}`,
    'MIME-Version: 1.0',
    'Content-Type: multipart/alternative; boundary="qts-form-boundary"',
  ].filter(Boolean);

  return [
    ...headers,
    '',
    '--qts-form-boundary',
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: 8bit',
    '',
    escapeSmtpBody(message.text),
    '--qts-form-boundary',
    'Content-Type: text/html; charset="UTF-8"',
    'Content-Transfer-Encoding: 8bit',
    '',
    escapeSmtpBody(message.html),
    '--qts-form-boundary--',
  ].join('\r\n');
}

function getString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function escapeSmtpBody(value: string) {
  return value.replace(/^\./gm, '..');
}

function encodeHeader(value: string) {
  return `=?UTF-8?B?${Buffer.from(value, 'utf8').toString('base64')}?=`;
}

function extractEmail(value: string) {
  const match = value.match(/<([^>]+)>/);
  return (match?.[1] || value).trim();
}

function formatAddress(value: string) {
  const email = extractEmail(value);
  return email === value ? email : value;
}
