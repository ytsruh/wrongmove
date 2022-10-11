import InlineLink from "../InlineLink"

function RecentSearch(props) {
  return (
    <div className="recent-search">
        <InlineLink 
            to={props.to}
            text={props.text}
            />
        <p className="effraLt">{props.label}</p>
    </div>
    )
}

RecentSearch.defaultProps = {
    to: '/user/login',
    text: 'Covent Garden, London',
    label: 'For Sale - Flats & Houses'
}

export default RecentSearch