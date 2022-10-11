import Input from './Input'
import { useState } from 'react'
import Card from './cards/Card'
import propertyNews from '../assets/propertyNews.jpeg'
import movingStories from '../assets/movingStories.jpeg'
import AccountCard from './cards/AccountCard'
import WhereCanILive from './cards/WhereCanILive'
import RecentSearches from './RecentSearches'
import BorderlessCard from './cards/BorderlessCard'

function HomeContent() {

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
        </div>
    </>
  )
}

export default HomeContent