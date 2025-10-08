export const metadata = {
  title: "SEO Outsourcing Services – MetaSense",
  description:
    "Outsource your SEO to MetaSense for expert optimization, improved search rankings, and measurable results. Focus on your business while we handle your SEO campaigns.",
  keywords:
    "SEO outsourcing, SEO services, outsource SEO, search engine optimization, MetaSense SEO, SEO campaign management, on-page SEO, off-page SEO, SEO experts, digital marketing SEO",
  alternates: {
    canonical: "https://metasense.in/services/search-engine-optimization-outsourcing-seo",
  },
  openGraph: {
    title: "SEO Outsourcing Services – MetaSense",
    description:
      "MetaSense provides professional SEO outsourcing services to improve website visibility, drive traffic, and enhance online presence for businesses.",
    url: "https://metasense.in/services/search-engine-optimization-outsourcing-seo",
    siteName: "MetaSense",
    images: [
      {
        url: "https://metasense.in/og-seo-outsourcing.jpg",
        width: 1200,
        height: 630,
        alt: "MetaSense SEO Outsourcing Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Outsourcing Services – MetaSense",
    description:
      "Outsource your SEO to MetaSense for expert on-page and off-page optimization, better rankings, and measurable ROI.",
    images: ["https://metasense.in/og-seo-outsourcing.jpg"],
    creator: "@MetaSense",
  },
};



import React from 'react'
import Link from "next/link"
import { Users, Clock, DollarSign, CheckCircle, ArrowRight, BarChart3, Target, Shield, Zap, TrendingUp } from "lucide-react"
import styles from "./seo-outsourcing.module.css"
import CTATriggerButton from "@/components/CTATriggerButton"
import CTAModal from "@/components/CTAmodal"

const SearchEngineOptimizationOutsourcingSeo = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Access to experienced SEO professionals with proven track records"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Savings",
      description: "Focus on your core business while we handle all SEO activities"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Effective",
      description: "Reduce overhead costs while getting professional SEO results"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Mitigation",
      description: "Avoid costly SEO mistakes with our proven methodologies"
    }
  ]

  const benefits = [
    { metric: "60%", label: "Cost Reduction" },
    { metric: "3x", label: "Faster Results" },
    { metric: "95%", label: "Client Satisfaction" },
    { metric: "24/7", label: "Dedicated Support" }
  ]

  const services = [
    "Complete SEO Management",
    "Technical SEO Audits",
    "Content Strategy & Creation",
    "Link Building Campaigns",
    "Local SEO Optimization",
    "E-commerce SEO",
    "SEO Reporting & Analytics",
    "White-label SEO Services"
  ]

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>SEO Outsourcing Services</h1>
            <p className={styles.heroSubtitle}>
              Delegate your SEO tasks to our expert team and focus on growing your business. 
              Our comprehensive SEO outsourcing services deliver results while saving you time and money.
            </p>
            <div className={styles.heroCta}>
              <CTATriggerButton
                text={
                  <>
                    Get SEO Quote <ArrowRight className={styles.arrowIcon} />
                  </>
                }
                className={`${styles.primaryButton} rounded-4 border-0`}
              />
              {/* <Link href="/contact" className={styles.primaryButton}>
                Get SEO Quote
              </Link> */}     
              <Link href="#services" className={styles.secondaryButton}>
                View Services
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.outsourcingCard}>
              <Users className="w-16 h-16 text-orange-500" />
              <div className={styles.trendLine}>
                <BarChart3 className="w-8 h-8 text-green-500" />
                <span className="text-2xl font-bold text-green-500">+60%</span>
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
        <h2 className={styles.sectionTitle}>Comprehensive SEO Outsourcing Solutions</h2>
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
            <h2 className={styles.servicesTitle}>Complete SEO Outsourcing Services</h2>
            <p className={styles.servicesDescription}>
              Our expert team handles all aspects of SEO while you focus on your core business. 
              From strategy to execution, we deliver measurable results.
            </p>
            <ul className={styles.servicesList}>
              {services.map((service, index) => (
                <li key={index} className={styles.serviceItem}>
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.servicesVisual}>
            <div className={styles.optimizationCard}>
              <Target className="w-12 h-12 text-orange-500 mb-4" />
              <div className={styles.optimizationInfo}>
                <div className={styles.optimizationTitle}>ROI</div>
                <div className={styles.optimizationScore}>300%</div>
              </div>
              <div className={styles.optimizationBadge}>Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <h2 className={styles.sectionTitle}>Our SEO Outsourcing Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Strategy Development</h3>
            <p>Create a comprehensive SEO strategy tailored to your business goals and industry</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Team Assignment</h3>
            <p>Assign dedicated SEO experts to handle all aspects of your campaign</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Implementation</h3>
            <p>Execute SEO strategies with regular monitoring and optimization</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Reporting & Optimization</h3>
            <p>Provide detailed reports and continuously optimize for better results</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to Outsource Your SEO?</h2>
        <p className={styles.ctaDescription}>
          Get a free SEO outsourcing consultation and discover how we can help grow your business
        </p>
        <CTATriggerButton
          text={
            <>
              Start SEO Outsourcing <ArrowRight className={styles.arrowIcon} />
            </>
          }
          className={`${styles.ctaButton} rounded-4 border-0 `}
        />
        {/* <Link href="/contact" className={styles.ctaButton}>
          Start SEO Outsourcing
        </Link> */}
      </section>

      <CTAModal />
      </div>
  )
}

export default SearchEngineOptimizationOutsourcingSeo
