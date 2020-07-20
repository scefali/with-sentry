import * as Sentry from "@sentry/node";

// process.env.NEXT_PUBLIC_SENTRY_DSN &&
//   Sentry.init({
//     dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
//   });

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async (req, res) => {
  Sentry.captureException(new Error("My server error"));
  await Sentry.flush(2000)
  res.status(200).json({ text: "My server" });
};
