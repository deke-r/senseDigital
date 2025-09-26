import Head from "next/head"
import Layout from "../../components/Layout"
import ContactForm from "../../components/ContactForm"
import styles from "../../styles/pages/contact.module.css"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Sense Digital - Contact Us</title>
        <meta name="description" content="Get in touch with Sense Digital for inquiries and collaborations." />
        <meta property="og:title" content="Sense Digital - Contact Us" />
        <meta property="og:description" content="Get in touch with Sense Digital for inquiries and collaborations." />
        <meta property="og:image" content="/placeholder.svg?height=630&width=1200" />
      </Head>
      
      <main className="container my-5">
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="row">
            <div className="col-12 text-center">
              <h1 className={styles.pageTitle}>Contact Us</h1>
              <p className={styles.heroSubtitle}>
                Ready to start your next project? We'd love to hear from you. 
                Get in touch and let's discuss how we can help your business grow.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className={styles.contactSection}>
          <div className="row">
            {/* Contact Information */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className={styles.contactInfo}>
                <h3 className={styles.contactInfoTitle}>Get in Touch</h3>
                <p className={styles.contactInfoSubtitle}>
                  We're here to help and answer any question you might have. 
                  We look forward to hearing from you.
                </p>
                
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <MapPin className={styles.contactIcon} />
                    <div>
                      <h4>Address</h4>
                      <p>123 Business Street<br />Digital City, DC 12345</p>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <Phone className={styles.contactIcon} />
                    <div>
                      <h4>Phone</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <Mail className={styles.contactIcon} />
                    <div>
                      <h4>Email</h4>
                      <p>info@sensedigital.com</p>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <Clock className={styles.contactIcon} />
                    <div>
                      <h4>Business Hours</h4>
                      <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="col-lg-8">
              <div className={styles.formContainer}>
                <h3 className={styles.formTitle}>Send us a Message</h3>
                <p className={styles.formSubtitle}>
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <div className="row">
            <div className="col-12">
              <h3 className={styles.mapTitle}>Find Us</h3>
              <div className={styles.mapContainer}>
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Office Location Map"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
