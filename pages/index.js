import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Doceo</title>
        <meta name="description" content="Create and learn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>
          {`Hello there, maybe `}
          <a className={styles.link} href="/login">{`login?`}</a>
        </p>
        <p>
          {`Or create an account here `}
          <a className={styles.link} href="/register">{`register.`}</a>
        </p>
        <p>
          {`View added `}
          <a className={styles.link} href="/tests">{`tests.`}</a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
