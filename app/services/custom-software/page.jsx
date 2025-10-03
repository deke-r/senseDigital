import { Code2, Cog, Layers, Zap, Shield, Workflow, CheckCircle, ArrowRight } from "lucide-react"
import styles from "./custom-software.module.css"

export default function CustomSoftwarePage() {
  return (
    <main className={styles.page}>
      {/* Hero Section - Full width with gradient */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.badge}>Enterprise Solutions</span>
              <h1 className={styles.heroTitle}>
                Custom Software <br />
                <span className={styles.gradient}>Built for Your Business</span>
              </h1>
              <p className={styles.heroDescription}>
                Transform your operations with tailored software solutions that scale with your ambitions. We architect,
                develop, and deploy enterprise-grade applications that give you a competitive edge.
              </p>
              <div className={styles.heroActions}>
                <button className={styles.primaryButton}>
                  Start Your Project
                  <ArrowRight size={20} />
                </button>
                <button className={styles.secondaryButton}>View Case Studies</button>
              </div>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>150+</div>
                  <div className={styles.statLabel}>Projects Delivered</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>98%</div>
                  <div className={styles.statLabel}>Client Satisfaction</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Support Available</div>
                </div>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.codeBlock}>
                <div className={styles.codeHeader}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.codeContent}>
                  <code>
                    <span className={styles.comment}>// Your vision, our code</span>
                    <br />
                    <span className={styles.keyword}>const</span> solution ={" "}
                    <span className={styles.function}>buildCustomSoftware</span>({"{"}
                    <br />
                    &nbsp;&nbsp;scalability: <span className={styles.string}>'unlimited'</span>,<br />
                    &nbsp;&nbsp;performance: <span className={styles.string}>'optimized'</span>,<br />
                    &nbsp;&nbsp;security: <span className={styles.string}>'enterprise-grade'</span>
                    <br />
                    {"}"});
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Bento style */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Comprehensive Development Services</h2>
            <p className={styles.sectionSubtitle}>
              End-to-end software solutions tailored to your unique business requirements
            </p>
          </div>

          <div className={styles.bentoGrid}>
            <div className={`${styles.bentoCard} ${styles.large}`}>
              <Code2 className={styles.cardIcon} size={32} />
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

            <div className={styles.bentoCard}>
              <Cog className={styles.cardIcon} size={28} />
              <h3>Legacy Modernization</h3>
              <p>Transform outdated systems into modern, efficient applications without disrupting operations.</p>
            </div>

            <div className={styles.bentoCard}>
              <Layers className={styles.cardIcon} size={28} />
              <h3>API Development</h3>
              <p>Robust APIs and seamless integrations to connect your systems and unlock data potential.</p>
            </div>

            <div className={styles.bentoCard}>
              <Zap className={styles.cardIcon} size={28} />
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud applications designed for performance, reliability, and cost-efficiency.</p>
            </div>

            <div className={styles.bentoCard}>
              <Shield className={styles.cardIcon} size={28} />
              <h3>Enterprise Software</h3>
              <p>Large-scale applications with advanced security, compliance, and integration capabilities.</p>
            </div>

            <div className={styles.bentoCard}>
              <Workflow className={styles.cardIcon} size={28} />
              <h3>Process Automation</h3>
              <p>Automated workflows that improve efficiency, reduce errors, and save valuable time.</p>
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
