import Input from './Input'
import { useState } from 'react'

function HomeContent() {

    const [searchData, setSearchData] = useState()

    const onChange = (e) => {
        setSearchData(e.target.value)
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
                        <button className="btn btn-primary">For Sale</button>
                        <button className="btn btn-primary">To Rent</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeContent