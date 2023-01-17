import Image from "next/image";
import Link from "next/link";
import wrongmoveSmallLogo from "../assets/wrongmoveSmallLogo.png";
import iconUserPrimary24 from "../assets/icons/iconUserPrimary24.png";
import { useState, useEffect } from "react";
function Nav() {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);
  const [user, setUser] = useState()

  const changeState = () => {
    setMobileNavToggle(!mobileNavToggle);
  };
  
  
  useEffect(() => {
    setUser(sessionStorage.getItem('user'))
  }, [mobileNavToggle]);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <div height="32" width="32">
            <Link href="/">
              <div className="nav-logo-container">
                <p>wrongmove</p>
                <Image src={wrongmoveSmallLogo} alt="wrongmove logo - click for home" />
              </div>
            </Link>
          </div>
        </div>
        <div className="nav-links">
          <ul>
            <Link href="/sales">
              <a className="btn btn-nav">Buy</a>
            </Link>
            <Link href="/rentals">
              <a className="btn btn-nav">Rent</a>
            </Link>
            <Link href="/comingsoon">
              <a className="btn btn-nav">House Prices</a>
            </Link>
            <Link href="/agents">
              <a className="btn btn-nav">Find Agent</a>
            </Link>
            <Link href="/comingsoon">
              <div className="sign-in-nav">
                <Image src={iconUserPrimary24} alt="user icon" />
                <p>Sign In</p>
              </div>
            </Link>
          </ul>
        </div>
        <div className="hamburger" onClick={changeState}>
          <div className="burgerline"></div>
          <div className="burgerline"></div>
          <div className="burgerline"></div>
        </div>
        <div
          onClick={changeState}
          className={`nav-links-mobile-modal ${!mobileNavToggle ? "hide" : ""}`}
        ></div>
        <div className={`nav-links-mobile-modal-popout ${!mobileNavToggle ? "hide" : ""}`}>
          <div className="nav-links-popout-header">
            <div className="mobile-links-exit-btn" onClick={changeState}>
              <div className="crossline cl1"></div>
              <div className="crossline cl2"></div>
            </div>
            <div className="mobile-menu-logo">
              <p>wrongmove</p>
              <Image src={wrongmoveSmallLogo} alt="wrongmove logo - click for home" />
            </div>
          </div>
          <div className="nav-links-popout-login">
            <div className="login-img-round">
              <Image src={iconUserPrimary24} alt="user icon" />
            </div>
            <Link href="/comingsoon">
              <p onClick={changeState}>Sign In</p>
            </Link>
          </div>
          <div className="nav-links-mobile-modal-content">
            <div className="mobile-links">
              <ul className="mobile-nav-ul">
                <Link href="/sales">
                  <li onClick={changeState}>
                    <h3>Buy</h3>
                  </li>
                </Link>
                <Link href="/sales">
                  <li onClick={changeState}>Properties for Sale</li>
                </Link>
                <Link href="/comingsoon">
                  <li onClick={changeState}>New home for Sale</li>
                </Link>
                <Link href="/comingsoon">
                  <li onClick={changeState}>Property Valuation</li>
                </Link>
                <Link href="/comingsoon">
                  <li onClick={changeState}>Where can I live?</li>
                </Link>
                <Link href="/comingsoon">
                  <li onClick={changeState}>Investors</li>
                </Link>
                <Link href="/comingsoon">
                  <li onClick={changeState}>Morgages</li>
                </Link>
                <hr />
              </ul>
              <ul className="mobile-nav-ul">
                <Link href="/rentals">
                  <li onClick={changeState}>
                    <h3>Rent</h3>
                  </li>
                </Link>
                <Link href="/rentals">
                  <li onClick={changeState}>Property to rent</li>
                </Link>
                <Link href="/comingsoon">
                  <li onClick={changeState}>Student property to rent</li>
                </Link>
                <Link href="/comingsoon">
                  <li onClick={changeState}>Where can I live?</li>
                </Link>
                <hr />
              </ul>
              <ul className="mobile-nav-ul">
                <Link href="/comingsoon">
                  <li onClick={changeState}>
                    <h3>House prices</h3>
                  </li>
                </Link>
                <Link href="/comingsoon">
                  <li onClick={changeState}>Sold house prices</li>
                </Link>
                <hr />
              </ul>

              <ul className="mobile-nav-ul">
                <Link href="/agent">
                  <li onClick={changeState}>
                    <h3>Agent</h3>
                  </li>
                </Link>
                {!user
                  ?
                  <>
                  <Link href="/login/agent">
                    <li onClick={changeState}>Login</li>
                  </Link>
                  <Link href="/register/agent">
                    <li onClick={changeState}>Register</li>
                  </Link>
                  </>
                  :
                  <>
                    <Link href="/agent">
                      <li onClick={changeState}>Dashboard</li>
                    </Link>
                    <Link href="/agent/create-listing">
                      <li onClick={changeState}>Create listing</li>
                    </Link>
                    <Link href="/agent/profile">
                      <li onClick={changeState}>Profile</li>
                    </Link>
                    <Link href="/agent/sales">
                      <li onClick={changeState}>Active For Sale</li>
                    </Link>
                    <Link href="/agent/rentals">
                      <li onClick={changeState}>Active Rentals</li>
                    </Link>
                    <Link href="/agent/logout">
                      <li onClick={changeState}>Logout</li>
                    </Link>
                  </>
                }
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
