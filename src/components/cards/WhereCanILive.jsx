import InlineLink from '../InlineLink'

function WhereCanILive() {
  return (
    <div className='card whereCanILive card-border'>
        <div className="content">
          <h3>Where can I live?</h3>
          <p>{`We've created a new tool to help you easily find the areas that match your budget and needs.`}</p>
          <InlineLink
            to='/'
            text='Discover your perfect location'
          />
        </div>
        <div className="whereCanILiveImg"></div>
    </div>
  )
}

export default WhereCanILive