import * as Sentry from "@sentry/node";
import Document, { Head, Main, NextScript } from 'next/document';

process.env.NEXT_PUBLIC_SENTRY_DSN && 
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });

export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}