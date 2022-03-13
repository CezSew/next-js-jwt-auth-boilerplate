import '../styles/globals.scss';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/layout/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>{`Next auth`}</title>
        <meta name="description" content="Create and learn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
)}

export default MyApp
