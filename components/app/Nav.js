import Image from 'next/image'
import { useRouter } from 'next/router';

function Nav() {

    const signOut = () => {
        window.localStorage.clear()
        router.push('/login')
    }

  const router = useRouter()
  return (
    <div className='bg-black flex flex-row p-5 justify-between w-full'>
        <Image alt='logo' src='/images/logo.png' height={20} width={100} />
        <button className='bg-red-600 rounded-sm text-white w-20 font-light' onClick={signOut} >Sign Out</button>
    </div>
  )
}

export default Nav