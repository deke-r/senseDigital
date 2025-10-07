import { Globe, Palette, Smartphone, Rocket, TrendingUp, Shield, ArrowRight, Check } from "lucide-react"
import styles from "./website.module.css"
import CTATriggerButton from "@/components/CTATriggerButton"
import CTAModal from "@/components/CTAmodal"
          
export default function WebsiteDevelopmentPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1 className={styles.title}>
                Beautiful Websites That <span className={styles.highlight}>Convert Visitors</span> Into Customers
              </h1>
              <p className={styles.description}>
                We design and develop stunning, high-performance websites that captivate your audience and drive
                business growth. From landing pages to complex corporate sites, we bring your vision to life.
              </p>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Websites Launched</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>99%</div>
                  <div className={styles.statLabel}>Client Satisfaction</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>2 Weeks</div>
                  <div className={styles.statLabel}>Average Delivery</div>
                </div>
              </div>
              <div className={styles.actions}>
                <CTATriggerButton
                  text={
                    <>
                      Start Your Website <ArrowRight className={styles.arrowIcon} />
                    </>
                  }
                  className={`${styles.primaryBtn} rounded-4`}
                />
                {/* <button className={styles.primaryBtn}>
                  Start Your Website
                  <ArrowRight size={18} />
                </button> */}         
                <button className={styles.secondaryBtn}>View Portfolio</button>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.browserMockup}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className={styles.browserContent}>
                  <div className={styles.mockupSection}></div>
                  <div className={styles.mockupGrid}>
                    <div className={styles.mockupCard}></div>
                    <div className={styles.mockupCard}></div>
                    <div className={styles.mockupCard}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.servicesHeader}>
            <h2>Complete Website Solutions</h2>
            <p>Everything you need to establish a powerful online presence</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.card}>
              <Globe className={styles.icon} size={32} />
              <h3>Custom Website Design</h3>
              <p>Unique, brand-focused designs that stand out and engage your target audience effectively.</p>
              <ul className={styles.list}>
                <li>
                  <Check size={16} /> Responsive design
                </li>
                <li>
                  <Check size={16} /> Brand consistency
                </li>
                <li>
                  <Check size={16} /> Modern aesthetics
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <Palette className={styles.icon} size={32} />
              <h3>Landing Pages</h3>
              <p>High-converting landing pages optimized for campaigns, products, and lead generation.</p>
              <ul className={styles.list}>
                <li>
                  <Check size={16} /> Conversion focused
                </li>
                <li>
                  <Check size={16} /> A/B testing ready
                </li>
                <li>
                  <Check size={16} /> Fast loading
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <Smartphone className={styles.icon} size={32} />
              <h3>E-Commerce Websites</h3>
              <p>Complete online stores with secure payments, inventory management, and order tracking.</p>
              <ul className={styles.list}>
                <li>
                  <Check size={16} /> Payment integration
                </li>
                <li>
                  <Check size={16} /> Product management
                </li>
                <li>
                  <Check size={16} /> Shopping cart
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <Rocket className={styles.icon} size={32} />
              <h3>Corporate Websites</h3>
              <p>Professional business websites that build credibility and showcase your services.</p>
              <ul className={styles.list}>
                <li>
                  <Check size={16} /> Professional design
                </li>
                <li>
                  <Check size={16} /> Content management
                </li>
                <li>
                  <Check size={16} /> Multi-page structure
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <TrendingUp className={styles.icon} size={32} />
              <h3>SEO Optimization</h3>
              <p>Built-in SEO best practices to help your website rank higher in search results.</p>
              <ul className={styles.list}>
                <li>
                  <Check size={16} /> On-page SEO
                </li>
                <li>
                  <Check size={16} /> Meta optimization
                </li>
                <li>
                  <Check size={16} /> Performance tuning
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <Shield className={styles.icon} size={32} />
              <h3>Maintenance & Support</h3>
              <p>Ongoing updates, security patches, and technical support to keep your site running.</p>
              <ul className={styles.list}>
                <li>
                  <Check size={16} /> Regular updates
                </li>
                <li>
                  <Check size={16} /> Security monitoring
                </li>
                <li>
                  <Check size={16} /> 24/7 support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className="container">
          <h2 className={styles.processTitle}>Simple, Transparent Process</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>1</div>
              <div className={styles.timelineContent}>
                <h3>Consultation</h3>
                <p>We discuss your goals, target audience, and design preferences to create a clear project brief.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>2</div>
              <div className={styles.timelineContent}>
                <h3>Design</h3>
                <p>Our designers create mockups and prototypes for your review and feedback.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>3</div>
              <div className={styles.timelineContent}>
                <h3>Development</h3>
                <p>We build your website with clean code, ensuring speed, security, and responsiveness.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>4</div>
              <div className={styles.timelineContent}>
                <h3>Launch</h3>
                <p>We deploy your website and provide training on how to manage and update content.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Launch Your Website?</h2>
            <p>Let's create a website that represents your brand and drives results.</p>
            <CTATriggerButton
              text={
                <>
                  Get Your Free Quote <ArrowRight className={styles.arrowIcon} />
                </>
              }
              className={`${styles.ctaBtn} rounded-4`}
            />
            {/* <button className={styles.ctaBtn}>
              Get Your Free Quote
              <ArrowRight size={20} />
            </button> */}
          </div>
        </div>
      </section>

      <CTAModal />
    </main>
  )
}
