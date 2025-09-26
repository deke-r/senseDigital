"use client";

import { useState } from "react";
import styles from "../styles/components/SolutionsSection.module.css";


const solutions = [
  {
    id: "01",
    title: "DApps development",
    desc: "From gamified user engagement solutions to complex DeFi platforms, we build blockchain-powered dApps that boast increased security, reliability, and performance.",
    link: "/services/dapp-development-company/",
  },
  {
    id: "02",
    title: "Cryptocurrency exchanges development",
    desc: "PixelPlex builds centralized and decentralized cryptocurrency exchanges that cater to both professional and novice traders, ensuring an intuitive UX and increased security.",
    link: "/services/cryptocurrency-exchange-development-company/",
  },
  {
    id: "03",
    title: "Smart contracts development",
    desc: "To help you automate processes and reduce operational costs, our team crafts self-executing smart contracts on multiple blockchain platforms.",
    link: "/services/smart-contracts-development-company/",
  },
  {
    id: "04",
    title: "Web app development",
    desc: "Our skilled web team provides comprehensive end-to-end web development services, creating both consumer-centric websites and enterprise-grade solutions tailored to meet your specific needs.",
    link: "/services/web-development-company/",
  },
  {
    id: "05",
    title: "Mobile app development",
    desc: "To expand your user base and boost productivity, we develop customized mobile apps that offer a seamless user experience and robust scalability.",
    link: "/services/mobile-app-development-company/",
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
        <h2 className={styles.title}>Solutions we deliver</h2>
        <p className={styles.desc}>
          Leveraging advanced technologies, such as blockchain, artificial
          intelligence, and big data, our team delivers comprehensive solutions
          that digitize your processes, streamline workflows, and unlock new
          revenue streams.
        </p>

        <div className={`accordion ${styles.accordionCustom}`}>
          {solutions.map((item, index) => (
            <div
              className={`accordion-item ${styles.accordionItem}`}
              key={index}
            >
              <h2 className="accordion-header" id={`heading${index}`}>
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
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
