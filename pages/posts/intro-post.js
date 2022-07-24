import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import profilePic from '../../public/imgs/profile.jpeg';
import InstaPic from '../../public/imgs/insta.png';


export default function IntroPost() {
    return (
      <div className='p-8'>

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
                height={150} width={150} alt="수연프로필사진" vertical-align = "middle"/>
                
                <div className='inline-block '>
                  <h2 className='ml-5 font-semibold text-[25px] tracking-[3px]'>  김수연 <span className='ml-[2px] text-rose-400 text-[10px] italic'>수 키</span> 
                  </h2> 
                  <p className='mt-2 font-mono text-[10px]'> KIM SOOYEON</p>
                  <p className='mt-[2px] font-mono text-[13px]'> 金秀娟 </p>
                  <p className='font-mono text-[0.8px] tracking-tighter mb-[10px]'> 한동대학교 C.S,B.M</p>
                
                  <a href='https://instagram.com/soo_k.y?igshid=YmMyMTA2M2Y=' target="_blank" rel="noopener noreferrer">
                  <Image src= {InstaPic}  height={30} width={30} className='ml-[5rem] '
                   alt="insta" vertical-align = "middle"/>
                  </a> 

                  

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

      <footer className="flex flex-1 p-8 border-t-2 border-solid border-indigo-100 
      justify-center items-center text-gray-800 font-medium text-[20px]"> 
        <h4 className='hover:text-blue-500 hover:border-blue-600 cursor-pointer'>
          <Link href="/">
            Back 🏠
          </Link>
        </h4>

      </footer>

    </div>
  );
}
