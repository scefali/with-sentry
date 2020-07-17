import * as Sentry from "@sentry/node";

process.env.NEXT_PUBLIC_SENTRY_DSN &&
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async (req, res) => {
  try {
    Sentry.captureException(new Error("Hello"));
    await sleep(2000)
  } catch (err) {
  }
  res.status(200).json({ text: "Hello" });
};
