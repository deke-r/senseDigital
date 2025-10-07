"use client"
import React from 'react'
import { Code, Palette, Search, Smartphone, BarChart3, Shield, ArrowRight } from 'lucide-react'
import styles from '../styles/components/features-section.module.css'
import CTATriggerButton from './CTATriggerButton'

const FeaturesSection = () => {
  const features = [
    {
      icon: <Code className={styles.featureIcon} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      color: "#3a4ef9"
    },
    {
      icon: <Smartphone className={styles.featureIcon} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      color: "#3df3e5"
    },
    {
      icon: <Search className={styles.featureIcon} />,
      title: "SEO Services",
      description: "Comprehensive search engine optimization to improve your online visibility.",
      color: "#ff6b6b"
    },
    {
      icon: <BarChart3 className={styles.featureIcon} />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your business and reach your target audience.",
      color: "#4ecdc4"
    },
    {
      icon: <Palette className={styles.featureIcon} />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that provide exceptional user experiences.",
      color: "#45b7d1"
    },
    {
      icon: <Shield className={styles.featureIcon} />,
      title: "Security & Maintenance",
      description: "Ongoing security updates and maintenance to keep your applications running smoothly.",
      color: "#96ceb4"
    }
  ]

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className={styles.sectionBadge}>
              <span>Our Services</span>
            </div>
            <h2 className={styles.sectionTitle}>Complete Digital Solutions</h2>
            <p className={styles.sectionSubtitle}>
              We offer end-to-end digital services to help your business thrive in the modern world. 
              From concept to deployment, we've got you covered.
            </p>
          </div>
        </div>

        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className={styles.featureCard}>
                <div className={styles.featureIconContainer} style={{ backgroundColor: `${feature.color}20` }}>
                  <div className={styles.featureIconWrapper} style={{ color: feature.color }}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <div className={styles.featureLink}>
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className={styles.ctaSection}>
              <h3>Ready to Get Started?</h3>
              <p>Let's discuss your project and create something amazing together.</p>
              
              <CTATriggerButton
                text={
                  <>
                    Start Your Project <ArrowRight className={styles.arrowIcon} />
                  </>
                }
                className={`${styles.ctaButton} rounded-4`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
