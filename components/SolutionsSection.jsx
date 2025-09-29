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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

        <div className={`accordion ${styles.accordionCustom}`}>
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              className={`accordion-item ${styles.accordionItem}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    activeIndex === index ? "" : "collapsed"
                  } ${styles.accordionBtn}`}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={styles.accordionNumber}>{item.id}</span>
                  {item.title}
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <div className={`accordion-body ${styles.accordionBody}`}>
                  <p>{item.desc}</p>
                  <a className={styles.learnMore} href={item.link}>
                    Learn more →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
