import iconUserPrimary24 from '../../assets/icons/iconUserPrimary24.png'
import Link from 'next/link'

function MobileHomeLink(props) {
  return (
    <Link href={props.to}>
        <div className='mobile-home-link'>
            {/* sets background image. prop must end in .src */}
            <div className="mobile-home-link-img" style={{backgroundImage: `url(${props.image})`}}></div>
            <h3 className='effraReg'>{props.title}</h3>
            <p className='effraReg'>{props.text}</p>
        </div>
    </Link>
  )
}

export default MobileHomeLink

MobileHomeLink.defaultProps = {
    to:'/login/user',
    image: iconUserPrimary24.src,
    title: 'Sign in',
    text: ''
}