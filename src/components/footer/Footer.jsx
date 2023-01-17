import FooterSection from "./FooterSection"
import Link from "next/link"

function Footer() {
  return (
        <footer>
            <div className="footer-container">
              <div className="footer-links-container">
              <FooterSection
                title='Wrongmove'
                link1Text='Search for sale'
                link1='/sales'
                link2Text='Search for rent'
                link2='/rentals'
                link3Text='Commercial for sale'
                link4Text='Commercial for rent'
                link5Text='Search sold prices'
                link7Text='Blog'
                link8Text='Tech Blog'
              />
              <FooterSection
                title='Resources'
                link1Text='Where can I live?'
                link2Text='Stamp duty'
                link3Text='Students'
                link4Text='Removals'
                link5Text='Property guides'
                link6Text='House price index'
                link7Text='Help to buy'
              />
              <FooterSection
                title='Quick links'
                link1Text='Cheap flats to rent'
                link2Text='Property investment'
                link3Text='Cheap houses for sale'
                link4Text='Overseas'
                link5Text='Find an agent'
              />
              <FooterSection
                title='Wrongmove Plc'
                link1Text='About'
                link2Text='Press centre'
                link3Text='Investor relations'
                link4Text='Contact us'
                link5Text='Careers'
              />
              <FooterSection
                title='Locations'
                link1Text='England'
                link2Text='Scotland'
                link3Text='Northern Ireland'
                link4Text='Wales'
                link5Text='London'
                link6Text='London stations'
                link7Text='Spain'
                link8Text='France'
              />
              <FooterSection
                title='Agents'
                link1='/login/agent'
                link1Text='Agent Login'
                link2='/register/agent'
                link2Text='Agent Register'
                link3='/agent'
                link3Text='Agent Dashboard'
                link4='/agent/sales'
                link4Text='Sales Listings'
                link5='/agent/rental'
                link5Text='Rental Listings'
              />
            </div>
            <div className="footer-site-links">
              <h3>This site:</h3>
              <Link href={'/comingsoon'}><p>Site map</p></Link>
              <Link href={'/comingsoon'}><p>Help</p></Link>
              <Link href={'/comingsoon'}><p>Cookies</p></Link>
              <Link href={'/comingsoon'}><p>Safety and security</p></Link>
              <Link href={'/comingsoon'}><p>Terms of Use</p></Link>
              <Link href={'/comingsoon'}><p>Privacy Policy</p></Link>
            </div>
          </div>
        </footer>
    )
}

export default Footer