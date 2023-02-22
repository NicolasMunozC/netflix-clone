import { useState } from "react"


export const signIn = () => {
    window.localStorage.setItem('logged', 'true')
}

export const signOut = () => {
    window.localStorage.removeItem('logged')
}

export const useLoggin = () => {
    const [isLogged, setIsLogged] = useState(false)
    const current = window.localStorage.getItem('logged')
    if(current) setIsLogged(true)
    return isLogged
}