"use client"
import React from "react"
import styles from "../styles/components/service-banner.module.css"
import { ArrowRight, CheckCircle } from "lucide-react"

const ServiceBanner = ({ 
  title, 
  subtitle, 
  description, 
  features = [],
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  stats = []
}) => {
  return (
    <section className={styles.bannerSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className={styles.bannerContent}>
              <h1 className={styles.bannerTitle}>
                {title}
              </h1>
              <p className={styles.bannerSubtitle}>
                {subtitle}
              </p>
              <p className={styles.description}>
                {description}
              </p>
              
              {features.length > 0 && (
                <ul className={styles.featureList}>
                  {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <CheckCircle className={styles.checkIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className={styles.bannerActions}>
                <button className={styles.primaryBtn}>
                  {primaryButtonText}
                  <ArrowRight size={20} />
                </button>
                <button className={styles.secondaryBtn}>
                  {secondaryButtonText}
                </button>
              </div>

              {stats.length > 0 && (
                <div className={styles.bannerStats}>
                  {stats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                      <span className={styles.statNumber}>{stat.number}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.bannerImage}>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt={title}
                className="img-fluid"
              />
              <div className={styles.floatingCard}>
                <div className={styles.cardIcon}>🚀</div>
                <div className={styles.cardContent}>
                  <h4>Expert Team</h4>
                  <p>Dedicated professionals ready to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceBanner
