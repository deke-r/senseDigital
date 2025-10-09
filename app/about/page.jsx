"use client";

import Head from "next/head"
import Layout from "../../components/Layout"
import styles from "../../styles/pages/about.module.css"
import { Users, Award, Target, Globe } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"

export default function AboutPage() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${isDarkMode ? styles.darkHero : styles.lightHero}`}>
  <div className="row mx-md-5">
    <div className="col-12">
      <h1 className={`${styles.pageTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>
        About Sense Digital
      </h1>
      <p className={`${styles.heroSubtitle} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
        We are a leading digital transformation company dedicated to helping businesses 
        thrive in the digital age through innovative technology solutions and exceptional service.
      </p>
    </div>
  </div>
</section>


      {/* Mission & Vision */}
      <section className={styles.missionSection}>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className={`${styles.missionCard} ${isDarkMode ? styles.darkMissionCard : styles.lightMissionCard}`}>
              <Target className={styles.missionIcon} />
              <h3>Our Mission</h3>
              <p>
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance efficiency, and create meaningful connections with their customers.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className={`${styles.missionCard} ${isDarkMode ? styles.darkMissionCard : styles.lightMissionCard}`}>
              <Globe className={styles.missionIcon} />
              <h3>Our Vision</h3>
              <p>
                To be the global leader in digital transformation, recognized for our innovation, 
                reliability, and commitment to client success in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${styles.statsSection} ${isDarkMode ? styles.darkStatsSection : styles.lightStatsSection}`}>
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={`${styles.statCard} ${isDarkMode ? styles.darkStatCard : styles.lightStatCard}`}>
              <Users className={styles.statIcon} />
              <h3 className={styles.statNumber}>125+</h3>
              <p className={styles.statLabel}>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={`${styles.statCard} ${isDarkMode ? styles.darkStatCard : styles.lightStatCard}`}>
              <Award className={styles.statIcon} />
              <h3 className={styles.statNumber}>175+</h3>
              <p className={styles.statLabel}>Projects Completed</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
  <div className={`${styles.statCard} ${isDarkMode ? styles.darkStatCard : styles.lightStatCard}`}>
    <Globe className={styles.statIcon} />
    <h3 className={styles.statNumber}>50+</h3>
    <p className={styles.statLabel}>Industries Served</p>
  </div>
</div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className={`${styles.statCard} ${isDarkMode ? styles.darkStatCard : styles.lightStatCard}`}>
              <Award className={styles.statIcon} />
              <h3 className={styles.statNumber}>3+</h3>
              <p className={styles.statLabel}>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.storySection}>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className={`${styles.sectionTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>Our Story</h2>
            <p className={`${styles.storyText} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
              Founded in 2019, Sense Digital began as a small team of passionate developers and designers 
              who believed in the power of technology to transform businesses. What started as a vision 
              to bridge the gap between traditional business practices and modern digital solutions has 
              grown into a comprehensive digital agency serving clients worldwide.
            </p>
            <p className={`${styles.storyText} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
              Over the years, we have successfully delivered hundreds of projects across various industries, 
              from startups looking to establish their digital presence to large enterprises seeking to 
              modernize their operations. Our commitment to quality, innovation, and client satisfaction 
              has earned us a reputation as a trusted partner in digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <h2 className={`${styles.sectionTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>Our Values</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={`${styles.valueCard} ${isDarkMode ? styles.darkValueCard : styles.lightValueCard}`}>
              <h4>Innovation</h4>
              <p>We stay ahead of the curve by embracing new technologies and creative approaches to solve complex challenges.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={`${styles.valueCard} ${isDarkMode ? styles.darkValueCard : styles.lightValueCard}`}>
              <h4>Quality</h4>
              <p>We deliver exceptional results through meticulous attention to detail and rigorous quality standards.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={`${styles.valueCard} ${isDarkMode ? styles.darkValueCard : styles.lightValueCard}`}>
              <h4>Integrity</h4>
              <p>We build lasting relationships based on trust, transparency, and honest communication.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={`${styles.valueCard} ${isDarkMode ? styles.darkValueCard : styles.lightValueCard}`}>
              <h4>Collaboration</h4>
              <p>We work closely with our clients as partners, ensuring their vision becomes our shared mission.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={`${styles.valueCard} ${isDarkMode ? styles.darkValueCard : styles.lightValueCard}`}>
              <h4>Excellence</h4>
              <p>We strive for excellence in everything we do, from initial concept to final delivery.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={`${styles.valueCard} ${isDarkMode ? styles.darkValueCard : styles.lightValueCard}`}>
              <h4>Growth</h4>
              <p>We are committed to continuous learning and improvement to better serve our clients.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
