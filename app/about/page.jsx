import Head from "next/head"
import Layout from "../../components/Layout"
import styles from "../../styles/pages/about.module.css"
import { Users, Award, Target, Globe } from "lucide-react"

export default function AboutPage() {
  return (
  <>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className={styles.pageTitle}>About Sense Digital</h1>
              <p className={styles.heroSubtitle}>
                We are a leading digital transformation company dedicated to helping businesses 
                thrive in the digital age through innovative technology solutions and exceptional service.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="About Sense Digital"
                className={`img-fluid ${styles.heroImage}`}
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={styles.missionSection}>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className={styles.missionCard}>
                <Target className={styles.missionIcon} />
                <h3>Our Mission</h3>
                <p>
                  To empower businesses with cutting-edge digital solutions that drive growth, 
                  enhance efficiency, and create meaningful connections with their customers.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className={styles.missionCard}>
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
        <section className={styles.statsSection}>
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={styles.statCard}>
                <Users className={styles.statIcon} />
                <h3 className={styles.statNumber}>500+</h3>
                <p className={styles.statLabel}>Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={styles.statCard}>
                <Award className={styles.statIcon} />
                <h3 className={styles.statNumber}>1000+</h3>
                <p className={styles.statLabel}>Projects Completed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={styles.statCard}>
                <Globe className={styles.statIcon} />
                <h3 className={styles.statNumber}>50+</h3>
                <p className={styles.statLabel}>Countries Served</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={styles.statCard}>
                <Award className={styles.statIcon} />
                <h3 className={styles.statNumber}>5+</h3>
                <p className={styles.statLabel}>Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className={styles.storySection}>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.storyText}>
                Founded in 2019, Sense Digital began as a small team of passionate developers and designers 
                who believed in the power of technology to transform businesses. What started as a vision 
                to bridge the gap between traditional business practices and modern digital solutions has 
                grown into a comprehensive digital agency serving clients worldwide.
              </p>
              <p className={styles.storyText}>
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
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={styles.valueCard}>
                <h4>Innovation</h4>
                <p>We stay ahead of the curve by embracing new technologies and creative approaches to solve complex challenges.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={styles.valueCard}>
                <h4>Quality</h4>
                <p>We deliver exceptional results through meticulous attention to detail and rigorous quality standards.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={styles.valueCard}>
                <h4>Integrity</h4>
                <p>We build lasting relationships based on trust, transparency, and honest communication.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={styles.valueCard}>
                <h4>Collaboration</h4>
                <p>We work closely with our clients as partners, ensuring their vision becomes our shared mission.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={styles.valueCard}>
                <h4>Excellence</h4>
                <p>We strive for excellence in everything we do, from initial concept to final delivery.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={styles.valueCard}>
                <h4>Growth</h4>
                <p>We are committed to continuous learning and improvement to better serve our clients.</p>
              </div>
            </div>
          </div>
        </section>
  
        </>

  )
}
