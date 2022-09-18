import Image from "next/image"
import Link from "next/link"
import wrongMoveLogoNav from '../assets/wrongMoveLogoNav.png'

function Nav() {
  return (
    <nav>
        <div className="nav-container container">
            <div className="nav-left">
                <Link href='/'><Image src={wrongMoveLogoNav} alt='wrongmove logo - click for home' /></Link>
            </div>
            <div className="nav-right">
                <ul>
                    <Link href='/buy'>Buy</Link>
                    <Link href='/rent'>Rent</Link>
                    <Link href='/house-prices'>House Prices</Link>
                    <Link href='/find-agent'>Find Agent</Link>
                    <Link href='/sign-in'>Sign In</Link>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav