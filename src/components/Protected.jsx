import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function Protected(props) {

    const now = Math.floor(Date.now() / 1000)
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            setUser(JSON.parse(sessionStorage.getItem('user')))
            setLoading(false)
        }
        fetchUser()
    }, [])

        if(loading) return <p>Loading</p>

        if(!loading && !user) {
            {console.log('not loading, no user');}
        }

        if(!loading && user && now > user.expiry) {
            {console.log('not loading, user, but expired jwt');}
        }

        if(!loading && user && now < user.expiry) {
            {console.log('all good');}
            return <>{props.children}</>
        }
}

export default Protected