import { Code, Layers, Zap, Database, Cloud, Lock, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import styles from "./web-app.module.css"

export default function WebAppDevelopmentPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section - Gradient with floating elements */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Sparkles size={14} />
              <span>Full-Stack Excellence</span>
            </div>
            <h1 className={styles.title}>
              Build Powerful <span className={styles.accent}>Web Applications</span> That Scale
            </h1>
            <p className={styles.subtitle}>
              Transform your business with custom web applications built using cutting-edge technologies. From MVPs to
              enterprise solutions, we deliver scalable, secure, and high-performance applications.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn}>
                Start Your Project
                <ArrowRight size={18} />
              </button>
              <button className={styles.secondaryBtn}>View Case Studies</button>
            </div>
            <div className={styles.techStack}>
              <span>Built with:</span>
              <div className={styles.techLogos}>
                <div className={styles.techItem}>React</div>
                <div className={styles.techItem}>Node.js</div>
                <div className={styles.techItem}>Next.js</div>
                <div className={styles.techItem}>PostgreSQL</div>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.floatingCard}>
              <Code size={24} />
              <span>Clean Code</span>
            </div>
            <div className={styles.floatingCard}>
              <Zap size={24} />
              <span>Fast Performance</span>
            </div>
            <div className={styles.floatingCard}>
              <Lock size={24} />
              <span>Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Comprehensive Web App Solutions</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <Code size={28} />
              </div>
              <h3>Custom Web Applications</h3>
              <p>Tailored solutions built from scratch to meet your unique business requirements and workflows.</p>
              <ul className={styles.features}>
                <li>
                  <CheckCircle2 size={16} /> Modern frameworks
                </li>
                <li>
                  <CheckCircle2 size={16} /> Responsive design
                </li>
                <li>
                  <CheckCircle2 size={16} /> API integration
                </li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <Layers size={28} />
              </div>
              <h3>Progressive Web Apps</h3>
              <p>PWAs that work offline, load instantly, and provide native app-like experiences.</p>
              <ul className={styles.features}>
                <li>
                  <CheckCircle2 size={16} /> Offline functionality
                </li>
                <li>
                  <CheckCircle2 size={16} /> Push notifications
                </li>
                <li>
                  <CheckCircle2 size={16} /> App-like feel
                </li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <Database size={28} />
              </div>
              <h3>Real-Time Applications</h3>
              <p>Live chat, collaboration tools, and dashboards with instant data synchronization.</p>
              <ul className={styles.features}>
                <li>
                  <CheckCircle2 size={16} /> WebSocket integration
                </li>
                <li>
                  <CheckCircle2 size={16} /> Live updates
                </li>
                <li>
                  <CheckCircle2 size={16} /> Collaborative features
                </li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <Cloud size={28} />
              </div>
              <h3>SaaS Platforms</h3>
              <p>Multi-tenant SaaS applications with subscription management and analytics.</p>
              <ul className={styles.features}>
                <li>
                  <CheckCircle2 size={16} /> Multi-tenancy
                </li>
                <li>
                  <CheckCircle2 size={16} /> Payment integration
                </li>
                <li>
                  <CheckCircle2 size={16} /> Analytics dashboard
                </li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <Zap size={28} />
              </div>
              <h3>API Development</h3>
              <p>RESTful and GraphQL APIs for seamless integration and data exchange.</p>
              <ul className={styles.features}>
                <li>
                  <CheckCircle2 size={16} /> RESTful APIs
                </li>
                <li>
                  <CheckCircle2 size={16} /> GraphQL support
                </li>
                <li>
                  <CheckCircle2 size={16} /> Documentation
                </li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <Lock size={28} />
              </div>
              <h3>Enterprise Solutions</h3>
              <p>Large-scale applications with advanced security and compliance features.</p>
              <ul className={styles.features}>
                <li>
                  <CheckCircle2 size={16} /> Enterprise security
                </li>
                <li>
                  <CheckCircle2 size={16} /> Compliance ready
                </li>
                <li>
                  <CheckCircle2 size={16} /> Scalable infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Development Approach</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h3>Discovery & Planning</h3>
              <p>We analyze requirements, define architecture, and create a detailed development roadmap.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h3>Design & Prototyping</h3>
              <p>Interactive prototypes and UI/UX design that prioritize user experience.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h3>Agile Development</h3>
              <p>Iterative development with regular demos and continuous integration.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <h3>Testing & Launch</h3>
              <p>Comprehensive testing, deployment, and post-launch support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Ready to Build Your Web Application?</h2>
            <p>Let's transform your idea into a powerful, scalable web application.</p>
            <button className={styles.ctaBtn}>
              Get Started Today
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
