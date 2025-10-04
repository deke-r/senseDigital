import React from 'react'
import Link from "next/link"
import { Link as LinkIcon, TrendingUp, Users, Globe, CheckCircle, ArrowRight, BarChart3, Target, Zap, Share2 } from "lucide-react"
import styles from "./off-page-seo.module.css"

const OffPageSeo = () => {
  const features = [
    {
      icon: <LinkIcon className="w-6 h-6" />,
      title: "Link Building",
      description: "High-quality backlinks from authoritative websites to boost domain authority"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Digital PR",
      description: "Strategic outreach and relationship building with industry influencers"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Brand Mentions",
      description: "Increase brand visibility and earn natural mentions across the web"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Signals",
      description: "Leverage social media presence to improve search engine rankings"
    }
  ]

  const benefits = [
    { metric: "300%", label: "Domain Authority Increase" },
    { metric: "150%", label: "More Quality Backlinks" },
    { metric: "4x", label: "Brand Visibility Growth" },
    { metric: "80%", label: "Higher Search Rankings" }
  ]

  const services = [
    "High-Quality Link Building",
    "Guest Post Outreach",
    "Digital PR Campaigns",
    "Brand Mention Monitoring",
    "Social Media Optimization",
    "Influencer Partnerships",
    "Content Distribution",
    "Reputation Management"
  ]

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Off-Page SEO Services</h1>
            <p className={styles.heroSubtitle}>
              Build authority and credibility through strategic off-page optimization. 
              Our comprehensive approach drives quality backlinks and boosts your search rankings.
            </p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.primaryButton}>
                Get Free Authority Audit
              </Link>
              <Link href="#services" className={styles.secondaryButton}>
                View Services
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.authorityCard}>
              <TrendingUp className="w-16 h-16 text-purple-500" />
              <div className={styles.trendLine}>
                <BarChart3 className="w-8 h-8 text-green-500" />
                <span className="text-2xl font-bold text-green-500">+300%</span>
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
        <h2 className={styles.sectionTitle}>Comprehensive Off-Page SEO Solutions</h2>
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
            <h2 className={styles.servicesTitle}>Complete Off-Page SEO Services</h2>
            <p className={styles.servicesDescription}>
              Our expert team builds authority and credibility through strategic off-page optimization 
              that drives quality backlinks and improves search rankings.
            </p>
            <ul className={styles.servicesList}>
              {services.map((service, index) => (
                <li key={index} className={styles.serviceItem}>
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.servicesVisual}>
            <div className={styles.authorityCard}>
              <Target className="w-12 h-12 text-purple-500 mb-4" />
              <div className={styles.authorityInfo}>
                <div className={styles.authorityTitle}>Domain Authority</div>
                <div className={styles.authorityScore}>85/100</div>
              </div>
              <div className={styles.authorityBadge}>High Authority</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <h2 className={styles.sectionTitle}>Our Off-Page SEO Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Authority Analysis</h3>
            <p>Comprehensive analysis of your current domain authority and backlink profile</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Link Building Strategy</h3>
            <p>Develop targeted strategies to acquire high-quality backlinks from relevant sites</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Content Outreach</h3>
            <p>Create valuable content and reach out to industry influencers and publications</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Monitoring & Optimization</h3>
            <p>Track progress and continuously optimize strategies for maximum impact</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to Build Authority?</h2>
        <p className={styles.ctaDescription}>
          Get a free off-page SEO audit and discover opportunities to boost your domain authority
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Start Building Authority
        </Link>
      </section>
    </div>
  )
}

export default OffPageSeo
