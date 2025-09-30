"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/components/SolutionsSection.module.css";

const solutions = [
  {
    id: "01",
    title: "Digital Marketing",
    desc: "We craft data-driven marketing campaigns that build awareness, engage audiences, and convert leads into loyal customers.",
    link: "/services/digital-marketing",
  },
  {
    id: "02",
    title: "Web Development",
    desc: "From sleek business websites to complex enterprise platforms, Metasense delivers responsive, secure, and scalable web solutions.",
    link: "/services/web-development",
  },
  {
    id: "03",
    title: "Mobile App Development",
    desc: "We design and develop user-friendly mobile apps that combine functionality, performance, and smooth user experiences.",
    link: "/services/mobile-app-development",
  },
  {
    id: "04",
    title: "SEO & Backlinks",
    desc: "Boost your visibility with our SEO strategies and high-quality backlinks, helping you rank higher and attract more traffic.",
    link: "/services/seo-backlinks",
  },
  {
    id: "05",
    title: "Branding & Strategy",
    desc: "Metasense helps you stand out with compelling brand identities and strategies that communicate your values and vision.",
    link: "/services/branding-strategy",
  },
];

const SolutionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.solutionsSection}>
      <div className="container">
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Solutions we deliver
        </motion.h2>

        <motion.p
          className={styles.desc}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          At Metasense, we combine creativity and technology to deliver
          solutions that empower businesses, strengthen their digital presence,
          and drive measurable results.
        </motion.p>

        <div className={styles.splitLayout}>
          {/* Left side: list of services */}
          <ul className={styles.servicesList}>
            {solutions.map((item, index) => (
              <li
                key={index}
                className={`${styles.serviceItem} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className={styles.serviceNumber}>{item.id}</span>
                {item.title}
              </li>
            ))}
          </ul>

          {/* Right side: details of selected service */}
          <motion.div
            key={activeIndex}
            className={styles.serviceDetails}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3>{solutions[activeIndex].title}</h3>
            <p>{solutions[activeIndex].desc}</p>
            <a
              href={solutions[activeIndex].link}
              className={styles.learnMore}
            >
              Learn more →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
