import { useState, useEffect } from "react"
import { useRouter } from "next/router"

function index() {

    const router = useRouter()

    const [user, setUser] = useState(true)

    useEffect(() => {
        if(!user) {
            router.push('/login/agent')
        }
    }, [])

    if(user) {
        return (
        <div>
            <h1>Agent Dashboard</h1>
        </div>
    )
}
}

export default index