import React from 'react'
import Page1 from './Page1'
import FeaturedProducts from './FeaturedProducts'
import RangeOfCategories from './RangeOfCategories'
import Page2 from './Page2'
import FAQ from './FAQ'

function MainLandingPage() {
    return (
        <div className=''>
            <Page1 />
            <FeaturedProducts />
            <RangeOfCategories />
            <Page2 />
            <FAQ />
        </div>
    )
}

export default MainLandingPage