export async function deliverFormSubmission(
  payload: Record<string, unknown>,
  options: { type: 'contact' | 'resource'; webhookEnv: string },
) {
  const webhookUrl = process.env[options.webhookEnv];

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: options.type, receivedAt: new Date().toISOString(), payload }),
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with status ${response.status}`);
    }
  } else {
    console.info(`[QTS ${options.type}] Demo submission captured`, payload);
  }
}
