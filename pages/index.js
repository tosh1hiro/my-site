import Head from 'next/head'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header>
        <div className='max-w-screen-lg mx-auto h-12 clear-both' style={{ position: 'relative', height: 100, width: '100%' }}>
          <div className='float-left' style={{ position: 'relative', height: '100%', width: 200 }}>
            <Image src='/../public/images/logo.PNG' layout='fill' alt='ロゴ' />
          </div>
          <div className='float-right top-1/2 bottom-1/2' style={{ position: 'relative', width: 'auto' }}>
            <ul className=' clear-both'>
              <li className='float-left ml-6'><a href="#" className="text-regal-blue">ABOUT</a></li>
              <li className='float-left ml-6'><a href="#">SKILLS</a></li>
              <li className='float-left ml-6'><a href="#">VALUES</a></li>
              <li className='float-left ml-6'><a href="#">FUTURE</a></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
