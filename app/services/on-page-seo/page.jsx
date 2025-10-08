export const metadata = {
  title: "On-Page SEO Services – MetaSense",
  description:
    "Enhance your website's search engine visibility with MetaSense On-Page SEO services. Optimize meta tags, headings, content, images, and internal linking for better rankings.",
  keywords:
    "On-page SEO, MetaSense SEO services, meta tags optimization, headings optimization, content SEO, image SEO, internal linking, website SEO audit, search engine optimization, improve website ranking",
  alternates: {
    canonical: "https://metasense.in/services/on-page-seo",
  },
  openGraph: {
    title: "On-Page SEO Services – MetaSense",
    description:
      "MetaSense provides professional On-Page SEO services to improve website rankings and user experience through expert optimization techniques.",
    url: "https://metasense.in/services/on-page-seo",
    siteName: "MetaSense",
    images: [
      {
        url: "https://metasense.in/og-on-page-seo.jpg",
        width: 1200,
        height: 630,
        alt: "MetaSense On-Page SEO Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "On-Page SEO Services – MetaSense",
    description:
      "Boost your website's search engine performance with MetaSense On-Page SEO. Optimize your content, meta tags, images, and internal links effectively.",
    images: ["https://metasense.in/og-on-page-seo.jpg"],
    creator: "@MetaSense",
  },
};



import React from 'react'
import Link from "next/link"
import { FileText, Search, Target, Zap, CheckCircle, ArrowRight, BarChart3, Globe, Code, Eye } from "lucide-react"
import styles from "./on-page-seo.module.css"
import CTATriggerButton from "@/components/CTATriggerButton"
import CTAModal from "@/components/CTAmodal"

const OnPageSeo = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Content Optimization",
      description: "Strategic keyword placement and content structure for maximum search visibility"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical SEO",
      description: "Meta tags, schema markup, and site structure optimization"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Keyword Research",
      description: "Data-driven keyword strategies tailored to your business goals"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Page Speed Optimization",
      description: "Fast-loading pages that improve user experience and rankings"
    }
  ]

  const benefits = [
    { metric: "200%", label: "Organic Traffic Growth" },
    { metric: "85%", label: "Higher Click-Through Rates" },
    { metric: "3x", label: "More Qualified Leads" },
    { metric: "60%", label: "Faster Page Load Times" }
  ]

  const services = [
    "Meta Tags & Descriptions",
    "Header Tag Optimization",
    "Internal Linking Strategy",
    "Image Alt Text Optimization",
    "URL Structure Optimization",
    "Content Quality Enhancement",
    "Schema Markup Implementation",
    "Site Architecture Analysis"
  ]

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>On-Page SEO Services</h1>
            <p className={styles.heroSubtitle}>
              Optimize your website's content and structure to rank higher in search results. 
              Our comprehensive on-page SEO strategies drive organic traffic and boost conversions.
            </p>
            <div className={styles.heroCta}>
              <CTATriggerButton
                text={
                  <>
                    Get Free SEO Audit <ArrowRight className={styles.arrowIcon} />
                  </>
                }
                className={`${styles.primaryButton} rounded-4`}
              />
              {/* <Link href="/contact" className={styles.primaryButton}>
                Get Free SEO Audit
              </Link> */}
              <Link href="#services" className={styles.secondaryButton}>
                View Services
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.seoCard}>
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
        <h2 className={styles.sectionTitle}>Comprehensive On-Page SEO Solutions</h2>
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
            <h2 className={styles.servicesTitle}>Complete On-Page SEO Services</h2>
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
        <h2 className={styles.sectionTitle}>Our On-Page SEO Process</h2>
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
        <CTATriggerButton
          text={
            <>
              Start Your SEO Journey <ArrowRight className={styles.arrowIcon} />
            </>
          }
          className={`${styles.ctaButton} rounded-4`}
        />
        {/* <Link href="/contact" className={styles.ctaButton}>
          Start Your SEO Journey
        </Link> */}
      </section>

      <CTAModal />
    </div>
  )
}

export default OnPageSeo
