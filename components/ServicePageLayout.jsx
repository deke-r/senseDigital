"use client"
import React from "react"
import Head from "next/head"
import Layout from "./Layout"
import ServiceBanner from "./ServiceBanner"
import styles from "../styles/pages/services.module.css"

const ServicePageLayout = ({ 
  pageData = {},
  children 
}) => {
  const {
    title = "",
    subtitle = "",
    description = "",
    features = [],
    stats = [],
    metaTitle = "",
    metaDescription = "",
    primaryButtonText = "Get Started",
    secondaryButtonText = "Learn More"
  } = pageData

  return (
    <>
   
      
      <ServiceBanner
        title={title}
        subtitle={subtitle}
        description={description}
        features={features}
        stats={stats}
        primaryButtonText={primaryButtonText}
        secondaryButtonText={secondaryButtonText}
      />
      
      <main className="container my-5">
        {children}
      </main>
    </>
  )
}

export default ServicePageLayout
