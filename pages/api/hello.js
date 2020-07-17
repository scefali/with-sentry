import * as Sentry from '@sentry/node'

export default async (req, res) => {
  Sentry.captureException(new Error("Hello"))
  await Sentry.flush(2000);
  res.status(200).json({ text: 'Hello' })
}