"use client"
import React from "react"
import styles from "../styles/components/banner.module.css"

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Blockchain &amp; AI solutions for your next big breakthrough
          </h1>
          <p className={styles.subheading}>
            With 11 years leading blockchain, we build powerful apps for fintech, retail,
            healthcare, real estate, and cybersecurity pioneers. From R&amp;D to launch, we
            bring any of your ideas to life since 2007.
          </p>
        </div>
      </div>
    </section>
  )
}
export default Banner

