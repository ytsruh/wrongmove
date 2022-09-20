import Image from "next/image"
import Link from "next/link"
import wrongmoveSmallLogo from '../assets/wrongmoveSmallLogo.png'
import iconUserPrimary24 from '../assets/icons/iconUserPrimary24.png'

function Nav() {
  return (
    <nav>
        <div className="nav-container container">
            <div className="nav-left">
                <div height='32' width='32'>
                    <Link href='/'>
                        <div className="nav-logo-container">
                            <p>wrongmove</p>
                            <Image class src={wrongmoveSmallLogo} alt='wrongmove logo - click for home' />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="nav-right">
                <ul>
                    <Link href='/buy'><a className="btn btn-nav">Buy</a></Link>
                    <Link href='/rent'><a className="btn btn-nav">Rent</a></Link>
                    <Link href='/house-prices'><a className="btn btn-nav">House Prices</a></Link>
                    <Link href='/find-agent'><a className="btn btn-nav">Find Agent</a></Link>
                    <Link href='/login/user'>
                        <div className="sign-in-nav">
                            <Image src={iconUserPrimary24} alt='user icon'/>
                            <p>Sign In</p>
                        </div>
                    </Link>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav