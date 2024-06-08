import React from 'react'
import HeroSection from './HeroSection'
import iphone from "../../assets/iphone-14-pro.webp"
import mac from "../../assets/mac-system-cut.jfif"
import FeaturedProducts from './FeaturedProducts'
const HomePage = () => {
  return (
    <div>
        <HeroSection 
        title="Buy iPhone pro"
         subtitle="Experience the power of the new Iphone 14 pro" 
          link="/" 
          image={iphone}/>

    <FeaturedProducts/>

<HeroSection 
        title="Buy Mac pro"
         subtitle="Experience the power of the new Macpro" 
          link="/" 
          image={mac}/>
    </div>
  )
}

export default HomePage