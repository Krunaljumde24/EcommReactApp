import React from 'react'
import Page1 from './Page1'
import FeaturedProducts from './FeaturedProducts'
import RangeOfCategories from './RangeOfCategories'
import Page2 from './Page2'

function MainLandingPage() {
    return (
        <div className=''>
            <Page1 />
            <FeaturedProducts />
            <RangeOfCategories />
            <Page2 />
        </div>
    )
}

export default MainLandingPage