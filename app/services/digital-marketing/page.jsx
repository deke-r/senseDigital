import styles from "../../styles/pages/services.module.css"
import { TrendingUp, Search, Users, Target, BarChart3, Globe } from "lucide-react"

export default function DigitalMarketingPage() {
  return (
    <main className="container my-5">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className={styles.pageTitle}>Digital Marketing</h1>
            <p className={styles.heroSubtitle}>
              We implement data-driven digital marketing strategies to boost your online presence, attract more
              customers, and drive sustainable business growth.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn}>Get Started</button>
              <button className={styles.secondaryBtn}>View Case Studies</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Digital Marketing"
              className={`img-fluid ${styles.heroImage}`}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.servicesSection}>
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className={styles.sectionTitle}>Our Digital Marketing Services</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive digital marketing solutions to grow your business
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Search className={styles.serviceIcon} />
              <h3>SEO Optimization</h3>
              <p>Search engine optimization to improve your website's visibility and organic traffic.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <TrendingUp className={styles.serviceIcon} />
              <h3>Social Media Marketing</h3>
              <p>Strategic social media campaigns to engage your audience and build brand awareness.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Target className={styles.serviceIcon} />
              <h3>PPC Advertising</h3>
              <p>Pay-per-click advertising campaigns to drive targeted traffic and conversions.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <BarChart3 className={styles.serviceIcon} />
              <h3>Analytics & Reporting</h3>
              <p>Comprehensive analytics and reporting to track performance and optimize campaigns.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Users className={styles.serviceIcon} />
              <h3>Content Marketing</h3>
              <p>Strategic content creation and distribution to attract and engage your target audience.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Globe className={styles.serviceIcon} />
              <h3>Email Marketing</h3>
              <p>Targeted email campaigns to nurture leads and maintain customer relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className={styles.sectionTitle}>Our Marketing Process</h2>
            <p className={styles.sectionSubtitle}>
              Data-driven approach to digital marketing success
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h4>Strategy & Planning</h4>
              <p>We analyze your business goals and develop a comprehensive digital marketing strategy.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h4>Campaign Development</h4>
              <p>We create and launch targeted marketing campaigns across multiple digital channels.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h4>Monitoring & Optimization</h4>
              <p>We continuously monitor performance and optimize campaigns for better results.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h4>Reporting & Analysis</h4>
              <p>We provide detailed reports and insights to measure success and plan future strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="row">
          <div className="col-12 text-center">
            <h2 className={styles.ctaTitle}>Ready to Grow Your Business Online?</h2>
            <p className={styles.ctaSubtitle}>
              Let's create a digital marketing strategy that drives results and grows your business.
            </p>
            <button className={styles.ctaButton}>Start Your Campaign</button>
          </div>
        </div>
      </section>
    </main>
  )
}
