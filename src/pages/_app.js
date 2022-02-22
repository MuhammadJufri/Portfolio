import Layout from '../layout/layout'
import '../styles/globals.css'
import Head from 'next/head'

export const config = {
  unstable_runtimeJS: false,
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
export default MyApp
