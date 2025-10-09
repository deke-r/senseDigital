'use client'

import styles from "../styles/components/IndustriesCarousel.module.css"
import { ChevronLeft, ChevronRight, Monitor, Globe, Users, Star, Zap, Shield, Home } from "lucide-react"
import { useState, useEffect } from "react"
import { useDarkMode } from "../context/DarkModeContext"

const industries = [
  {
    id: 1,
    name: "Corporate Websites",
    icon: <Monitor size={32} />,
    description: "Custom corporate websites, responsive UI, and digital branding for businesses.",
    projects: "45+",
    clients: "Acme Global, CFDSI, Starglass",
    services: ["Web Development", "UI/UX Design", "Brand Integration"],
    color: "#3df3e5"
  },
  {
    id: 2,
    name: "E-commerce Solutions",
    icon: <Globe size={32} />,
    description: "Online stores, payment integration, inventory management, and digital marketing.",
    projects: "25+",
    clients: "Scrapify, SkySignage, Sense Interiors",
    services: ["E-commerce Websites", "Payment Gateways", "Inventory Systems"],
    color: "#3a4ef9"
  },
  {
    id: 3,
    name: "Interior & Design",
    icon: <Users size={32} />,
    description: "Web platforms for interior design firms to showcase projects and services.",
    projects: "20+",
    clients: "Sense Interiors, Starglass",
    services: ["Portfolio Websites", "Service Showcases", "Booking Forms"],
    color: "#f59e0b"
  },
  {
    id: 4,
    name: "Signage & Branding",
    icon: <Star size={32} />,
    description: "Web solutions for signage companies with project galleries and online inquiries.",
    projects: "15+",
    clients: "SkySignage, Aerofabricators",
    services: ["Showcase Websites", "Inquiry Forms", "Digital Branding"],
    color: "#10b981"
  },
  {
    id: 5,
    name: "Industrial & Manufacturing",
    icon: <Zap size={32} />,
    description: "Web platforms for industrial and manufacturing companies to highlight services and projects.",
    projects: "15+",
    clients: "Aerofabricators, CFDSI",
    services: ["Corporate Websites", "Project Portfolios", "Client Testimonials"],
    color: "#8b5cf6"
  },
  {
    id: 6,
    name: "Construction & Projects",
    icon: <Home size={32} />,
    description: "Digital solutions for construction and project management firms showcasing services and completed projects.",
    projects: "30+",
    clients: "Sense Projects",
    services: ["Portfolio Websites", "Service Showcases", "Lead Generation Forms"],
    color: "#ef4444"
  }
];

export default function IndustriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredCard, setHoveredCard] = useState(null)
  const { isDarkMode } = useDarkMode()
  
  const itemsPerView = 3

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + itemsPerView >= industries.length ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, itemsPerView])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerView >= industries.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? industries.length - itemsPerView : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index * itemsPerView)
  }

  const visibleIndustries = industries.slice(currentIndex, currentIndex + itemsPerView)
  const totalSlides = Math.ceil(industries.length / itemsPerView)
  const currentSlide = Math.floor(currentIndex / itemsPerView)

  return (
    <section className={`${styles.industriesCarouselSection} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Industries</span>
              <h2 className={styles.sectionTitle}>Serving Diverse Industries</h2>
              <p className={styles.sectionSubtitle}>
                We specialize in delivering tailored digital solutions across various sectors, 
                helping businesses achieve their unique goals and drive growth.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className={styles.carouselContainer}>
              <button 
                className={`${styles.carouselBtn} ${styles.prevBtn}`}
                onClick={prevSlide}
                disabled={currentIndex === 0}
                aria-label="Previous industries"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className={styles.carouselTrack}>
                {visibleIndustries.map((industry, index) => (
                  <div 
                    key={industry.id} 
                    className={`${styles.industryCard} ${hoveredCard === industry.id ? styles.hovered : ''}`}
                    onMouseEnter={() => setHoveredCard(industry.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{ '--industry-color': industry.color }}
                  >
                    <div className={styles.industryHeader}>
                      <div className={styles.industryIcon}>
                        {industry.icon}
                      </div>
                      <div className={styles.industryStats}>
                        <span className={styles.projectCount}>{industry.projects}</span>
                        <span className={styles.projectLabel}>Projects</span>
                      </div>
                    </div>
                    
                    <div className={styles.industryContent}>
                      <h3 className={styles.industryName}>{industry.name}</h3>
                      <p className={styles.industryDescription}>{industry.description}</p>
                      
                      <div className={styles.clientsSection}>
                        <h4 className={styles.clientsTitle}>Notable Clients</h4>
                        <p className={styles.clientsList}>{industry.clients}</p>
                      </div>
                      
                      <div className={styles.servicesSection}>
                        <h4 className={styles.servicesTitle}>Our Services</h4>
                        <div className={styles.servicesList}>
                          {industry.services.map((service, serviceIndex) => (
                            <span key={serviceIndex} className={styles.serviceTag}>
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* <div className={styles.industryFooter}>
                      <button className={styles.exploreBtn}>
                        Explore Solutions
                        <ChevronRight size={16} />
                      </button>
                    </div> */}
                  </div>
                ))}
              </div>
              
              <button 
                className={`${styles.carouselBtn} ${styles.nextBtn}`}
                onClick={nextSlide}
                disabled={currentIndex + itemsPerView >= industries.length}
                aria-label="Next industries"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <div className={styles.carouselControls}>
              <div className={styles.carouselDots}>
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className={styles.carouselInfo}>
                <span className={styles.slideCounter}>
                  {currentSlide + 1} / {totalSlides}
                </span>
                <button 
                  className={styles.autoPlayBtn}
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
                >
                  {isAutoPlaying ? "⏸️" : "▶️"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

