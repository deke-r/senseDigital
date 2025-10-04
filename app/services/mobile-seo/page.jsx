import React from 'react'
import Link from "next/link"
import { Smartphone, Zap, Globe, CheckCircle, ArrowRight, BarChart3, Target, Users, Clock, Search } from "lucide-react"
import styles from "./mobile-seo.module.css"

const MobileSeo = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Indexing",
      description: "Optimize for Google's mobile-first approach to ensure better rankings"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Page Speed Optimization",
      description: "Fast-loading mobile pages that improve user experience and SEO"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Mobile-friendly design that works seamlessly across all devices"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Experience",
      description: "Enhanced mobile UX that keeps visitors engaged and converts better"
    }
  ]

  const benefits = [
    { metric: "250%", label: "Mobile Traffic Growth" },
    { metric: "90%", label: "Faster Load Times" },
    { metric: "4x", label: "Better User Engagement" },
    { metric: "70%", label: "Higher Conversion Rates" }
  ]

  const services = [
    "Mobile-First Design Optimization",
    "Page Speed Enhancement",
    "Touch-Friendly Navigation",
    "Mobile Schema Markup",
    "Local Mobile SEO",
    "AMP Implementation",
    "Mobile Usability Testing",
    "Progressive Web App Development"
  ]

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Mobile SEO Services</h1>
            <p className={styles.heroSubtitle}>
              Optimize your website for mobile-first indexing and capture the growing mobile audience. 
              Our mobile SEO strategies ensure your site performs perfectly on all devices.
            </p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.primaryButton}>
                Get Mobile SEO Audit
              </Link>
              <Link href="#services" className={styles.secondaryButton}>
                View Services
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.mobileCard}>
              <Search className="w-16 h-16 text-blue-500" />
              <div className={styles.trendLine}>
                <BarChart3 className="w-8 h-8 text-green-500" />
                <span className="text-2xl font-bold text-green-500">+200%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statMetric}>{benefit.metric}</div>
            <div className={styles.statLabel}>{benefit.label}</div>
          </div>
        ))}
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Comprehensive Mobile SEO Solutions</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.servicesContent}>
          <div className={styles.servicesText}>
            <h2 className={styles.servicesTitle}>Complete Mobile SEO Services</h2>
            <p className={styles.servicesDescription}>
              Our expert team optimizes every element of your website to improve search rankings 
              and drive qualified traffic to your business.
            </p>
            <ul className={styles.servicesList}>
              {services.map((service, index) => (
                <li key={index} className={styles.serviceItem}>
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.servicesVisual}>
            <div className={styles.optimizationCard}>
              <Globe className="w-12 h-12 text-blue-500 mb-4" />
              <div className={styles.optimizationInfo}>
                <div className={styles.optimizationTitle}>SEO Score</div>
                <div className={styles.optimizationScore}>95/100</div>
              </div>
              <div className={styles.optimizationBadge}>Optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <h2 className={styles.sectionTitle}>Our Mobile SEO Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Website Audit</h3>
            <p>Comprehensive analysis of your current SEO performance and technical issues</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Keyword Research</h3>
            <p>Identify high-value keywords that your target audience is searching for</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Content Optimization</h3>
            <p>Optimize existing content and create new content based on keyword research</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Technical Implementation</h3>
            <p>Implement technical SEO improvements and monitor performance</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to Dominate Search Results?</h2>
        <p className={styles.ctaDescription}>
          Get a free on-page SEO audit and discover opportunities to improve your rankings
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Start Your SEO Journey
        </Link>
      </section>
    </div>
  )
}

export default MobileSeo
