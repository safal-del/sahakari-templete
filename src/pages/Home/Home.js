import React from 'react'
import Aboutus from '../../components/About_us/Aboutus'
import CTA from '../../components/CTA/CTA'
import Footers from '../../components/Footer/Footer'

import Sliders from '../../components/HeroSec/Sliders'
import LatestNews from '../../components/News/Latestnews'

import Service from '../../components/Services/Service'
import Stats from '../../components/Stats/clientstats'
import Testimonial from '../../components/Testimonials/Testimonial'


function Home() {
  return (
    <>
      
      <Sliders/>
      <Aboutus />
      <Service />
      <LatestNews />
      <Testimonial />
      <Stats />
      <CTA/>

      <Footers/>
    </>
  )
}

export default Home