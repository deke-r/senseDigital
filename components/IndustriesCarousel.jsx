"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import styles from "../styles/components/IndustriesCarousel.module.css";
import "keen-slider/keen-slider.min.css";

const industries = [
  {
    img: "https://pixelplex.io/next/images/home-page/industries/fintech-banking.svg",
    title: "FinTech & banking",
    desc: "We can handle any digital finance challenge, ensuring tamper-proof transactions while focusing on minimizing risks and maximizing security.",
    list: ["DeFi ecosystems", "Risk management and compliance software", "STO/tokenization platforms"],
    link: "/industries/fintech/"
  },
  {
    img: "https://pixelplex.io/next/images/home-page/industries/retail-ecommerce.svg",
    title: "Retail & eCommerce",
    desc: "Our team automates your retail workflows and drives digital transformation, unlocking new revenue streams for your business.",
    list: ["Digital marketplaces and aggregators", "Retail POS software development", "Goods order and delivery platforms"],
    link: "/industries/retail/"
  },
  {
    img: "https://pixelplex.io/next/images/home-page/industries/supply-chain-logistics.svg",
    title: "Supply chain & logistics",
    desc: "From route optimization to intelligent warehouse management, we streamline your supply chain operations and ensure maximum efficiency.",
    list: ["Fleet management and route planning apps", "Certification and logistics platforms", "Document flow and insurance digitization"],
    link: "/industries/supply-chain/"
  },
  {
    img: "https://pixelplex.io/next/images/home-page/industries/healthcare.svg",
    title: "Healthcare",
    desc: "We build healthcare solutions that address the full spectrum of needs within the sector, from patient data management to regulatory compliance.",
    list: ["EHR/EMR systems", "Telemedicine software", "ML-powered analysis and reporting solutions"],
    link: "/industries/healthcare/"
  },
  {
    img: "https://pixelplex.io/next/images/home-page/industries/real-estate.svg",
    title: "Real estate",
    desc: "Our team delivers real estate marketplaces, document management solutions, and immersive tours, leveraging advanced tech, including AR/VR, ML, and blockchain.",
    list: ["Real estate tokenization solutions", "Asset management platforms", "IoT and metaverse real estate layers"],
    link: "/industries/real-estate/"
  },
];

const IndustriesCarousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 4, spacing: 15 },
    loop: false,
  });

  const [activeBtn, setActiveBtn] = useState("next");

  const handlePrev = () => {
    instanceRef.current?.prev();
    setActiveBtn("next"); // toggle button logic
  };

  const handleNext = () => {
    instanceRef.current?.next();
    setActiveBtn("prev");
  };

  return (
    <section className={styles.carouselSection}>
      <div className={styles.header}>
        <h2>Industries we serve</h2>
        <div className={styles.buttons}>
          <button
            onClick={handlePrev}
            className={`${styles.arrow} ${activeBtn === "prev" ? styles.active : ""}`}
            aria-label="prev"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" fill="none">
              <path d="m13.11.003 6.2 6.299.69.701-.69.702-6.2 6.299-1.425-1.403 4.525-4.598H0v-2h16.21l-4.525-4.597L13.111.003Z" fill="#000" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className={`${styles.arrow} ${activeBtn === "next" ? styles.active : ""}`}
            aria-label="next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" fill="none">
              <path d="m13.11.003 6.2 6.299.69.701-.69.702-6.2 6.299-1.425-1.403 4.525-4.598H0v-2h16.21l-4.525-4.597L13.111.003Z" fill="#fff" />
            </svg>
          </button>
        </div>
      </div>

      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {industries.map((item, idx) => (
          <div key={idx} className={`keen-slider__slide ${styles.card}`}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <ul>
              {item.list.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
            <a className={styles.learnMore} href={item.link}>Learn more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesCarousel;
