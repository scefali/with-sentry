import * as Sentry from '@sentry/node'

const Test2 = () => <h1>Server Test 2</h1>


export async function getServerSideProps() {
  try {
    throw new Error('Server Test 2')
  } catch (err){
    console.error(err)
    Sentry.captureException(err)
    await Sentry.flush(10000);
    throw err
  }
}

export default Test2
