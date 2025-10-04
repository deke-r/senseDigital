import React from 'react'
import Link from "next/link"
import { MapPin, Users, Star, CheckCircle, ArrowRight, BarChart3, Target, Globe, Phone, Clock } from "lucide-react"
import styles from "./local-seo.module.css"

const LocalSeo = () => {
  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Google My Business",
      description: "Optimize your Google My Business profile to appear in local search results"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Local Citations",
      description: "Build consistent business listings across local directories and platforms"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Review Management",
      description: "Generate positive reviews and manage your online reputation effectively"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Local Content",
      description: "Create location-specific content that resonates with your local audience"
    }
  ]

  const benefits = [
    { metric: "180%", label: "Local Visibility Increase" },
    { metric: "95%", label: "Google My Business Optimization" },
    { metric: "3x", label: "More Local Leads" },
    { metric: "85%", label: "Higher Conversion Rates" }
  ]

  const services = [
    "Google My Business Optimization",
    "Local Citation Building",
    "Review Management & Generation",
    "Local Content Marketing",
    "Local Schema Markup",
    "NAP Consistency Audit",
    "Local Link Building",
    "Local SEO Analytics & Reporting"
  ]

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Local SEO Services</h1>
            <p className={styles.heroSubtitle}>
              Dominate local search results and attract customers in your area. 
              Our local SEO strategies help you get found by nearby customers when they need your services.
            </p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.primaryButton}>
                Get Local SEO Audit
              </Link>
              <Link href="#services" className={styles.secondaryButton}>
                View Services
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.localCard}>
              <MapPin className="w-16 h-16 text-red-500" />
              <div className={styles.trendLine}>
                <BarChart3 className="w-8 h-8 text-green-500" />
                <span className="text-2xl font-bold text-green-500">+180%</span>
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
        <h2 className={styles.sectionTitle}>Comprehensive Local SEO Solutions</h2>
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
            <h2 className={styles.servicesTitle}>Complete Local SEO Services</h2>
            <p className={styles.servicesDescription}>
              Our expert team helps local businesses dominate search results in their area 
              through comprehensive local SEO strategies and optimization.
            </p>
            <ul className={styles.servicesList}>
              {services.map((service, index) => (
                <li key={index} className={styles.serviceItem}>
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.servicesVisual}>
            <div className={styles.optimizationCard}>
              <Target className="w-12 h-12 text-red-500 mb-4" />
              <div className={styles.optimizationInfo}>
                <div className={styles.optimizationTitle}>Local Ranking</div>
                <div className={styles.optimizationScore}>Top 3</div>
              </div>
              <div className={styles.optimizationBadge}>Optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <h2 className={styles.sectionTitle}>Our Local SEO Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Local Audit</h3>
            <p>Comprehensive analysis of your current local search presence and opportunities</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Google My Business</h3>
            <p>Optimize your GMB profile with accurate information and compelling content</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Citation Building</h3>
            <p>Build consistent business listings across local directories and platforms</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Review Management</h3>
            <p>Generate positive reviews and manage your online reputation effectively</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to Dominate Local Search?</h2>
        <p className={styles.ctaDescription}>
          Get a free local SEO audit and discover opportunities to attract more local customers
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Start Local SEO Today
        </Link>
      </section>
    </div>
  )
}

export default LocalSeo
