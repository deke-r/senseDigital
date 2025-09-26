import styles from "../../styles/pages/services.module.css"
import { Code, Globe, Database, Zap, Shield, Users, Settings, BarChart3, Cloud, Layers } from "lucide-react"

export default function WebAppDevelopmentPage() {
  return (
    <main className="container my-5">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className={styles.pageTitle}>Web App Development</h1>
            <p className={styles.heroSubtitle}>
              We build powerful and scalable web applications that enhance productivity, automate workflows, and deliver
              exceptional user experiences.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn}>Get Started</button>
              <button className={styles.secondaryBtn}>View Portfolio</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Web App Development"
              className={`img-fluid ${styles.heroImage}`}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.servicesSection}>
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className={styles.sectionTitle}>Our Web App Development Services</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive web application solutions for modern businesses
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Code className={styles.serviceIcon} />
              <h3>Custom Web Applications</h3>
              <p>Tailored web applications built with modern frameworks and technologies to meet your specific business requirements.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Globe className={styles.serviceIcon} />
              <h3>Progressive Web Apps</h3>
              <p>PWAs that combine the best of web and mobile experiences with offline capabilities and native-like performance.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Database className={styles.serviceIcon} />
              <h3>Real-time Applications</h3>
              <p>Web applications with real-time features like live chat, notifications, and collaborative tools using WebSockets.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Zap className={styles.serviceIcon} />
              <h3>API Development</h3>
              <p>RESTful and GraphQL APIs for seamless integration with third-party services and mobile applications.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Shield className={styles.serviceIcon} />
              <h3>Enterprise Solutions</h3>
              <p>Large-scale enterprise web applications with advanced security, compliance, and integration capabilities.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Users className={styles.serviceIcon} />
              <h3>SaaS Platform Development</h3>
              <p>Software as a Service platforms with multi-tenancy, subscription management, and scalable architecture.</p>
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
              Systematic approach to building high-quality web applications
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h4>Requirements & Architecture</h4>
              <p>We analyze your requirements, define the system architecture, and create detailed technical specifications.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h4>UI/UX Design</h4>
              <p>We create intuitive user interfaces and user experiences that engage users and drive conversions.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h4>Development & Integration</h4>
              <p>We build your web application using agile methodology with continuous integration and testing.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h4>Deployment & Optimization</h4>
              <p>We deploy your application and optimize for performance, security, and scalability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="row">
          <div className="col-12 text-center">
            <h2 className={styles.ctaTitle}>Ready to Build Your Web Application?</h2>
            <p className={styles.ctaSubtitle}>
              Let's create a powerful web application that transforms your business operations and drives growth.
            </p>
            <button className={styles.ctaButton}>Start Your Project</button>
          </div>
        </div>
      </section>
    </main>
  )
}
