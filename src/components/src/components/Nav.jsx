import Image from "next/image"
import Link from "next/link"
import wrongmoveSmallLogo from '../assets/wrongmoveSmallLogo.png'
import iconUserPrimary24 from '../assets/icons/iconUserPrimary24.png'
import { useState, useEffect } from 'react'
function Nav() {

    const [mobileNavToggle, setMobileNavToggle] = useState(false)

  return (
    <nav>
        <div className="nav-container">
            <div className="nav-logo">
                <div height='32' width='32'>
                    <Link href='/'>
                        <div className="nav-logo-container">
                            <p>wrongmove</p>
                            <Image class src={wrongmoveSmallLogo} alt='wrongmove logo - click for home' />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="nav-links">
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
            <div className="hamburger" onClick={() => setMobileNavToggle(!mobileNavToggle)}>
                <div className="burgerline"></div>
                <div className="burgerline"></div>
                <div className="burgerline"></div>
            </div>
            <div className="nav-account">
                <Image src={iconUserPrimary24} alt='user icon'/>
            </div>
            <div className={`nav-links-mobile-modal ${!mobileNavToggle ? 'hide' : ''}`}>
                <div className="nav-links-mobile-modal-popout">
                    <div className="nav-links-popout-header">
                        <div className="mobile-links-exit-btn" onClick={() => setMobileNavToggle(!mobileNavToggle)}>
                            <div className="crossline cl1"></div>
                            <div className="crossline cl2"></div>
                        </div>
                        <div className="mobile-menu-logo">
                            <p>wrongmove</p>
                            <Image class src={wrongmoveSmallLogo} alt='wrongmove logo - click for home' />
                        </div>
                    </div>
                    <div className="nav-links-mobile-modal-content">
                        <div className="mobile-links">
                        {/* <ul>
                            <li>link1</li>
                            <li>link2</li>
                            <li>link3</li>
                        </ul> */}
                    </div>
                </div>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav