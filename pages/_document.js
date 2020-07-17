import * as Sentry from "@sentry/node";

process.env.NEXT_PUBLIC_SENTRY_DSN && 
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
