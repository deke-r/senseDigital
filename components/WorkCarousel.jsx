'use client'

import styles from "../styles/components/work-carousel.module.css"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play, Calendar, Users, Award, Star } from "lucide-react"
import { useState, useEffect } from "react"
import { useDarkMode } from "../context/DarkModeContext"

const workProjects = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    category: "Web Development",
    description: "Complete redesign of a modern e-commerce platform with advanced filtering, payment integration, and mobile optimization.",
    image: "🛒",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    results: {
      conversion: "+180%",
      traffic: "+250%",
      revenue: "+320%"
    },
    timeline: "6 months",
    team: "8 members",
    client: "RetailTech Solutions",
    features: [
      "Advanced product filtering",
      "Real-time inventory management",
      "Mobile-first responsive design",
      "Secure payment processing",
      "Admin dashboard"
    ],
    color: "#3df3e5",
    status: "Completed",
    rating: 5
  },
  {
    id: 2,
    title: "Healthcare Management System",
    category: "Custom Software",
    description: "HIPAA-compliant healthcare management system with patient records, appointment scheduling, and telemedicine features.",
    image: "🏥",
    technologies: ["React", "Python", "PostgreSQL", "Docker", "Redis"],
    results: {
      efficiency: "+200%",
      patients: "+150%",
      satisfaction: "98%"
    },
    timeline: "8 months",
    team: "12 members",
    client: "MedCare Plus",
    features: [
      "Patient record management",
      "Appointment scheduling",
      "Telemedicine integration",
      "HIPAA compliance",
      "Analytics dashboard"
    ],
    color: "#3a4ef9",
    status: "Completed",
    rating: 5
  },
  {
    id: 3,
    title: "SaaS Analytics Platform",
    category: "Web Application",
    description: "Comprehensive analytics platform for SaaS businesses with real-time data visualization and custom reporting.",
    image: "📊",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Chart.js"],
    results: {
      users: "2,500+",
      retention: "85%",
      growth: "+400%"
    },
    timeline: "10 months",
    team: "10 members",
    client: "DataFlow Analytics",
    features: [
      "Real-time data visualization",
      "Custom report builder",
      "API integrations",
      "User management",
      "Export capabilities"
    ],
    color: "#f59e0b",
    status: "In Progress",
    rating: 4
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure mobile banking application with biometric authentication, transaction management, and financial planning tools.",
    image: "🏦",
    technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Firebase"],
    results: {
      downloads: "50K+",
      rating: "4.8/5",
      transactions: "1M+"
    },
    timeline: "12 months",
    team: "15 members",
    client: "FinanceFlow Bank",
    features: [
      "Biometric authentication",
      "Transaction management",
      "Financial planning",
      "Push notifications",
      "Offline capabilities"
    ],
    color: "#10b981",
    status: "Completed",
    rating: 5
  },
  {
    id: 5,
    title: "Learning Management System",
    category: "EdTech Platform",
    description: "Comprehensive LMS with course creation, student tracking, and interactive learning modules for educational institutions.",
    image: "🎓",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3", "WebRTC"],
    results: {
      students: "10K+",
      courses: "500+",
      completion: "92%"
    },
    timeline: "9 months",
    team: "14 members",
    client: "EduTech Academy",
    features: [
      "Course creation tools",
      "Student progress tracking",
      "Interactive assessments",
      "Video conferencing",
      "Certificate generation"
    ],
    color: "#8b5cf6",
    status: "Completed",
    rating: 5
  },
  {
    id: 6,
    title: "IoT Manufacturing Dashboard",
    category: "Industrial IoT",
    description: "Real-time IoT dashboard for manufacturing operations with predictive maintenance and production monitoring.",
    image: "🏭",
    technologies: ["React", "Python", "InfluxDB", "MQTT", "Docker"],
    results: {
      efficiency: "+150%",
      downtime: "-60%",
      maintenance: "+200%"
    },
    timeline: "7 months",
    team: "11 members",
    client: "ManufacturePro",
    features: [
      "Real-time monitoring",
      "Predictive maintenance",
      "Production analytics",
      "Alert system",
      "Mobile access"
    ],
    color: "#ef4444",
    status: "Completed",
    rating: 4
  }
];

export default function WorkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const { isDarkMode } = useDarkMode()
  
  const itemsPerView = 3

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + itemsPerView >= workProjects.length ? 0 : prevIndex + 1
      )
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, itemsPerView])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerView >= workProjects.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? workProjects.length - itemsPerView : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index * itemsPerView)
  }

  const visibleProjects = workProjects.slice(currentIndex, currentIndex + itemsPerView)
  const totalSlides = Math.ceil(workProjects.length / itemsPerView)
  const currentSlide = Math.floor(currentIndex / itemsPerView)

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        size={14}
        className={`${styles.star} ${index < rating ? styles.starFilled : styles.starEmpty}`} 
      />
    ));
  };

  return (
    <section className={`${styles.workCarouselSection} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Our Work</span>
              <h2 className={styles.sectionTitle}>Featured Projects</h2>
              <p className={styles.sectionSubtitle}>
                Explore our portfolio of successful projects across various industries, 
                showcasing our expertise in delivering innovative digital solutions.
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
                aria-label="Previous projects"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className={styles.carouselTrack}>
                {visibleProjects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className={`${styles.projectCard} ${hoveredCard === project.id ? styles.hovered : ''}`}
                    onMouseEnter={() => setHoveredCard(project.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{ '--project-color': project.color }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className={styles.projectHeader}>
                      <div className={styles.projectImage}>
                        <span className={styles.projectEmoji}>{project.image}</span>
                      </div>
                      <div className={styles.projectStatus}>
                        <span className={`${styles.statusBadge} ${styles[project.status.toLowerCase().replace(' ', '')]}`}>
                          {project.status}
                        </span>
                        <div className={styles.projectRating}>
                          {renderStars(project.rating)}
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.projectContent}>
                      <div className={styles.projectCategory}>{project.category}</div>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                      
                      <div className={styles.projectMeta}>
                        <div className={styles.metaItem}>
                          <Calendar size={14} />
                          <span>{project.timeline}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <Users size={14} />
                          <span>{project.team}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <Award size={14} />
                          <span>{project.client}</span>
                        </div>
                      </div>
                      
                      <div className={styles.technologiesSection}>
                        <h4 className={styles.technologiesTitle}>Technologies</h4>
                        <div className={styles.technologiesList}>
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className={styles.techTag}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className={styles.resultsSection}>
                        <h4 className={styles.resultsTitle}>Key Results</h4>
                        <div className={styles.resultsGrid}>
                          {Object.entries(project.results).map(([key, value], resultIndex) => (
                            <div key={resultIndex} className={styles.resultItem}>
                              <span className={styles.resultValue}>{value}</span>
                              <span className={styles.resultLabel}>{key}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.projectFooter}>
                      <button className={styles.viewProjectBtn}>
                        View Project
                        <ExternalLink size={16} />
                      </button>
                      <button className={styles.githubBtn}>
                        <Github size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                className={`${styles.carouselBtn} ${styles.nextBtn}`}
                onClick={nextSlide}
                disabled={currentIndex + itemsPerView >= workProjects.length}
                aria-label="Next projects"
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>
                <span className={styles.modalEmoji}>{selectedProject.image}</span>
                <div>
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.category}</p>
                </div>
              </div>
              <button 
                className={styles.closeBtn}
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
            </div>
            
            <div className={styles.modalBody}>
              <div className={styles.modalDescription}>
                <p>{selectedProject.description}</p>
              </div>
              
              <div className={styles.modalFeatures}>
                <h4>Key Features</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.modalTechnologies}>
                <h4>Technologies Used</h4>
                <div className={styles.modalTechList}>
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className={styles.modalTechTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={styles.modalResults}>
                <h4>Project Results</h4>
                <div className={styles.modalResultsGrid}>
                  {Object.entries(selectedProject.results).map(([key, value], index) => (
                    <div key={index} className={styles.modalResultItem}>
                      <span className={styles.modalResultValue}>{value}</span>
                      <span className={styles.modalResultLabel}>{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.modalFooter}>
              <button className={styles.modalPrimaryBtn}>
                View Live Project
                <ExternalLink size={16} />
              </button>
              <button className={styles.modalSecondaryBtn}>
                <Github size={16} />
                View Code
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

