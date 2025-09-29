'use client'

import styles from "../styles/components/work-carousel.module.css"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Startup E-Commerce Site",
    category: "Web Development",
    description: "A clean, responsive e-commerce website with product catalog, cart, and checkout integration.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "Finance Tracker App",
    category: "App Development",
    description: "A simple mobile app to track expenses, budgets, and savings with real-time sync.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Firebase"],
    link: "#"
  },
  {
    id: 3,
    title: "Creative Logo Design",
    category: "Graphic Design",
    description: "Logo and brand design for a local business, including color scheme and typography.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Figma", "Illustrator"],
    link: "#"
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "Digital Marketing",
    description: "Targeted ad campaign that boosted engagement and generated quality leads.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Google Ads", "Facebook Ads", "SEO"],
    link: "#"
  },
  {
    id: 5,
    title: "Business Dashboard",
    category: "Web App Development",
    description: "Lightweight dashboard for tracking sales, customers, and reports in real time.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    link: "#"
  },
  {
    id: 6,
    title: "Restaurant Landing Page",
    category: "Website Development",
    description: "Modern website with menu showcase, table booking, and online order requests.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "#"
  }
];


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