import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

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

        <div className={styles.grid}>

          {/* link로 다른창으로 넘어가보기 */}
          <h1 className={styles.card}>
            {/* 👩🏻‍💻{' '} */}
            <Link href="/posts/intro-post" >
              <h2> 👩🏻‍💻
                <p> Who?</p>
              </h2>  
            </Link>
          </h1>
      
          {/* a태그로 하이퍼링크로 넘어가보기 */}
          <a href= "/posts/first-post" className={styles.card}>
            <h2>  &hearts;
              <p>Like!</p>
            </h2>
          </a>

        </div>

      </main>

    </div>
  )
}
