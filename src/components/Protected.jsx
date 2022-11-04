import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function Protected(props) {

    const now = Math.floor(Date.now() / 1000)
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = () => {
            setUser(JSON.parse(sessionStorage.getItem('user')))
            setLoading(false)
        }
        fetchUser()
    }, [])

        if(loading) return <p>Loading</p>

        if(!loading && !user) {
            router.push('/login/agent')
        }

        if(!loading && user && now > user.expiry) {
            sessionStorage.removeItem('user')
            router.push('login/agent')
        }

        if(!loading && user && now < user.expiry) {
            return <>{props.children}</>
        }
}

export default Protected