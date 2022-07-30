import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import profilePic from '../public/imgs/profile.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <div className="md:container md:mx-auto">
      <Head>
        <title>Soo-Home</title>
      </Head>

      <main className="p-16 items-center justify-center text-center">
        <FontAwesomeIcon icon={faHouse} size='2xl' />
        <h3 className="m-0 leading-normal text-4xl text-title text-flex sm:scale-75">
          {/*창에 따라 바뀌게 ...! sm:text-left lg:text-center &text-flex: 그전에 적용한거 들고오기  */}
          Soo's <span className='text-[25px] font-light '>home</span>
          <span className='text-blue-300 text-[30px] sm:hidden'> &#9786; </span>
          {/* &#9786; */}
        </h3>

        <div className='mt-[30px]'>
          <Image src={profilePic} className="rounded-[30%]"
            height={200} width={200} alt="수연프로필사진" />
        </div>

        <div className="md:grid grid-cols-10 grid-rows-2 gap-4 items-center justify-center flex-wrap w-full flex-col">
          {/* link로 다른창으로 넘어가보기 */}
          {/* <h1 className="m-2 p-6 text-justify border-solid rounded-[10px] border-[1px] border-gray-200 
           hover:text-blue-500 hover:border-blue-600 cursor-pointer"> */}

          <div className="col-start-4 col-span-4 m-2 p-3 text-center border-solid rounded-[10px] border-[1px] border-gray-200 
           hover:text-blue-500 hover:border-blue-600 cursor-pointer">

            {/* 여기가 에러다! */}
            {/* 👩🏻‍💻{' '} */}
            <Link href="/posts/intro-post">
              <div>
                <p className="text-center m-1 text-sm"> 👩🏻‍💻 </p>
                <p className="mt-3.5 font-normal text-xs"> Who?</p>
                <p className="mt-1 font-normal text-xs"> 프로필 </p>
              </div>
            </Link>
          </div>
          <div className="col-start-4 col-span-2 m-2  text-center border-solid rounded-[10px] border-[1px] border-gray-200
            hover:text-blue-500 hover:border-blue-600 cursor-pointer">
            <a href='https://soo24.tistory.com' target='_blank' rel="noreferrer noopener">

              <h2 className="text-center m-1 text-sm"> ✏️
                <p className="mt-3.5 font-normal text-xs">Tistory</p>
                <p className="mt-1 font-normal text-[0.5rem]"> &hearts; 구경가기 &hearts;</p>
              </h2>
            </a>
          </div>
          <div className="col-start-6 col-span-2 m-2 text-justify border-solid rounded-[10px] border-[1px] border-gray-200
            hover:text-blue-500 hover:border-blue-600 cursor-pointer">
            <a href="https://blog.naver.com/sooyeon7_7" target='_blank' rel="noreferrer noopener" >
              <h2 className="text-center m-1 text-sm"> ‍🌱
                <p className="mt-3.5 font-normal text-xs"> 네이버 blog</p>
                <p className="mt-1 font-normal text-[0.5rem]"> &hearts; 구경가기 &hearts;</p>
              </h2>
            </a>
          </div>

        </div>
        contact
      </main>
      <footer className="flex flex-1 p-8 border-t-2 border-solid border-indigo-100 justify-center items-center text-gray-800">

          <a href="https://github.com/soo24/nextjs-soo" target='_blank' rel="noreferrer noopener"
            className=' mr-3'>
            {/* <Image height={30} width={30} className='h-8 m-4' src='/imgs/github.png' /> */}
            <FontAwesomeIcon icon={faGithub} size='2xl' />

          </a>

          <a href='https://instagram.com/soo_k.y?igshid=YmMyMTA2M2Y=' target="_blank" rel="noopener noreferrer"
            className=' mr-3'>
            <FontAwesomeIcon icon={faInstagram} size='2xl' />
          </a>

          <a href='https://www.linkedin.com/in/%EC%88%98%EC%97%B0-%EA%B9%80-4a5680244' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size='2xl' />
          </a>
        
      </footer>
      


    </div>
  )
}
