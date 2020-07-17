import * as Sentry from '@sentry/node'

process.env.NEXT_PUBLIC_SENTRY_DSN && 
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });


export default async (req, res) => {
  Sentry.captureException(new Error("Hello"))
  await Sentry.flush(2000);
  res.status(200).json({ text: 'Hello' })
}