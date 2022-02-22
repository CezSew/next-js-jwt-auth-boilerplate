import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const handleSubmit = e => {
    
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Doceo</title>
        <meta name="description" content="Create and learn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Doceo!</a>
        </h1>

        <div>
          <h2>Log in:</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='input-name'>
                Name:
              </label>
              <input type={'text'} placeholder={`Login`} name={`login`} id={`input-name`}/>
            </div>
            <div>
              <label htmlFor='input-password'>
                Password:
              </label>
              <input type={'password'} placeholder={`Password`} name={`password`} id={`input-password`}/>
            </div>
          </form>
        </div>
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
