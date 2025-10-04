import { Code2, Cog, Layers, Zap, Shield, Workflow, CheckCircle, ArrowRight, Database, Cloud, Lock, Sparkles } from "lucide-react"
import styles from "./software-development.module.css"

export default function SoftwareDevelopmentPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.badge}>
                <Sparkles size={14} />
                Enterprise Solutions
              </span>
              <h1 className={styles.heroTitle}>
                Custom Software <br />
                <span className={styles.gradient}>Development Services</span>
              </h1>
              <p className={styles.heroDescription}>
                Transform your business with tailored software solutions that scale with your ambitions. We design, 
                develop, and deploy enterprise-grade applications that give you a competitive edge in the digital landscape.
              </p>
              <div className={styles.heroActions}>
                <button className={styles.primaryButton}>
                  Start Your Project
                  <ArrowRight size={20} />
                </button>
                <button className={styles.secondaryButton}>View Portfolio</button>
              </div>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>200+</div>
                  <div className={styles.statLabel}>Projects Completed</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>99%</div>
                  <div className={styles.statLabel}>Client Satisfaction</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Support Available</div>
                </div>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.floatingCard}>
                <Code2 size={32} />
                <span>Clean Code</span>
              </div>
              <div className={styles.floatingCard}>
                <Zap size={32} />
                <span>High Performance</span>
              </div>
              <div className={styles.floatingCard}>
                <Shield size={32} />
                <span>Secure & Reliable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Comprehensive Software Development Services</h2>
            <p className={styles.sectionSubtitle}>
              End-to-end software solutions tailored to your unique business requirements
            </p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={`${styles.serviceCard} ${styles.featured}`}>
              <div className={styles.cardIcon}>
                <Code2 size={32} />
              </div>
              <h3>Custom Application Development</h3>
              <p>
                Full-stack applications built with cutting-edge technologies. From concept to deployment, we create
                scalable solutions that grow with your business.
              </p>
              <ul className={styles.featureList}>
                <li>
                  <CheckCircle size={16} /> Modern tech stack
                </li>
                <li>
                  <CheckCircle size={16} /> Scalable architecture
                </li>
                <li>
                  <CheckCircle size={16} /> Cloud-native design
                </li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <Database size={28} />
              </div>
              <h3>Database Design & Management</h3>
              <p>Robust database architecture and optimization for efficient data management and retrieval.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <Cloud size={28} />
              </div>
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud applications designed for AWS, Azure, and Google Cloud platforms.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <Cog size={28} />
              </div>
              <h3>Legacy System Modernization</h3>
              <p>Transform outdated systems into modern, efficient applications without disrupting operations.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <Layers size={28} />
              </div>
              <h3>API Development & Integration</h3>
              <p>Robust APIs and seamless integrations to connect your systems and unlock data potential.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <Shield size={28} />
              </div>
              <h3>Enterprise Software</h3>
              <p>Large-scale applications with advanced security, compliance, and integration capabilities.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <Workflow size={28} />
              </div>
              <h3>Process Automation</h3>
              <p>Automated workflows that improve efficiency, reduce errors, and save valuable time.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <Lock size={28} />
              </div>
              <h3>Security & Compliance</h3>
              <p>Enterprise-grade security measures and compliance with industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={styles.technologies}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Technologies We Work With</h2>
            <p className={styles.sectionSubtitle}>
              Leveraging the latest and most reliable technologies for your projects
            </p>
          </div>
          <div className={styles.techGrid}>
            <div className={styles.techCategory}>
              <h3>Frontend</h3>
              <div className={styles.techItems}>
                <span>React</span>
                <span>Next.js</span>
                <span>Vue.js</span>
                <span>Angular</span>
                <span>TypeScript</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3>Backend</h3>
              <div className={styles.techItems}>
                <span>Node.js</span>
                <span>Python</span>
                <span>Java</span>
                <span>.NET</span>
                <span>Go</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3>Databases</h3>
              <div className={styles.techItems}>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>Redis</span>
                <span>Elasticsearch</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3>Cloud & DevOps</h3>
              <div className={styles.techItems}>
                <span>AWS</span>
                <span>Azure</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className={styles.process}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Proven Development Process</h2>
            <p className={styles.sectionSubtitle}>
              A systematic approach that ensures quality, transparency, and timely delivery
            </p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>01</div>
              <div className={styles.timelineContent}>
                <h3>Discovery & Planning</h3>
                <p>
                  We dive deep into your business requirements, analyze workflows, and create detailed specifications
                  with clear milestones and deliverables.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>02</div>
              <div className={styles.timelineContent}>
                <h3>Design & Architecture</h3>
                <p>
                  Our team designs intuitive interfaces and robust system architecture, creating prototypes for
                  validation before development begins.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>03</div>
              <div className={styles.timelineContent}>
                <h3>Development & Testing</h3>
                <p>
                  Using agile methodologies, we build your solution with continuous integration, automated testing, and
                  regular progress updates.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>04</div>
              <div className={styles.timelineContent}>
                <h3>Deployment & Support</h3>
                <p>
                  We handle deployment, provide comprehensive training, and offer ongoing maintenance to ensure your
                  software continues to perform optimally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Build Something Extraordinary?</h2>
            <p>Let's discuss your project and create software that transforms your business operations.</p>
            <button className={styles.ctaButton}>
              Schedule a Consultation
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
