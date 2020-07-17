import * as Sentry from '@sentry/node'

const Test2 = () => <h1>Server Test 2</h1>

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export async function getServerSideProps() {
  try {
    throw new Error('Server Test 2')
  } catch (err){
    console.error(err)
    Sentry.captureException(err)
    await sleep(4000);
    // throw err
  }
  return { props: {} }
}

export default Test2
