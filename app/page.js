import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import FeaturesSection from '@/components/FeaturesSection'
import IndustriesCarousel from '@/components/IndustriesCarousel'
import SolutionsSection from '@/components/SolutionsSection'
import SuccessStories from '@/components/SuccessStories'
import TrustedSection from '@/components/TrustedSection'
import WorkCarousel from '@/components/WorkCarousel'
import CTASection from '@/components/CTASection'
import CTAModal from '@/components/CTAmodal'
import React from 'react'

const page = () => {
  return (
    <>
      {/* Enhanced Hero Section */}
      <Hero/>
      
      {/* Features Section */}
      <FeaturesSection/>
      
      {/* Success Stories & Stats */}
      <SuccessStories/>
      
      {/* Our Work Portfolio */}
      <WorkCarousel/>
      
      {/* Trusted by Companies */}
      <TrustedSection/>
      
      {/* Industries We Serve */}
      <IndustriesCarousel/>
      
      {/* Our Solutions */}
      <SolutionsSection/>
      
      {/* Call to Action */}
      <CTASection/>
      
      {/* Modal Component */}
      <CTAModal/>
    </>
  )
}

export default page
