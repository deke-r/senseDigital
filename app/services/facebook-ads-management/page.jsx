import Link from "next/link"
import { Facebook, Target, TrendingUp, DollarSign, BarChart3, Zap, ArrowRight } from "lucide-react"
import styles from "./facebook-ads.module.css"
import CTATriggerButton from "@/components/CTATriggerButton"
import CTAModal from "@/components/CTAmodal"

const FacebookAdsManagement = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Targeting",
      description: "Reach your ideal customers with advanced audience segmentation",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Campaign Optimization",
      description: "Continuous A/B testing and performance improvements",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "ROI Maximization",
      description: "Lower costs and higher returns on every ad dollar spent",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Detailed Analytics",
      description: "Comprehensive reporting and actionable insights",
    },
  ]

  const metrics = [
    { value: "3.5x", label: "Average ROAS" },
    { value: "45%", label: "Lower CPA" },
    { value: "2M+", label: "Ad Impressions" },
    { value: "98%", label: "Client Satisfaction" },
  ]

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.fbIcon}>
            <Facebook className="w-24 h-24" />
          </div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Facebook Ads Management</h1>
          <p className={styles.heroSubtitle}>
            Drive real results with data-driven Facebook advertising campaigns. Reach billions of users and convert them
            into loyal customers.
          </p>
          <div className={styles.heroCta}>
            <CTATriggerButton
              text={
                <>
                  Get Free Strategy Call <ArrowRight className={styles.arrowIcon} />
                </>
              }
              className={`${styles.primaryButton} rounded-4 border-0`}
            />
            {/* <Link href="/contact" className={styles.primaryButton}>
              Get Free Strategy Call
            </Link> */}
            <Link href="#features" className={styles.secondaryButton}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className={styles.metrics}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.metricCard}>
            <div className={styles.metricValue}>{metric.value}</div>
            <div className={styles.metricLabel}>{metric.label}</div>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className={styles.features} id="features">
        <h2 className={styles.sectionTitle}>Why Choose Our Facebook Ads Management?</h2>
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

      {/* Process Section */}
      <section className={styles.process}>
        <h2 className={styles.sectionTitle}>Our Proven Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Strategy Development</h3>
            <p className={styles.stepDescription}>
              We analyze your business goals and create a custom Facebook ads strategy
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Campaign Launch</h3>
            <p className={styles.stepDescription}>
              Design compelling ads and launch targeted campaigns to your ideal audience
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Optimize & Scale</h3>
            <p className={styles.stepDescription}>
              Continuously test, optimize, and scale winning campaigns for maximum ROI
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <Zap className="w-16 h-16 text-white mb-4" />
        <h2 className={styles.ctaTitle}>Ready to Scale Your Business?</h2>
        <p className={styles.ctaDescription}>Let's create Facebook ad campaigns that deliver real results</p>
        <CTATriggerButton
          text={
            <>
              Start Your Campaign <ArrowRight className={styles.arrowIcon} />
            </>
          }
          className={`${styles.ctaButton} rounded-4 border-0`}
        />
        {/* <Link href="/contact" className={styles.ctaButton}>
          Start Your Campaign
        </Link> */}
      </section>

      <CTAModal />
    </div>
  )
}

export default FacebookAdsManagement
