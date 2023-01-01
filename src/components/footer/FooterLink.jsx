import Link from "next/link"

function FooterLink(props) {
  return (
    <div className="footer-link">
        <Link href={props.href}><p className="footer-link">{props.linkText}</p></Link>
    </div>
  )
}

FooterLink.defaultProps = {
    href: '/',
    linkText: 'Home'
}

export default FooterLink