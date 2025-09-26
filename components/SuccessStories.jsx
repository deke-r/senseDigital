"use client"
import React, { useState, useRef } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import styles from "../styles/components/successStories.module.css"

const SuccessStories = () => {
  const [activeArrow, setActiveArrow] = useState("right") // right active initially
  const splideRef = useRef(null)

  const stories = [
    {
      title: "Market disruption",
      value: "3 🦄",
      desc: "Unicorns disrupted industries from startup phase",
    },
    {
      title: "Scalability at its best",
      value: "10M+",
      desc: "Users scaled in just 18 months",
    },
    {
      title: "Capital growth",
      value: "$1.2B",
      desc: "Raised by the clients",
    },
    {
      title: "Revenue boost",
      value: "$5M",
      desc: "First-year revenue boost from zero",
    },
    {
      title: "Smart contract success",
      value: "1M+",
      desc: "Secure smart contract executions enabled",
    },
  ]

  const handlePrev = () => {
    splideRef.current.splide.go("<")
    setActiveArrow("right")
  }

  const handleNext = () => {
    splideRef.current.splide.go(">")
    setActiveArrow("left")
  }

  const splideOptions = {
    perPage: 4,
    perMove: 1,
    arrows: false,
    pagination: false,
    rewind: false, // disable infinite scroll
    gap: "1rem",
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className={styles.heading}>450+ success stories</h2>
          <div>
            <button
              className={`${styles.arrow} ${
                activeArrow === "left" ? styles.active : ""
              }`}
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              className={`${styles.arrow} ${
                activeArrow === "right" ? styles.active : ""
              }`}
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>

        <Splide options={splideOptions} ref={splideRef} className={styles.splide}>
          {stories.map((story, index) => (
            <SplideSlide key={index}>
              <div className={styles.card}>
                <p className={styles.title}>{story.title}</p>
                <h3 className={styles.value}>{story.value}</h3>
                <p className={styles.desc}>{story.desc}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="container my-5">
        <div className="row">

            <div className={`${styles.zmvjT}`}>
            Your challenge — 
            <br />
            our delivered results
            </div>
        </div>
      </div>
    </section>
  )
}
export default SuccessStories

