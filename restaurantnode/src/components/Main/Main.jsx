import React from 'react'
import ChecfSection from './ChefSection/ChecfSection'
import MenuSection from './MenuSection/MenuSection'
// import OffersSection from './OffersSection/OffersSection'
import ReviewSection from './ReviewSection/ReviewSection'
import SliderFour from './SectionFour/SectionFour'
import SectionOne from './SectionOne/SectionOne'
import SectionThree from './SectionThree/SectionThree'
import SectionTwo from './SectionTwo/SectionTwo'
import TabsContainer from './TabsContainer/TabsContainer'


function Main() {
  return (
    <main>
        <SectionOne/>
        <SectionThree/>
        <SectionTwo/>
        <MenuSection/>
        <TabsContainer/>
        <SliderFour/>
        <ChecfSection/>
        <ReviewSection/>
    </main>
  )
}

export default Main