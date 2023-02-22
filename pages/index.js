import Footer from '@/components/Footer'
import Nav from '@/components/home/Nav'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix Clone - Nicolás Muñoz</title>
        <meta name="description" content="Netflix Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" />
      </Head>

      <main>

        <Nav />

        <div className='relative bg-bg-home-1 h-3/5 bg-cover grid place-content-center bg-center bg-'>
          <div className='flex flex-col text-center mt-20 z-10'>
            <h2 className='text-white font-semibold text-3xl mb-3'>Unlimited movies, TV shows, and more.</h2>
            <p className='text-white font-light text-lg mb-3'>Watch anywhere. Cancel anytime.</p>
            <p className='text-white font-light text-lg mb-3 mx-10' >Ready to watch? Enter your email to create or restart your membership.</p>
            <input className='h-11 w-72 place-self-center p-3 mb-3' placeholder='Email address' />
            <button className='bg-red-600 w-32 h-10 place-self-center rounded-sm text-white font-light'>Get Started {'>'}</button>
          </div>
          <div className='h-32 w-full bg-gradient-to-t from-black to-transparent bottom-0 absolute' />
        </div>

        <div className='h-2 bg-neutral-800' /> 

        <div className='h-3/5 bg-black grid place-content-center px-5'>
          <div className='text-center'>
            <h1 className='text-white font-semibold text-3xl mb-3'>Enjoy on your TV.</h1>
            <p className='text-white font-light text-lg mb-3'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blue-ray players, and more.</p>
            <div className='relative w-full h-60 z-10'>
              <Image alt='tv-frame' width={812} height={9999} src='/images/home/tv.png' />
              <video className='absolute w-64  -z-10 top-12 left-11' autoPlay loop muted><source src='/video-tv-0819.m4v' /></video>
            </div>
          </div>
        </div>

        <div className='h-2 bg-neutral-800' /> 

        <div className='relative h-3/5 bg-black grid place-content-center'>
          <div className='text-center px-8'>
            <h2 className='text-white font-semibold text-2xl mb-3'>Download your shows to watch offline.</h2>
            <p className='text-white font-light text-lg mb-3'>Save your favorites easily and always have something to watch.</p>
          </div>
          <div className=' bg-black w-full h-60'>
            <picture className='w-full'>
              <img className='w-full h-auto' alt='phone-frame' src='/images/home/mobile-0819.jpg' />
            </picture>
            <div className='absolute bottom-8 w-72 h-fit bg-black border-2 border-zinc-700 flex flex-row left-0 right-0 mx-auto justify-between px-3 py-2 rounded-xl'>
              <picture>
                <img  className='w-8 h-12' alt='stranger-things' src='/images/home/boxshot.png' />
              </picture>
              <div className='text-left flex flex-col'>
                <h3 className='text-md text-white'>Stranger Things</h3>
                <p className='text-sm text-blue-600 '>Downloading...</p>
              </div>
              <picture>
                <img className='w-12 h-12' alt='downloading' src='/images/home/download-icon.gif' />
              </picture>
            </div>
          </div>
        </div>

        <div className='h-2 bg-neutral-800' /> 

        <div className='relative h-3/5 bg-black grid place-content-center'>
          <div className='text-center px-8'>
            <h2 className='text-white font-semibold text-2xl mb-3'>Watch everywhere.</h2>
            <p className='text-white font-light text-lg mb-3'>Stream unlimited movies and TV Shows on your phone, tablet, laptop and TV without paying more.</p> 
          </div>
          <div className='relative z-10'>
            <picture className='relative w-full'>
              <img className='w-full' alt='devices-frames' src='/images/home/device-pile.png'/>
            </picture>
            <video className=' absolute -z-10 w-60 bottom-30 left-16' autoPlay loop muted>
              <source src='/images/home/video-devices.m4v' />
            </video>
          </div>
        </div>

        <div className='h-2 bg-neutral-800' /> 

        <div className='relative h-4/6 bg-black grid place-content-center'>
          <div className='text-center px-6'>
            <h2 className='text-white font-semibold text-2xl mb-3'>Create profiles for kids.</h2>
            <p className='text-white font-light text-lg mb-3'>Send kids on adventures with their favorites characters in a space made just for them-free with your memebership.</p> 
          </div>
            <picture className='relative w-full'>
              <img className='w-full' alt='kids' src='/images/home/kids.png'/>
            </picture>
        </div>

        <div className='h-2 bg-neutral-800' /> 

        <div className='relative h-9/10 bg-black grid place-content-center'>
            <h2 className='text-white font-semibold text-3xl mb-3 text-center'>Frequently Asked Questions</h2>
            <div className='text-white flex flex-row w-full justify-between bg-neutral-800 px-5 h-14 mb-2'>
              <h3 className='my-auto text-xl font-extralight'>What is Netflix?</h3>
              <p className='text-5xl font-thin'>+</p>
            </div>
            <div className='text-white flex flex-row w-full justify-between bg-neutral-800 px-5 h-14 mb-2'>
              <h3 className='my-auto text-xl font-extralight'>How much does Netflix cost?</h3>
              <p className='text-5xl font-thin'>+</p>
            </div>
            <div className='text-white flex flex-row w-full justify-between bg-neutral-800 px-5 h-14 mb-2'>
              <h3 className='my-auto text-xl font-extralight'>Where can I watch?</h3>
              <p className='text-5xl font-thin'>+</p>
            </div>
            <div className='text-white flex flex-row w-full justify-between bg-neutral-800 px-5 h-14 mb-2'>
              <h3 className='my-auto text-xl font-extralight'>How do I cancel?</h3>
              <p className='text-5xl font-thin'>+</p>
            </div>
            <div className='text-white flex flex-row w-full justify-between bg-neutral-800 px-5 h-14 mb-2'>
              <h3 className='my-auto text-xl font-extralight'>What can I watch on Netflix?</h3>
              <p className='text-5xl font-thin'>+</p>
            </div>
            <div className='text-white flex flex-row w-full justify-between bg-neutral-800 px-5 h-14 mb-4'>
              <h3 className='my-auto text-xl font-extralight'>Is Netflix good for kids?</h3>
              <p className='text-5xl font-thin'>+</p>
            </div>
            <h3 className='text-white text-center font-light px-7 text-lg mb-2'>Ready to watch? Enter your email to create or restart your membership.</h3>
            <input className='h-11 w-11/12 place-self-center p-3 mb-3' placeholder='Email address' />
            <button className='bg-red-600 w-32 h-10 place-self-center rounded-sm text-white font-light'>Get Started {'>'}</button>
        </div>

        <div className='h-2 bg-neutral-800' /> 

        <Footer />

      </main>

    </>
  )
}
