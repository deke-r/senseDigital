"use client"
import React from "react"
import { useForm } from "react-hook-form"
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react"
import { useDarkMode } from "../context/DarkModeContext"
import styles from "../styles/components/cta-section.module.css"
import CTAForm from "./CTAForm"

const CTASection = () => {
  const { isDarkMode } = useDarkMode()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Form submitted:", data)
    // Your API or email logic here
    reset()
  }

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className={styles.content}>
              <h2 className={styles.title}>Ready to Transform Your Business?</h2>
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


<CTAForm/>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
