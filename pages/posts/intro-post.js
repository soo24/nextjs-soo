import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Profile.module.css'
import Link from 'next/link';
import profilePic from '../../public/imgs/profile.jpeg';
import InstaPic from '../../public/imgs/insta.png';


export default function IntroPost() {
    return (
      <div className={styles.container}>

      <Head>
        <title>Soo-Profile</title>
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>&hearts;</span>
          About Soo
          <span>&hearts;</span>
        </h1>


        
          <div className={styles.space} >
            <Image src={profilePic} className={styles.profile}
                height={150} width={150} alt="수연프로필사진" vertical-align = "middle"/>
                
                <div className={styles.description}>
                  <h2>  김수연 <span>수키</span> </h2> 
                 <p> KIM SOOYEON</p>
                  <p> 金秀娟 </p>
                  <p> B.S.in computer engineering</p>
                
                  <a href='https://instagram.com/soo_k.y?igshid=YmMyMTA2M2Y=' target="_blank" rel="noopener noreferrer">
                  <Image src= {InstaPic} className={styles.logo}
                   height={30} width={30} alt="insta" vertical-align = "middle"/>
                  </a> 

                  

                </div> 

                <div className={styles.description_l}>
                  <p> 생년월일 : 99.06.24 </p> 
                  <p>MBTI : ENTP </p> 
                  <p>종교 : 기독교 </p>
                  <p>취미 : 조깅하기 👣 </p>
                </div>
                

          </div>

      </main>

      <footer className={styles.footer}>
        <h4>
          <Link href="/">
            Back to home
          </Link>
        </h4>

      </footer>

    </div>
  );
}
