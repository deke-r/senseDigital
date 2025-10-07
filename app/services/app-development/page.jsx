import { Smartphone, Tablet, Watch, Zap, Users, Shield, ArrowRight, Star } from "lucide-react"
import styles from "./app-dev.module.css"
import CTATriggerButton from "@/components/CTATriggerButton"
import CTAModal from "@/components/CTAmodal"
                  
export default function AppDevelopmentPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Star size={14} fill="currentColor" />
              <span>iOS & Android Development</span>
            </div>
            <h1 className={styles.title}>
              Mobile Apps That Users <span className={styles.gradient}>Love & Use Daily</span>
            </h1>
            <p className={styles.subtitle}>
              We create intuitive, high-performance mobile applications for iOS and Android that engage users and drive
              business growth. From concept to App Store launch, we handle everything.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <Smartphone size={20} />
                <span>Native & Cross-Platform</span>
              </div>
              <div className={styles.feature}>
                <Zap size={20} />
                <span>Fast Performance</span>
              </div>
              <div className={styles.feature}>
                <Shield size={20} />
                <span>Secure & Reliable</span>
              </div>
            </div>
            <div className={styles.actions}>
              <CTATriggerButton
                text={
                  <>
                    Start Your App <ArrowRight className={styles.arrowIcon} />
                  </>
                }
                className={`${styles.primaryBtn} rounded-4`}
              />
              {/* <button className={styles.primaryBtn}>
                Start Your App
                <ArrowRight size={18} />
              </button> */}
              <button className={styles.secondaryBtn}>View App Portfolio</button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneScreen}>
                <div className={styles.appBar}></div>
                <div className={styles.appContent}>
                  <div className={styles.appCard}></div>
                  <div className={styles.appCard}></div>
                  <div className={styles.appCard}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Complete Mobile App Development</h2>
          <div className={styles.grid}>
            <div className={styles.serviceCard}>
              <Smartphone className={styles.icon} size={36} />
              <h3>Native iOS Development</h3>
              <p>Swift and SwiftUI apps optimized for iPhone and iPad with native performance and features.</p>
            </div>
            <div className={styles.serviceCard}>
              <Tablet className={styles.icon} size={36} />
              <h3>Native Android Development</h3>
              <p>Kotlin and Jetpack Compose apps that leverage the full power of Android devices.</p>
            </div>
            <div className={styles.serviceCard}>
              <Watch className={styles.icon} size={36} />
              <h3>Cross-Platform Apps</h3>
              <p>React Native and Flutter solutions for cost-effective apps on both platforms.</p>
            </div>
            <div className={styles.serviceCard}>
              <Zap className={styles.icon} size={36} />
              <h3>UI/UX Design</h3>
              <p>Beautiful, intuitive interfaces designed following platform-specific guidelines.</p>
            </div>
            <div className={styles.serviceCard}>
              <Users className={styles.icon} size={36} />
              <h3>Backend & APIs</h3>
              <p>Scalable backend infrastructure with secure APIs and real-time capabilities.</p>
            </div>
            <div className={styles.serviceCard}>
              <Shield className={styles.icon} size={36} />
              <h3>App Store Launch</h3>
              <p>Complete App Store and Play Store submission, optimization, and approval support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className="container">
          <h2 className={styles.processTitle}>Our App Development Journey</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>01</div>
              <h3>Discovery & Strategy</h3>
              <p>We define your app's purpose, target users, features, and create a detailed development roadmap.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>02</div>
              <h3>Design & Prototype</h3>
              <p>Interactive prototypes and pixel-perfect designs that bring your app vision to life.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>03</div>
              <h3>Development & Testing</h3>
              <p>Agile development with continuous testing on real devices to ensure quality.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>04</div>
              <h3>Launch & Growth</h3>
              <p>App store launch, user feedback integration, and ongoing updates to grow your user base.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Ready to Build Your Mobile App?</h2>
            <p>Let's turn your app idea into a reality that users will love.</p>
            <CTATriggerButton
              text={
                <>
                  Schedule a Consultation <ArrowRight className={styles.arrowIcon} />
                </>
              }
              className={`${styles.ctaBtn} rounded-4`}
            />
            {/* <button className={styles.ctaBtn}>
              Schedule a Consultation
              <ArrowRight size={20} />
            </button> */}
          </div>
        </div>
      </section>

      <CTAModal />
    </main>
  )
}
