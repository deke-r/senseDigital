import Head from "next/head"
import Layout from "../../components/Layout"
import styles from "../../styles/pages/thank-you.module.css"
import { CheckCircle, ArrowRight, Home, Mail } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <Layout>
      <Head>
        <title>Sense Digital - Thank You</title>
        <meta name="description" content="Thank you for contacting Sense Digital. We'll get back to you soon." />
        <meta property="og:title" content="Sense Digital - Thank You" />
        <meta property="og:description" content="Thank you for contacting Sense Digital. We'll get back to you soon." />
        <meta property="og:image" content="/placeholder.svg?height=630&width=1200" />
      </Head>
      
      <main className="container my-5">
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 text-center">
              <div className={styles.successIcon}>
                <CheckCircle size={80} />
              </div>
              <h1 className={styles.pageTitle}>Thank You!</h1>
              <p className={styles.heroSubtitle}>
                Your message has been successfully sent. We appreciate you taking the time to reach out to us.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className={styles.contentCard}>
                <h2 className={styles.contentTitle}>What happens next?</h2>
                <div className={styles.stepsContainer}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h3>We'll Review Your Message</h3>
                      <p>Our team will carefully review your inquiry and understand your requirements.</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h3>We'll Get Back to You</h3>
                      <p>We'll respond within 24 hours with detailed information and next steps.</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h3>Let's Start Your Project</h3>
                      <p>Once we understand your needs, we'll create a customized proposal for you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 text-center">
              <h2 className={styles.ctaTitle}>While You Wait</h2>
              <p className={styles.ctaSubtitle}>
                Explore our services and learn more about how we can help your business grow.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/services" className={styles.primaryBtn}>
                  View Our Services <ArrowRight size={20} />
                </Link>
                <Link href="/about" className={styles.secondaryBtn}>
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className={styles.contactInfoSection}>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 text-center">
              <div className={styles.contactCard}>
                <Mail className={styles.contactIcon} />
                <h3>Need Immediate Assistance?</h3>
                <p>If you have urgent questions, feel free to contact us directly:</p>
                <div className={styles.contactDetails}>
                  <p><strong>Email:</strong> info@sensedigital.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
                <Link href="/contact" className={styles.contactBtn}>
                  Contact Us Again
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className={styles.backToHomeSection}>
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <Link href="/" className={styles.homeLink}>
                <Home size={20} />
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
