import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import profilePic from '../public/imgs/profile.jpeg';

export default function Home() {
  return (
    <div className="md:container md:mx-auto">
      <Head>
        <title>Soo-Home</title>
      </Head>

      <main className="p-16 items-center justify-center text-center">

        <h1 className="m-0 leading-normal text-4xl text-title text-flex"> 
        {/*창에 따라 바뀌게 ...! sm:text-left lg:text-center &text-flex: 그전에 적용한거 들고오기  */}
          Welcome to <span className='text-[30px] font-light '>My site </span>
          <span className='text-blue-300 text-[30px]'> &#9786; </span>  
          {/* &#9786; */}
        </h1>

        <div className='mt-[40px]'>
          <Image src={profilePic} className="rounded-[30%]"
               height={200} width={200} alt="수연프로필사진"/>
        </div>

        <div className="grid grid-cols-3 gap-4 items-center justify-center flex-wrap w-full flex-col">
          {/* link로 다른창으로 넘어가보기 */}
          {/* <h1 className="m-2 p-6 text-justify border-solid rounded-[10px] border-[1px] border-gray-200 
           hover:text-blue-500 hover:border-blue-600 cursor-pointer"> */}
           <h1 className="col-start-2 m-2 p-6 text-justify border-solid rounded-[10px] border-[1px] border-gray-200 
           hover:text-blue-500 hover:border-blue-600 cursor-pointer">


            {/* 👩🏻‍💻{' '} */}
            <Link href="/posts/intro-post" >
            <h2 className="text-center m-1 text-sm"> 👩🏻‍💻
                <p className="mt-3.5 font-normal text-xs"> Who?</p>
                <p className="mt-1 font-normal text-xs"> 프로필 </p>
            </h2>  
            </Link>
          </h1>
        </div>
        
        <div className="grid grid-cols-3 gap-4 items-center justify-center flex-wrap w-full flex-row">
          {/* a태그로 하이퍼링크로 넘어가보기 */}
          <h1 className="col-start-2 m-2 p-6 text-justify border-solid rounded-[10px] border-[1px] border-gray-200 
           hover:text-blue-500 hover:border-blue-600 cursor-pointer">
            <a href='https://soo24.tistory.com' target='_blank' rel="noreferrer noopener">
              
              <h2 className="text-center m-1 text-sm"> ✏️
              <p className="mt-3.5 font-normal text-xs">Tistory</p>
              <p className="mt-1 font-normal text-[0.5rem]"> &hearts; 구경가기 &hearts;</p>
              </h2>
            </a>
          </h1>

          <h1 className="col-start-2 m-2 p-6 text-justify border-solid rounded-[10px] border-[1px] border-gray-200 
           hover:text-blue-500 hover:border-blue-600 cursor-pointer">
            <a href="https://blog.naver.com/sooyeon7_7" target='_blank' rel="noreferrer noopener" >
              <h2 className="text-center m-1 text-sm"> ‍🌱
              <p className="mt-3.5 font-normal text-xs"> 네이버 blog</p>
              <p className="mt-1 font-normal text-[0.5rem]"> &hearts; 구경가기 &hearts;</p>
              </h2> 
            </a>
          </h1>

        </div>

      </main>

      {/* <footer className={styles.footer}> */}
      <footer className="flex flex-1 p-8 border-t-2 border-solid border-indigo-100 justify-center items-center text-gray-800"> 
         Go to Github&rarr;
            <a href="https://github.com/soo24/nextjs-soo" target='_blank' rel="noreferrer noopener">
            <Image className='h-8 m-4' src='/imgs/github.png'/>
            </a>
      </footer>

    </div>
  )
}
