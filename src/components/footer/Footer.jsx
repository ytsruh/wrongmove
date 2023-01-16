import FooterSection from "./FooterSection"
import Link from "next/link"

function Footer() {
  return (
        <footer>
            <div className="footer-container">
              <div className="footer-links-container">
              <FooterSection
                title='Wrongmove'
                link1=''
                link1Text='Search for sale'
                link2=''
                link2Text='Search for rent'
                link3=''
                link3Text='Commercial for sale'
                link4=''
                link4Text='Commercial for rent'
                link5=''
                link5Text='Search sold prices'
                link6=''
                link6Text='Sign in / Create account'
                link7=''
                link7Text='Blog'
                link8=''
                link8Text='Tech Blog'
              />
              <FooterSection
                title='Resources'
                link1=''
                link1Text='Where can I live?'
                link2=''
                link2Text='Stamp duty'
                link3=''
                link3Text='Students'
                link4=''
                link4Text='Removals'
                link5=''
                link5Text='Property guides'
                link6=''
                link6Text='House price index'
                link7=''
                link7Text='Help to buy'
              />
              <FooterSection
                title='Quick links'
                link1=''
                link1Text='Cheap flats to rent'
                link2=''
                link2Text='Property investment'
                link3=''
                link3Text='Cheap houses for sale'
                link4=''
                link4Text='Overseas'
                link5=''
                link5Text='Find an agent'
              />
              <FooterSection
                title='Wrongmove Plc'
                link1=''
                link1Text='About'
                link2=''
                link2Text='Press centre'
                link3=''
                link3Text='Investor relations'
                link4=''
                link4Text='Contact us'
                link5=''
                link5Text='Careers'
              />
              <FooterSection
                title='Locations'
                link1=''
                link1Text='England'
                link2=''
                link2Text='Scotland'
                link3=''
                link3Text='Northern Ireland'
                link4=''
                link4Text='Wales'
                link5=''
                link5Text='London'
                link6=''
                link6Text='London stations'
                link7=''
                link7Text='Spain'
                link8=''
                link8Text='France'
              />
              <FooterSection
                title='Agents'
                link1='/login/agent'
                link1Text='Agent Login'
                link2='/register/agent'
                link2Text='Agent Register                '
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
              <Link href={'/something'}><p>Site map</p></Link>
              <Link href={'/something'}><p>Help</p></Link>
              <Link href={'/something'}><p>Cookies</p></Link>
              <Link href={'/something'}><p>Safety and security</p></Link>
              <Link href={'/something'}><p>Terms of Use</p></Link>
              <Link href={'/something'}><p>Privacy Policy</p></Link>
            </div>
          </div>
        </footer>
    )
}

export default Footer