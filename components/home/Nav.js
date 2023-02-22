import Image from 'next/image'
import { useRouter } from 'next/router';

function Nav() {

  const router = useRouter()
  return (
    <div className='bg-gradient-to-b from-black via-black to-transparent flex flex-row p-5 justify-between absolute w-full top-0 z-50'>
        <Image alt='logo' src='/images/logo.png' height={20} width={100} />
        <button className='bg-red-600 rounded-sm text-white w-16 font-light' onClick={()=> router.push('login')} >Sign In</button>
    </div>
  )
}

export default Nav