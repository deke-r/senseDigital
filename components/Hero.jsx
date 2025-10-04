"use client"
import React from 'react'
import { ArrowRight, CheckCircle, Star, Users, Award, Clock } from 'lucide-react'
import { useDarkMode } from '../context/DarkModeContext'
import styles from '../styles/components/hero.module.css'

const Hero = () => {
  const { isDarkMode } = useDarkMode()
  
  const features = [
    "Free Consultation",
    "24/7 Support", 
    "Money-back Guarantee",
    "Expert Team"
  ]

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" }
  ]

  return (
    <section className={`${styles.heroSection} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                <Star className={styles.starIcon} />
                <span>Trusted by 500+ Businesses</span>
              </div>
              
              <h1 className={styles.heroTitle}>
                Transform Your Business with 
                <span className={styles.gradientText}> Digital Excellence</span>
              </h1>
              
              <p className={styles.heroSubtitle}>
                We're your strategic partner for digital growth. From cutting-edge web development 
                to powerful marketing campaigns, we deliver results that matter.
              </p>

              <div className={styles.features}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className={styles.stats}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.statItem}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className={styles.ctaButtons}>
                <button className={styles.primaryBtn}>
                  Get Free Quote
                  <ArrowRight className={styles.arrowIcon} />
                </button>
                <button className={styles.secondaryBtn}>
                  View Our Work
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-lg-5 col-md-12">
            <div className={styles.heroImage}>
              <div className={styles.imageContainer}>
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Digital Solutions"
                  className="img-fluid"
                />
                <div className={styles.floatingCard}>
                  <div className={styles.cardIcon}>
                    <Award size={24} />
                  </div>
                  <div className={styles.cardContent}>
                    <h4>Expert Team</h4>
                    <p>Certified professionals</p>
                  </div>
                </div>
                <div className={styles.floatingCard2}>
                  <div className={styles.cardIcon}>
                    <Clock size={24} />
                  </div>
                  <div className={styles.cardContent}>
                    <h4>Fast Delivery</h4>
                    <p>Quick turnaround time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
