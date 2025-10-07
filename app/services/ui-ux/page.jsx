import { Figma, Smartphone, Monitor, Users, Zap, Target, ArrowRight } from "lucide-react"
import styles from "./ui-ux.module.css"
import CTATriggerButton from "@/components/CTATriggerButton"
import CTAModal from "@/components/CTAmodal"

export default function UIUXPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                UI/UX Design That <span className={styles.gradient}>Delights Users</span>
              </h1>
              <p className={styles.heroSubtitle}>
                We create intuitive, beautiful interfaces that users love. From wireframes to high-fidelity prototypes,
                we design experiences that drive engagement and conversions.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>98%</div>
                  <div className={styles.statLabel}>User Satisfaction</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>150+</div>
                  <div className={styles.statLabel}>Projects Delivered</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>45%</div>
                  <div className={styles.statLabel}>Avg. Conversion Lift</div>
                </div>
              </div>
              <CTATriggerButton
                text={
                  <>
                    Start Your Design Project <ArrowRight className={styles.arrowIcon} />
                  </>
                }
                className={`${styles.ctaBtn} rounded-4`}
              />
              {/* <button className={styles.ctaBtn}>Start Your Design Project</button> */}
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.mockup}>
                <div className={styles.mockupScreen}>
                  <div className={styles.mockupHeader}></div>
                  <div className={styles.mockupContent}>
                    <div className={styles.mockupElement}></div>
                    <div className={styles.mockupElement}></div>
                    <div className={styles.mockupElement}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our UI/UX Services</h2>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <Figma className={styles.icon} />
              <h3>UI Design</h3>
              <p>Beautiful, pixel-perfect interfaces that align with your brand and captivate users.</p>
            </div>
            <div className={styles.serviceCard}>
              <Users className={styles.icon} />
              <h3>UX Research</h3>
              <p>Data-driven insights through user research, testing, and behavioral analysis.</p>
            </div>
            <div className={styles.serviceCard}>
              <Monitor className={styles.icon} />
              <h3>Web Design</h3>
              <p>Responsive web designs optimized for all devices and screen sizes.</p>
            </div>
            <div className={styles.serviceCard}>
              <Smartphone className={styles.icon} />
              <h3>Mobile Design</h3>
              <p>Native iOS and Android app designs that follow platform guidelines.</p>
            </div>
            <div className={styles.serviceCard}>
              <Zap className={styles.icon} />
              <h3>Prototyping</h3>
              <p>Interactive prototypes to validate ideas before development begins.</p>
            </div>
            <div className={styles.serviceCard}>
              <Target className={styles.icon} />
              <h3>Design Systems</h3>
              <p>Scalable design systems that ensure consistency across your product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Design Process</h2>
          <p className={styles.processIntro}>A proven methodology that delivers exceptional results</p>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h4>Research & Discovery</h4>
              <p>We analyze your users, competitors, and market to inform our design decisions.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h4>Wireframing</h4>
              <p>Low-fidelity wireframes map out the structure and user flow of your product.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h4>Visual Design</h4>
              <p>High-fidelity designs bring your product to life with colors, typography, and imagery.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h4>Prototyping</h4>
              <p>Interactive prototypes allow you to experience the product before development.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>05</div>
              <h4>User Testing</h4>
              <p>We validate designs with real users to ensure optimal usability and satisfaction.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>06</div>
              <h4>Handoff & Support</h4>
              <p>Complete design specs and assets delivered to your development team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Ready to Create Amazing User Experiences?</h2>
            <p>Let's design something users will love</p>
            <CTATriggerButton
              text={
                <>
                  Get Started <ArrowRight className={styles.arrowIcon} />
                </>
              }
              className={`${styles.ctaButton} rounded-4`}
            />
            {/* <button className={styles.ctaButton}>Get Started</button> */}
          </div>
        </div>
      </section>

      <CTAModal />
    </main>
  )
}
