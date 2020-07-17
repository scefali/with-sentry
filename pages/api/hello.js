import * as Sentry from "@sentry/node";


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async (req, res) => {
  Sentry.captureException(new Error("Hello"));
  await sleep(2000)
  res.status(200).json({ text: "Hello" });
};
