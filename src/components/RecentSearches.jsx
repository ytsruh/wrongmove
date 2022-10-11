import InlineLink from "./InlineLink"
import RecentSearch from "./cards/RecentSearch"

function RecentSearches() {
  return (
    <div className='card card-border recent-searches'>
        <h3 className='effraBold'>Recent Searches</h3>
        <RecentSearch />
        <RecentSearch />
    </div>
  )
}

export default RecentSearches