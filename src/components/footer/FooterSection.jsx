import FooterLink from "./FooterLink"

function FooterSection(props) {
  return (
    <div className="footer-section">
        <h3 className="effraReg">{props.title}</h3>
        <div className="footer-links">
        <FooterLink 
            href={props.link1}
            linkText={props.link1Text}
            />
        <FooterLink 
            href={props.link2}
            linkText={props.link2Text}
            />
        <FooterLink 
            href={props.link3}
            linkText={props.link3Text}
            />
        <FooterLink 
            href={props.link4}
            linkText={props.link4Text}
            />
        <FooterLink 
            href={props.link5}
            linkText={props.link5Text}
            />
        <FooterLink 
            href={props.link6}
            linkText={props.link6Text}
            />
        <FooterLink 
            href={props.link7}
            linkText={props.link7Text}
            />
        <FooterLink
            href={props.link8}
            linkText={props.link8Text}
            />
        </div>
    </div>
  )
}

export default FooterSection

FooterSection.defaultProps = {
    link1: '/comingsoon',
    link1Text: '',
    link2: '/comingsoon',
    link2Text: '',
    link3: '/comingsoon',
    link3Text: '',
    link4: '/comingsoon',
    link4Text: '',
    link5: '/comingsoon',
    link5Text: '',
    link6: '/comingsoon',
    link6Text: '',
    link7: '/comingsoon',
    link7Text: '',
    link8: '/comingsoon',
    link8Text: ''
}