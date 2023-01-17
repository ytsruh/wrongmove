import Link from "next/link"

function AccountCard() {
  return (
        <div className="account-card">
            <div className="account-card-img"></div>
            <p>Create or log into your account.</p>
            <div className="account-card-buttons">
                <Link href={'/register/agent'}><button className="btn btn-primary effraReg">Create an account</button></Link>
                <Link href={'/login/agent'}><button className="btn btn-secondary effraReg">Sign in</button></Link>
            </div>
        </div>
    )
}

export default AccountCard