import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Profile.module.css'
import Link from 'next/link';
import profilePic from '../../public/profile.jpeg';

export default function IntroPost() {
    return (
      <div className={styles.container}>

      <Head>
        <title>Soo-Profile</title>
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>&hearts;</span>
          Kim Sooyeon 
          <span>&hearts;</span>
        </h1>

        <div className={styles.space}>
          <Image src={profilePic} className={styles.profile}
               height={150} width={150} alt="수연프로필사진"/>
        </div> 

      </main>

      <footer className={styles.footer}>
        <h4>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h4>

      </footer>

    </div>
  );
}
