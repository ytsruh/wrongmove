import Link from "next/link"

function AccountCard() {
  return (
        <div className="account-card">
            <div className="account-card-img"></div>
            <p>Create alerts and save properties & searches</p>
            <div className="account-card-buttons">
                <Link href={'/register/user'}><button className="btn btn-primary effraReg">Create an account</button></Link>
                <Link href={'/login/user'}><button className="btn btn-secondary effraReg">Sign in</button></Link>
            </div>
        </div>
    )
}

export default AccountCard