'use client'

import styles from "../styles/components/work-carousel.module.css"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A comprehensive e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "App Development",
    description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Firebase", "Node.js", "AWS"],
    link: "#"
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "Graphic Design",
    description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Adobe Creative Suite", "Figma", "Illustrator"],
    link: "#"
  },
  {
    id: 4,
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    description: "Multi-channel digital marketing campaign that increased brand awareness by 250% and generated 500+ qualified leads.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Google Ads", "Facebook Ads", "SEO", "Analytics"],
    link: "#"
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    category: "Web App Development",
    description: "Enterprise-grade SaaS dashboard with real-time analytics, user management, and customizable reporting features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    link: "#"
  },
  {
    id: 6,
    title: "Restaurant Website",
    category: "Website Development",
    description: "Modern, responsive restaurant website with online ordering system, menu management, and reservation booking functionality.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    link: "#"
  }
]

export default function WorkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerView >= projects.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - itemsPerView : prevIndex - 1
    )
  }

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section className={styles.workCarouselSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className={styles.sectionTitle}>Our Work</h2>
            <p className={styles.sectionSubtitle}>
              Explore some of our recent projects and see how we've helped businesses achieve their goals.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className={styles.carouselContainer}>
              <button 
                className={styles.carouselBtn} 
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className={styles.carouselTrack}>
                {visibleProjects.map((project) => (
                  <div key={project.id} className={styles.projectCard}>
                    <div className={styles.projectImage}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="img-fluid"
                      />
                      <div className={styles.projectOverlay}>
                        <a href={project.link} className={styles.projectLink}>
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                    <div className={styles.projectContent}>
                      <span className={styles.projectCategory}>{project.category}</span>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                      <div className={styles.projectTechnologies}>
                        {project.technologies.map((tech, index) => (
                          <span key={index} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                className={styles.carouselBtn} 
                onClick={nextSlide}
                disabled={currentIndex + itemsPerView >= projects.length}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <div className={styles.carouselDots}>
              {Array.from({ length: Math.ceil(projects.length / itemsPerView) }).map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === Math.floor(currentIndex / itemsPerView) ? styles.activeDot : ''}`}
                  onClick={() => setCurrentIndex(index * itemsPerView)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}