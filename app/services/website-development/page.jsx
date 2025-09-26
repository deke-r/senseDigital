import styles from "../../../styles/pages/services.module.css"
import { Globe, Code, ShoppingCart, Database, Search, Shield } from "lucide-react"

export default function WebsiteDevelopmentPage() {
  return (
    <main className="container my-5">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className={styles.pageTitle}>Website Development</h1>
            <p className={styles.heroSubtitle}>
              We build high-performance, secure, and scalable websites that provide an exceptional user experience 
              and drive business growth in the digital marketplace.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn}>Get Started</button>
              <button className={styles.secondaryBtn}>View Portfolio</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Website Development"
              className={`img-fluid ${styles.heroImage}`}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.servicesSection}>
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className={styles.sectionTitle}>Our Website Development Services</h2>
            <p className={styles.sectionSubtitle}>
              From simple websites to complex web applications, we deliver solutions that work.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Globe className={styles.serviceIcon} />
              <h3>Custom Website Design</h3>
              <p>Unique, responsive websites tailored to your brand and business requirements.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <ShoppingCart className={styles.serviceIcon} />
              <h3>E-commerce Solutions</h3>
              <p>Online stores with secure payment processing and inventory management systems.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Code className={styles.serviceIcon} />
              <h3>Web Applications</h3>
              <p>Dynamic web applications with advanced functionality and user management.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Database className={styles.serviceIcon} />
              <h3>CMS Development</h3>
              <p>Content management systems for easy website updates and maintenance.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Search className={styles.serviceIcon} />
              <h3>SEO Optimization</h3>
              <p>Search engine optimization to improve your website's visibility and rankings.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Shield className={styles.serviceIcon} />
              <h3>Security & Maintenance</h3>
              <p>Ongoing security updates, backups, and maintenance to keep your site secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className={styles.sectionTitle}>Our Development Process</h2>
            <p className={styles.sectionSubtitle}>
              A systematic approach that ensures quality and timely delivery.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h4>Requirements Analysis</h4>
              <p>We analyze your business needs and define the project scope and objectives.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h4>Design & Planning</h4>
              <p>We create wireframes, mockups, and plan the technical architecture.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h4>Development & Testing</h4>
              <p>We build your website using modern technologies and rigorous testing.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h4>Launch & Support</h4>
              <p>We deploy your website and provide ongoing support and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="row">
          <div className="col-12 text-center">
            <h2 className={styles.ctaTitle}>Ready to Build Your Website?</h2>
            <p className={styles.ctaSubtitle}>
              Let's create a website that represents your brand and drives your business forward.
            </p>
            <button className={styles.ctaButton}>Start Your Project</button>
          </div>
        </div>
      </section>
    </main>
  )
}
