import { Palette, Layers, Sparkles, Pen, ImageIcon, Layout, ArrowRight } from "lucide-react"
import CTATriggerButton from "@/components/CTATriggerButton"
import styles from "./graphic-designing.module.css"
import CTAModal from "@/components/CTAmodal"

export default function GraphicDesigningPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section with Creative Gradient */}
      <section className={styles.hero}>
        <div className={styles.heroGradient}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.badge}>Creative Design Studio</span>
              <h1 className={styles.heroTitle}>
                Graphic Designing That <span className={styles.highlight}>Captivates</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Transform your brand vision into stunning visual experiences. From logos to complete brand identities,
                we craft designs that leave lasting impressions.
              </p>
              <div className={styles.heroActions}>
                {/* <button className={styles.primaryBtn}>Start Your Project</button> */}
                <CTATriggerButton
                  text={
                    <>
                      Start Your Project <ArrowRight className={styles.arrowIcon} />
                    </>
                  }
                  className={`${styles.primaryBtn} rounded-4`}
                />
                <button className={styles.secondaryBtn}>View Portfolio</button>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.designCard}>
                <Palette className={styles.floatingIcon} />
              </div>
              <div className={styles.designCard}>
                <Sparkles className={styles.floatingIcon} />
              </div>
              <div className={styles.designCard}>
                <Pen className={styles.floatingIcon} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Design Services</h2>
            <p className={styles.sectionSubtitle}>Comprehensive creative solutions for your brand</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Palette />
              </div>
              <h3>Brand Identity</h3>
              <p>
                Complete brand identity packages including logos, color palettes, and brand guidelines that define your
                unique presence.
              </p>
              <ul className={styles.serviceList}>
                <li>Logo Design</li>
                <li>Brand Guidelines</li>
                <li>Color Systems</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <ImageIcon />
              </div>
              <h3>Print Design</h3>
              <p>
                Professional print materials that make a tangible impact, from business cards to large-format displays.
              </p>
              <ul className={styles.serviceList}>
                <li>Business Cards</li>
                <li>Brochures & Flyers</li>
                <li>Packaging Design</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Layout />
              </div>
              <h3>Digital Graphics</h3>
              <p>Web-optimized graphics and visual elements designed for maximum impact across digital platforms.</p>
              <ul className={styles.serviceList}>
                <li>Web Graphics</li>
                <li>Social Media Assets</li>
                <li>Email Templates</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Layers />
              </div>
              <h3>Illustration</h3>
              <p>Custom illustrations that bring your ideas to life with unique, hand-crafted visual storytelling.</p>
              <ul className={styles.serviceList}>
                <li>Custom Illustrations</li>
                <li>Icon Sets</li>
                <li>Infographics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Creative Process</h2>
            <p className={styles.sectionSubtitle}>From concept to completion</p>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h4>Discovery</h4>
              <p>We dive deep into your brand, audience, and goals to understand what makes you unique.</p>
            </div>
            <div className={styles.processLine}></div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h4>Concept</h4>
              <p>Multiple creative directions are explored and presented for your review and feedback.</p>
            </div>
            <div className={styles.processLine}></div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h4>Refinement</h4>
              <p>Your chosen concept is polished and perfected through collaborative iterations.</p>
            </div>
            <div className={styles.processLine}></div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <h4>Delivery</h4>
              <p>Final files delivered in all formats you need, ready for any application.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Bring Your Vision to Life?</h2>
            <p className={styles.ctaSubtitle}>Let's create something extraordinary together</p>
            <CTATriggerButton
              text={
                <>
                  Get Started Today <ArrowRight className={styles.arrowIcon} />
                </>
              }
              className={`${styles.ctaButton} rounded-4`}
            />
            {/* <button className={styles.ctaButton}>Get Started Today</button> */}
          </div>
        </div>
      </section>

      <CTAModal />
    </main>
  )
}
