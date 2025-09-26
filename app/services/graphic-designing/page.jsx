import styles from "../../styles/pages/services.module.css"
import { Palette, Image, Type, Layers, Monitor, Smartphone } from "lucide-react"

export default function GraphicDesigningPage() {
  return (
    <main className="container my-5">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className={styles.pageTitle}>Graphic Designing</h1>
            <p className={styles.heroSubtitle}>
              We craft visually stunning and impactful graphic designs that resonate with your audience and elevate your
              brand presence across all platforms.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn}>Get Started</button>
              <button className={styles.secondaryBtn}>View Portfolio</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Graphic Designing"
              className={`img-fluid ${styles.heroImage}`}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.servicesSection}>
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className={styles.sectionTitle}>Our Graphic Design Services</h2>
            <p className={styles.sectionSubtitle}>
              Creative design solutions that make your brand stand out
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Palette className={styles.serviceIcon} />
              <h3>Brand Identity Design</h3>
              <p>Complete brand identity packages including logos, color schemes, and brand guidelines.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Image className={styles.serviceIcon} />
              <h3>Print Design</h3>
              <p>Professional print materials including brochures, business cards, and marketing collateral.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Type className={styles.serviceIcon} />
              <h3>Typography Design</h3>
              <p>Custom typography and font selection to enhance your brand's visual communication.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Layers className={styles.serviceIcon} />
              <h3>Web Graphics</h3>
              <p>Web-optimized graphics, icons, and visual elements for digital platforms.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Monitor className={styles.serviceIcon} />
              <h3>UI/UX Design</h3>
              <p>User interface and user experience design for websites and applications.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={styles.serviceCard}>
              <Smartphone className={styles.serviceIcon} />
              <h3>Social Media Graphics</h3>
              <p>Eye-catching graphics and templates for social media platforms and campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className={styles.sectionTitle}>Our Design Process</h2>
            <p className={styles.sectionSubtitle}>
              Creative process that delivers exceptional design solutions
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h4>Discovery & Research</h4>
              <p>We understand your brand, target audience, and design requirements through comprehensive research.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h4>Concept Development</h4>
              <p>We create initial design concepts and explore different creative directions for your project.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h4>Design & Refinement</h4>
              <p>We develop the chosen concept and refine it based on your feedback and requirements.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h4>Final Delivery</h4>
              <p>We deliver the final design files in all required formats for your use across different platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="row">
          <div className="col-12 text-center">
            <h2 className={styles.ctaTitle}>Ready to Elevate Your Brand Design?</h2>
            <p className={styles.ctaSubtitle}>
              Let's create stunning visual designs that capture your brand essence and engage your audience.
            </p>
            <button className={styles.ctaButton}>Start Your Design Project</button>
          </div>
        </div>
      </section>
    </main>
  )
}
