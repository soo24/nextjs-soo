import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sooyeon</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My site!
        </h1>

        <p className={styles.description}>
          Here is {' '}
          <a href="https://github.com/soo24/nextjs-soo">My Github</a>site!
        </p>
      </main>

    </div>
  )
}
