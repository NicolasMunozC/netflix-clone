import Footer from '@/components/Footer'
import Image from 'next/image'
import React from 'react'
import { signIn } from '@/services'

function login() {




  return (
    <div >
        <div className='bg-black p-5'>
            <Image alt='logo' src='/images/logo.png' height={20} width={100} />
        </div>

        <div className='bg-black text-stone-500 px-5 flex flex-col'>
            <h1 className='text-white font-semibold text-2xl mb-4'>Sign In</h1>
            <input className='h-10 rounded-sm mb-3 bg-stone-700 px-4 text-sm' type='text' placeholder='Email or phone number' defaultValue='test@test.com' />
            <input className='h-10 rounded-sm mb-5 bg-stone-700 px-4 text-sm' type='password' placeholder='Password' defaultValue='test123' />
            <button className=' bg-red-600 text-white font-semibold h-10 rounded-md mb-2' onClick={signIn}>Sign In</button>
            <div className='flex flex-row justify-between font-semibold text-sm mb-2'>
                <div className='flex flex-row'>
                <label htmlFor='checkbox'>
                <input type='checkbox' name='remember' id='checkbox' className='accent-stone-700 mr-1'/>
                    Remember me</label>
                </div>
                <p>Need help?</p>
            </div>
            <div className='flex flex-row font-semibold text-sm mb-2'>
                <p className='mr-1'>New to Netflix?</p>
                <p className='text-white'>Sign up now.</p>
            </div>
                <p className='text-xs font-semibold'>This page is protected by Google reCAPTCHA to ensure you{"'"}re not a bot. <span className='text-xs text-blue-600'>Learn more.</span></p>
        </div>

        <div className='h-52 w-full bg-black border-stone-700 border-b-2' />

        <Footer />
    </div>
  )
}

export default login