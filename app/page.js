import Banner from '@/components/Banner'
import IndustriesCarousel from '@/components/IndustriesCarousel'
import SolutionsSection from '@/components/SolutionsSection'
import SuccessStories from '@/components/SuccessStories'
import TrustedSection from '@/components/TrustedSection'
import WorkCarousel from '@/components/WorkCarousel'
import React from 'react'

const page = () => {
  return (
    <>

    <Banner/>
    <SuccessStories/>
    <WorkCarousel/>


    <TrustedSection/>
    
    <IndustriesCarousel/>
    <SolutionsSection/>
    
    </>
  )
}

export default page