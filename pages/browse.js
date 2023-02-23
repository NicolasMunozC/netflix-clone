import Nav from '@/components/app/Nav'
import PrivateRoute from '@/components/PrivateRoute'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Browse() {
    const router = useRouter()
    const [isLogged, setIsLogged] = useState(false)

    useEffect( () => {
        const currentToken = window.localStorage.getItem('token')
        if(currentToken) setIsLogged(true)
        else router.push('/login')
    },[])

    const signOut = () => {
        window.localStorage.removeItem('token')
        setIsLogged(false)
        router.push('/login')
    }


    return (
        <PrivateRoute isLogged={isLogged}>
            <div>
                <Nav />
            </div>
        </PrivateRoute>
    )



}