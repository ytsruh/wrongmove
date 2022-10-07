import Input from './Input'
import { useState } from 'react'
import Card from './Card'
import propertyNews from '../assets/propertyNews.jpeg'
import movingStories from '../assets/movingStories.jpeg'
import AccountCard from './AccountCard'

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
                        <input 
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

        <div className="home-content four-column-grid gap-1">
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

    </>
  )
}

export default HomeContent