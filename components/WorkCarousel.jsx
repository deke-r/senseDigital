'use client'

import styles from "../styles/components/work-carousel.module.css"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play, Calendar, Users, Award, Star } from "lucide-react"
import { useState, useEffect } from "react"
import { useDarkMode } from "../context/DarkModeContext"

const workProjects = [
  {
    id: 1,
    title: "Scrapify Website",
    category: "Next.js & MERN Stack",
    description: "A platform facilitating bulk scrap and electronic waste collection for businesses, institutions, and communities across Delhi NCR.",
    image: "🌐",
    technologies: ["Next.js", "Node.js", "SQL", "Express", "React"],
    results: {
      customers: "1,800+",
      retention: "High",
      feedback: "Positive"
    },
    timeline: "4 months",
    team: "5 members",
    client: "Scrapify",
    features: [
      "Instant booking via WhatsApp or online form",
      "Transparent pricing with instant UPI or bank payments",
      "GST-compliant invoicing and green recycling certificates",
      "Certified and trained pickup team",
      "Digital weighing scales for accurate measurements"
    ],
    color: "#3df3e5",
    status: "Completed",
    rating: 5,
    link: "https://scrapify.in/"
  },
  {
    id: 2,
    title: "Aerofabricators Website",
    category: "Next.js & MERN Stack",
    description: "A company specializing in heavy steel fabrication, offering services for industrial and commercial projects.",
    image: "🏗️",
    technologies: ["Next.js", "Node.js", "SQL", "Express", "React"],
    results: {
      projects: "Numerous completed",
      clients: "Multiple industries",
      satisfaction: "High"
    },
    timeline: "3 months",
    team: "4 members",
    client: "Aerofabricators",
    features: [
      "Custom steel fabrication services",
      "Detailed project portfolio showcasing past works",
      "Client testimonials and case studies",
      "Contact forms and inquiry submission"
    ],
    color: "#3a4ef9",
    status: "Completed",
    rating: 4,
    link: "https://aerofabricators.in/"
  },
  {
    id: 3,
    title: "Sense Interiors Website",
    category: "Next.js & MERN Stack",
    description: "An award-winning interior design and architectural firm specializing in residential and commercial projects across Delhi NCR.",
    image: "🏠",
    technologies: ["Next.js", "Node.js", "SQL", "Express", "React"],
    results: {
      projects: "1,300+ completed",
      clients: "High",
      feedback: "Positive"
    },
    timeline: "5 months",
    team: "6 members",
    client: "Sense Interiors",
    features: [
      "Showcase of completed projects",
      "Detailed service offerings including consultancy and turnkey solutions",
      "Client testimonials and project galleries",
      "Contact forms and free consultation booking"
    ],
    color: "#f59e0b",
    status: "Completed",
    rating: 5,
    link: "https://senseinteriors.in/"
  },
  {
    id: 4,
    title: "StarGlass Website",
    category: "Next.js & MERN Stack",
    description: "A leading glass dealer offering a wide range of glass products and services for commercial, residential, and industrial applications.",
    image: "🪟",
    technologies: ["Next.js", "Node.js", "SQL", "Express", "React"],
    results: {
      products: "Variety of glass solutions",
      services: "Installation & maintenance",
      clientSatisfaction: "High"
    },
    timeline: "4 months",
    team: "5 members",
    client: "StarGlass",
    features: [
      "Comprehensive product catalog",
      "Service offerings for installation and maintenance",
      "Project gallery showcasing completed works",
      "Client testimonials and contact information"
    ],
    color: "#10b981",
    status: "Completed",
    rating: 4,
    link: "https://starglass.in/"
  },
  {
    id: 5,
    title: "SkySignage Website",
    category: "Next.js & MERN Stack",
    description: "A signage company specializing in custom signboards, printing, and visual merchandising for businesses across Delhi NCR.",
    image: "🖼️",
    technologies: ["Next.js", "Node.js", "SQL", "Express", "React"],
    results: {
      signage: "LED, neon, acrylic & more",
      printing: "Flex, vinyl, canvas",
      clientReach: "Multiple businesses"
    },
    timeline: "3 months",
    team: "4 members",
    client: "Sky Signage",
    features: [
      "Diverse range of signboard options",
      "Printing services for various materials",
      "Visual merchandising solutions",
      "Gallery showcasing completed projects"
    ],
    color: "#ef4444",
    status: "Completed",
    rating: 4,
    link: "https://skysignage.in/"
  },
  {
    id: 6,
    title: "Acme Global Website",
    category: "Next.js & MERN Stack",
    description: "A corporate website showcasing Acme Global's services, clients, and global reach.",
    image: "🌐",
    technologies: ["Next.js", "Node.js", "SQL", "Express", "React"],
    results: {
      services: "Showcased",
      clients: "Multiple global clients",
      inquiries: "Generated leads"
    },
    timeline: "4 months",
    team: "5 members",
    client: "Acme Global",
    features: [
      "Company overview and services",
      "Client showcase",
      "Contact and inquiry forms",
      "Responsive and modern design"
    ],
    color: "#8b5cf6",
    status: "Completed",
    rating: 5,
    link: "https://acmeglobal.in/"
  },
  {
    id: 7,
    title: "CFDSI Website",
    category: "Next.js & MERN Stack",
    description: "Website for CFDSI providing information on services, projects, and contact options.",
    image: "🏢",
    technologies: ["Next.js", "Node.js", "SQL", "Express", "React"],
    results: {
      services: "Showcased",
      projects: "Listed",
      inquiries: "Generated leads"
    },
    timeline: "3 months",
    team: "4 members",
    client: "CFDSI",
    features: [
      "Service listings",
      "Project portfolio",
      "Contact forms",
      "Responsive modern UI"
    ],
    color: "#3a4ef9",
    status: "Completed",
    rating: 4,
    link: "https://cfdsi.com/"
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
            <a 
  href={selectedProject.link} 
  target="_blank" 
  rel="noopener noreferrer" 
  className={styles.modalPrimaryBtn}
>
  View Live Project
  <ExternalLink size={16} />
</a>

        
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

