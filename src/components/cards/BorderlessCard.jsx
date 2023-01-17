import InlineLink from "../InlineLink"


function BorderlessCard(props) {
  return (
    <div className="card borderless-card">
        <h3 className="effraReg">{props.title}</h3>
        <p>{props.desc}</p>
        <InlineLink 
            text={props.linkText}
            to={props.linkTo}
        />
    </div>
  )
}

BorderlessCard.defaultProps = {
    linkText: 'Search now',
    linkTo: '/comingsoon',
    desc: 'See what property in your local area sold for',
    title: 'Sold house prices'
}

export default BorderlessCard