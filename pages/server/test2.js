import * as Sentry from '@sentry/node'

process.env.NEXT_PUBLIC_SENTRY_DSN &&
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });

const Test2 = () => <h1>Server Test 2</h1>

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export async function getServerSideProps() {
  try {
    Sentry.captureException(new Error('Server Test 2'))
    await sleep(4000);
  } catch (err){
    console.error(err)
  }
  return { props: {} }
}

export default Test2
