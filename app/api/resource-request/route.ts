import { NextResponse } from 'next/server';
import { deliverFormSubmission } from '@/lib/form-delivery';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const payload = await request.json();

  const required = ['name', 'company', 'email', 'interest', 'material'] as const;
  for (const field of required) {
    if (!payload?.[field] || typeof payload[field] !== 'string' || !payload[field].trim()) {
      return NextResponse.json({ ok: false, error: `Campo inválido: ${field}` }, { status: 400 });
    }
  }

  if (!/^\S+@\S+\.\S+$/.test(payload.email)) {
    return NextResponse.json({ ok: false, error: 'Correo inválido' }, { status: 400 });
  }

  try {
    await deliverFormSubmission(payload, {
      type: 'resource',
      webhookEnv: 'QTS_RESOURCES_WEBHOOK_URL',
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: 'No fue posible enviar el correo. Verifique la configuración SMTP.' }, { status: 500 });
  }
}
