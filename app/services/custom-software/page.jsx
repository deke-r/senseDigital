import Head from "next/head"
import Layout from "../../../components/Layout"
import styles from "../../../styles/pages/services.module.css"
import { Code2, Cog, Layers, Zap, Shield, Workflow } from "lucide-react"

export default function CustomSoftwarePage() {
  return (
 
     
      <main className="container my-5">
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className={styles.pageTitle}>Custom Software Development</h1>
              <p className={styles.heroSubtitle}>
                We develop custom software solutions that perfectly align with your business processes, 
                helping you achieve operational efficiency and competitive advantage.
              </p>
              <div className={styles.heroActions}>
                <button className={styles.primaryBtn}>Get Started</button>
                <button className={styles.secondaryBtn}>View Case Studies</button>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Custom Software Development"
                className={`img-fluid ${styles.heroImage}`}
              />
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className={styles.servicesSection}>
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className={styles.sectionTitle}>Our Custom Software Development Services</h2>
              <p className={styles.sectionSubtitle}>
                Comprehensive solutions tailored to your business requirements
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.serviceCard}>
                <Code2 className={styles.serviceIcon} />
                <h3>Custom Application Development</h3>
                <p>Full-stack custom applications built with modern technologies and best practices.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.serviceCard}>
                <Cog className={styles.serviceIcon} />
                <h3>Legacy System Modernization</h3>
                <p>Transform outdated systems into modern, efficient, and maintainable applications.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.serviceCard}>
                <Layers className={styles.serviceIcon} />
                <h3>API Development & Integration</h3>
                <p>Robust APIs and seamless integrations to connect your systems and data.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.serviceCard}>
                <Zap className={styles.serviceIcon} />
                <h3>Cloud-Native Solutions</h3>
                <p>Scalable cloud applications designed for performance, reliability, and cost-efficiency.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.serviceCard}>
                <Shield className={styles.serviceIcon} />
                <h3>Enterprise Software</h3>
                <p>Large-scale enterprise applications with advanced security and compliance features.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.serviceCard}>
                <Workflow className={styles.serviceIcon} />
                <h3>Process Automation</h3>
                <p>Automated workflows and business processes to improve efficiency and reduce errors.</p>
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
                Proven methodology for delivering high-quality custom software
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={styles.processCard}>
                <div className={styles.processNumber}>01</div>
                <h4>Discovery & Planning</h4>
                <p>We understand your requirements and create detailed project specifications and architecture.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={styles.processCard}>
                <div className={styles.processNumber}>02</div>
                <h4>Design & Prototyping</h4>
                <p>We create user-centered designs and interactive prototypes for validation.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={styles.processCard}>
                <div className={styles.processNumber}>03</div>
                <h4>Development & Testing</h4>
                <p>We build your solution using agile methodologies with continuous testing and quality assurance.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={styles.processCard}>
                <div className={styles.processNumber}>04</div>
                <h4>Deployment & Support</h4>
                <p>We deploy your software and provide ongoing maintenance, updates, and support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="row">
            <div className="col-12 text-center">
              <h2 className={styles.ctaTitle}>Ready to Build Your Custom Solution?</h2>
              <p className={styles.ctaSubtitle}>
                Let's create software that perfectly fits your business needs and drives growth.
              </p>
              <button className={styles.ctaButton}>Start Your Project</button>
            </div>
          </div>
        </section>
      </main>

  )
}
