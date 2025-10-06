"use client";

import Head from "next/head"
import Layout from "../../components/Layout"
import ContactForm from "../../components/ContactForm"
import styles from "../../styles/pages/contact.module.css"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Award } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"

export default function ContactPage() {
  const { isDarkMode } = useDarkMode();

  return (
   
 
      
      <main className={`container my-5 ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
        {/* Hero Section */}
        <section className={`${styles.heroSection} ${isDarkMode ? styles.darkHero : styles.lightHero}`}>
          <div className="row">
            <div className="col-12 text-center">
              <h1 className={`${styles.pageTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>Contact Us</h1>
              <p className={`${styles.heroSubtitle} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
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
              <div className={`${styles.contactInfo} ${isDarkMode ? styles.darkContactInfo : styles.lightContactInfo}`}>
                <h3 className={`${styles.contactInfoTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>Get in Touch</h3>
                <p className={`${styles.contactInfoSubtitle} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
                  We're here to help and answer any question you might have. 
                  We look forward to hearing from you.
                </p>
                
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <MapPin className={`${styles.contactIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                    <div>
                      <h4 className={`${isDarkMode ? styles.darkText : styles.lightText}`}>Address</h4>
                      <p className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>123 Business Street<br />Digital City, DC 12345</p>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <Phone className={`${styles.contactIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                    <div>
                      <h4 className={`${isDarkMode ? styles.darkText : styles.lightText}`}>Phone</h4>
                      <p className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <Mail className={`${styles.contactIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                    <div>
                      <h4 className={`${isDarkMode ? styles.darkText : styles.lightText}`}>Email</h4>
                      <p className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>info@metasense.com</p>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <Clock className={`${styles.contactIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                    <div>
                      <h4 className={`${isDarkMode ? styles.darkText : styles.lightText}`}>Business Hours</h4>
                      <p className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="col-lg-8">
              <div className={`${styles.formContainer} ${isDarkMode ? styles.darkFormContainer : styles.lightFormContainer}`}>
                <h3 className={`${styles.formTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>Send us a Message</h3>
                <p className={`${styles.formSubtitle} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
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
              <h3 className={`${styles.mapTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>Find Us</h3>
              <div className={`${styles.mapContainer} ${isDarkMode ? styles.darkMapContainer : styles.lightMapContainer}`}>
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Office Location Map"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whyChooseUs}>
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className={`${styles.sectionTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>Why Choose MetaSense?</h2>
              <p className={`${styles.sectionSubtitle} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
                We're committed to delivering exceptional digital solutions that drive real results for your business.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className={`${styles.featureCard} ${isDarkMode ? styles.darkFeatureCard : styles.lightFeatureCard}`}>
                <Send className={`${styles.featureIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                <h4 className={`${styles.featureTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>Fast Response</h4>
                <p className={`${styles.featureDesc} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
                  We respond to all inquiries within 24 hours and provide quick turnaround times for projects.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className={`${styles.featureCard} ${isDarkMode ? styles.darkFeatureCard : styles.lightFeatureCard}`}>
                <MessageCircle className={`${styles.featureIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                <h4 className={`${styles.featureTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>Expert Consultation</h4>
                <p className={`${styles.featureDesc} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
                  Our team of experts provides personalized consultation to understand your unique business needs.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className={`${styles.featureCard} ${isDarkMode ? styles.darkFeatureCard : styles.lightFeatureCard}`}>
                <Award className={`${styles.featureIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                <h4 className={`${styles.featureTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>Proven Results</h4>
                <p className={`${styles.featureDesc} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
                  We have a track record of delivering successful digital marketing campaigns and web solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

  )
}
