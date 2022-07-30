import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout';
import profilePic from '../../public/imgs/profile.jpeg';
import Footer from '../../components/footer'

export default function IntroPost() {
  return (
    <Layout className='p-8 '>

      <Head>
        <title>Soo-Profile</title>
      </Head>


      <main className="min-h-screen p-8 grow flex flex-col items-center justify-start text-center">
        <h1 className='leading-tight text-[30px]'>
          <span className='text-rose-500'>&hearts;</span>
          About Soo
          <span className='text-rose-500'>&hearts;</span>
        </h1>

        <div className='mt-[40px]'>
          <Image src={profilePic} className="rounded-[50%]"
            height={150} width={150} alt="수연프로필사진" vertical-align="middle" />

          <div className='inline-block'>
            <h2 className='ml-5 font-semibold text-[25px] tracking-[3px]'>  김수연 <span className='ml-[2px] text-rose-400 text-[10px] italic'>수 키</span>
            </h2>
            <p className='mt-2 font-mono text-[10px]'> KIM SOOYEON</p>
            <p className='mt-[2px] font-mono text-[13px]'> 金秀娟 </p>
            <br></br>
            <p className='font-mono text-[0.8px] tracking-tighter mb-[10px]'> Handong Global University <br></br>컴퓨터 공학 & 경영학 </p>

          </div>

          <div className='font-medium text-[15px] text-inherit max-w-[300px] mt-7 
                 proportional-nums border-inherit border-b-2 border-solid rounded-[10px] mb-3'> Info.</div>
          <ul className='whitespace-pre list-inside text-justify text-[11px]  font-sans proportional-nums border-inherit border-solid rounded-[10px] mb-6'>
            <li className='ml-10 mb-1' > ☆   생년월일 : 99.06.24 </li>
            <li className='ml-10 mb-1'> ☆   MBTI : ENTP</li>
            <li className='ml-10 mb-1'> ☆   종교 : 기독교</li>
            <li className='ml-10 mb-1'> ☆   취미 : 조깅하기</li>
          </ul>

          <div className='font-medium text-[15px] text-inherit max-w-[300px] mt-8 
                 proportional-nums border-inherit border-b-2 border-solid rounded-[10px] mb-3'> 소속된  공동체</div>
          <ul className='lwhitespace-pre ist-inside text-justify text-[11px] font-sans proportional-nums border-inherit border-solid rounded-[10px] mb-6'>
            <li className='ml-10 mb-1 '> ❀    拇心 </li>
            <li className='ml-10 mb-1 ' > ❀    너나들이, 남북청년합창단</li>
            <li className='ml-10 mb-1 '>  ❀    CRA, 전산연구회</li>
            <li className='ml-10 mb-1 '> ❀    Lamp, 프로젝트 동아리</li>
            <li className='ml-10 mb-1 '> ❀    Lamb, 국제개발경영학회</li>
            <li className='ml-10 mb-1 '> ❀    HugIn, 프로젝트 동아리</li>
            <li className='ml-10 mb-1 '> ❀    HABIBI</li>
          </ul>

          <div className='font-medium text-[15px] text-inherit max-w-[300px] mt-8 
                 proportional-nums border-inherit border-b-2 border-solid rounded-[10px] mb-3'> 활동 내역</div>
          <ul className='lwhitespace-pre ist-inside text-justify text-[11px] font-sans  proportional-nums border-inherit border-solid rounded-[10px] mb-6'>
            <li className='ml-10 mb-1'> ✔︎   2019-1 사랑의 마라톤 staff</li>
            <li className='ml-10 mb-1'> ✔︎   2019-2, 2020-2 생활관 자치회_층장</li>
            <li className='ml-10 mb-1' > ✔︎   2020,2021 한동예비대학 소프트웨어입문 TA</li>
            <li className='ml-10 mb-1'> ✔︎   2021 생활관 자치회_복지부장</li>
          </ul>

        </div>

      </main>

      <Footer></Footer>

    </Layout>
  );
}
