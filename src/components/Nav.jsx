import Image from "next/image"
import Link from "next/link"
import wrongmoveLogoNav from '../assets/wrongmoveLogoNav.png'
import iconUserPrimary24 from '../assets/icons/iconUserPrimary24.png'

function Nav() {
  return (
    <nav>
        <div className="nav-container container">
            <div className="nav-left">
                <Link href='/'><Image src={wrongmoveLogoNav} alt='wrongmove logo - click for home' /></Link>
            </div>
            <div className="nav-right">
                <ul>
                    <Link href='/buy'>Buy</Link>
                    <Link href='/rent'>Rent</Link>
                    <Link href='/house-prices'>House Prices</Link>
                    <Link href='/find-agent'>Find Agent</Link>
                    <Link className="btn btn-border" href='/sign-in'>
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