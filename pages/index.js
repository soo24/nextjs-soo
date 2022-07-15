import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import profilePic from '../public/profile.jpeg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sooyeon</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>My site </span>
          {/* <span class="two"> &#9786; </span>   */}
          <a>&#9786;</a>
        </h1>

        <div className={styles.space}>
          <Image src={profilePic} className={styles.profile}
               height={200} width={200} alt="수연프로필사진"/>
        </div>
        

        <div className={styles.grid}>

          {/* link로 다른창으로 넘어가보기 */}
          <h1 className={styles.card}>
            {/* 👩🏻‍💻{' '} */}
            <Link href="/posts/intro-post" >
              <h2> 👩🏻‍💻
                <p> Who?</p>
                <p> 프로필</p>
              </h2>  
            </Link>
          </h1>
        </div>
      
        <div className={styles.grid}>
          {/* a태그로 하이퍼링크로 넘어가보기 */}
          <h1 className={styles.card}>
            <a target='_blank' href='https://soo24.tistory.com' 
              >
              <h2> ✏️
                <p>Tistory</p>
                <p> &hearts; 구경가기 &hearts;</p>
              </h2>
            </a>
          </h1>

          <h1 className={styles.card}>
          <a target='_blank' href="https://blog.naver.com/sooyeon7_7"
             >

              <h2> ‍🌱
                <p> 네이버 blog</p>
                <p> &hearts; 구경가기 &hearts;</p>
              </h2> 

            </a>
          </h1>
         

        </div>

        <p className={styles.description}>
        &rarr;Here is {' '}
          <a href="https://github.com/soo24/nextjs-soo" target='_blank'>
            My Github</a>site!
        </p>

      </main>

    </div>
  )
}
