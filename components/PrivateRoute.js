
export default function PrivateRoute ({children, isLogged}) {
    if(isLogged) return children
    else return (
        <div className="h-screen w-screen bg-black">
            <h1>loading</h1>
        </div>
    )
}