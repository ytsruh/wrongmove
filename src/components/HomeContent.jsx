import Input from './Input'
import { useState } from 'react'
import Card from './cards/Card'
import propertyNews from '../assets/propertyNews.jpeg'
import movingStories from '../assets/movingStories.jpeg'
import AccountCard from './cards/AccountCard'
import WhereCanILive from './cards/WhereCanILive'
import RecentSearches from './RecentSearches'
import BorderlessCard from './cards/BorderlessCard'
import MobileHomeLink from './cards/MobileHomeLink'

import createAccount from '../assets/icons/createAccount.png'
import soldPricesSearch from '../assets/icons/soldPricesSearch.png'
import requestAgentValuation from '../assets/icons/requestAgentValuation.png'
import overseasProperties from '../assets/icons/overseasProperties.png'
import commercialPropertyForSale from '../assets/icons/commercialPropertyForSale.png'
import commercialPropertyForRent from '../assets/icons/commercialPropertyForRent.png'
import whereCanILiveIcon from '../assets/icons/whereCanILiveIcon.png'
import drawASearch from '../assets/icons/drawASearch.png'

import useDocTitle from '../hooks/useDocTitle'

function HomeContent() {

    useDocTitle('Home')

    const [searchData, setSearchData] = useState()

    // capture search box input
    const onChange = (e) => {
        setSearchData(e.target.value)
    }

    // Search Submit
    const onClick = (e) => {
        console.log(e.target.name + ' ' + searchData)
    }

  return (
    <>
        <div className="home-hero">
            <div className="home-hero-image w-100">
                <div className="home-hero-container">
                    <div className="home-title w-100">
                        <h1>Find your sad</h1>
                        <p>Search properties for sale and to rent in the UK</p>
                    </div>
                    <div className="home-hero-search w-100">
                        <Input 
                            type="text" 
                            placeholder={`e.g. 'York', 'NW3', 'NW3 5TY' or 'Waterloo Station'`} 
                            onChange={onChange}
                        />
                        <button onClick={onClick} name={'Sale'} className="btn btn-primary">For Sale</button>
                        <button onClick={onClick} name={'Rent'} className="btn btn-primary">To Rent</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-content">
            <div className="four-column-grid gap-1 mobile-hide">
                <Card 
                    label='AGENTS'
                    title='Agent Registration'
                    copy='List your properties on wrongmove by registering as an agent.'
                    linkTo='/register/agent'
                    linkText='Register'
                />
                <Card 
                    img={propertyNews.src}
                    label='PROPERTY NEWS'
                    title='Help to buy equity scheme in England set to end close'
                    copy='Read more...'
                    linkTo='/register/agent'
                    linkText='Visit the Wrongmove blog'
                />
                <Card 
                    img={movingStories.src}
                    label='MOVING STORIES'
                    title='Moving to my childhood dream home was our right move'
                    copy={`Read Siobhan's story...`}
                    linkTo='/register/agent'
                    linkText='Find out more'
                />
                <AccountCard />
            </div>
            <div className="four-column-grid gap-1 home-cards-section-2 mobile-hide">
                <WhereCanILive />
                <RecentSearches />
            </div>
            <div className="four-column-grid mobile-hide">
                <BorderlessCard />
                <BorderlessCard 
                    title='Commercial property'
                    desc='Search freehold and leasehold commercial properties in the UK'
                    linkText='Search now'
                    linkTo='/'
                />
                <BorderlessCard 
                    title='Investors and landlords'
                    desc='Get the latest rent and yield figures direct to your inbox'
                    linkText='Sign up now'
                    linkTo='/'
                />
            </div>
        </div>
        <div className="mobile-home-content w-100">
            <div className="home-title home-title-background">
                <h1>Find your sad</h1>
                <p>Search properties for sale and to rent in the UK</p>
                <div className="btn-container">
                    <button className="btn-primary">For Sale</button>
                    <button className="btn-primary">To Rent</button>
                </div>
            </div>
            <div className="home-mobile-links">
                <MobileHomeLink />
                <MobileHomeLink 
                    to='/register/user'
                    image={createAccount.src}
                    title='Create an account'
                />
                <MobileHomeLink 
                    to='/somewhere'
                    image={soldPricesSearch.src}
                    title='Sold prices search'
                    text='See what properties in your local area sold for'
                />
                <MobileHomeLink 
                    to='/somewhere'
                    image={requestAgentValuation.src}
                    title='Request agent valuation'
                    text='Accurate market valuation from local property experts'
                />
                <MobileHomeLink 
                    to='/somewhere'
                    image={overseasProperties.src}
                    title='Overseas properties'
                />
                <MobileHomeLink 
                    to='/somewhere'
                    image={commercialPropertyForSale.src}
                    title='Commercial property for sale'
                />
                <MobileHomeLink 
                    to='/somewhere'
                    image={commercialPropertyForRent.src}
                    title='Commercial property for rent'
                />
                <MobileHomeLink 
                    to='/somewhere'
                    image={whereCanILiveIcon.src}
                    title='Where can I live'
                />
                <MobileHomeLink 
                    to='/somewhere'
                    image={drawASearch.src}
                    title='Draw a search'
                />
            </div>
            <div className="mobile-recent-searches">
                <RecentSearches className='no-border'/>
            </div>
        </div>
    </>
  )
}

export default HomeContent