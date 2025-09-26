import styles from "../styles/components/hero.module.css"

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Blockchain &amp; AI solutions for your next big breakthrough</h1>
              <p className={styles.heroSubtitle}>
                With 11 years leading blockchain, we build powerful apps for fintech, retail, healthcare, real estate,
                and cybersecurity pioneers. From R&amp;D to launch, we bring any of your ideas to life since 2007.
              </p>
              <div className={styles.statsContainer}>
                <div className={styles.statItem}>
                  <p className={styles.statLabel}>450+ success stories</p>
                </div>
                {/* Additional stats can be added here */}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            {/* Placeholder for a hero image or illustration */}
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Blockchain and AI solutions"
              className={`img-fluid ${styles.heroImage}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
