"use client"
import React, { useState } from 'react'
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react'
import { useDarkMode } from '../context/DarkModeContext'
import styles from '../styles/components/cta-section.module.css'

const CTASection = () => {
  const { isDarkMode } = useDarkMode()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: ''
    })
  }

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className={styles.content}>
              <h2 className={styles.title}>
                Ready to Transform Your Business?
              </h2>
              <p className={styles.subtitle}>
                Join hundreds of successful businesses that trust us with their digital growth. 
                Let's create something amazing together.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <Phone size={20} />
                  </div>
                  <span>Free Consultation</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <MessageCircle size={20} />
                  </div>
                  <span>24/7 Support</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <Mail size={20} />
                  </div>
                  <span>Quick Response</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className={styles.ctaCard}>
              <h3>Get Started Today</h3>
              <p>Tell us about your project and we'll get back to you within 24 hours.</p>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className={styles.input}
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <select 
                  name="service"
                  className={styles.select}
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="seo">SEO Services</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="other">Other</option>
                </select>
                <button type="submit" className={styles.submitBtn}>
                  Get Free Quote
                  <ArrowRight size={18} />
                </button>
              </form>
              <p className={styles.privacy}>
                🔒 Your information is secure and will never be shared
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection