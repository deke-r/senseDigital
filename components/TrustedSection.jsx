"use client";

import React from "react";
import styles from "../styles/components/TrustedSection.module.css";

const slides = [
  {
    title: "Supporting startups",
    description:
      "We’ve walked side by side with startups, aiding them through launch challenges. This helped us collect best practices for earning investor trust and sparking user interest.",
    testimonial:
      "“They’ve built websites and mobile applications as well as conducted blockchain research and handled front- and backend development. They’re talented developers who write good code and tackle challenging projects.”",
    name: "Patrick Dai",
    role: "CEO & Founder, Qtum Foundation",
    logo: "https://pixelplex.io/next/images/clients-and-companies/qtum.png",
    img: "https://pixelplex.io/next/images/clients-and-companies/patrick-dai.jpg",
    video: "https://s3.amazonaws.com/static.pixelplex.io/startups_video.mp4",
    banner: "https://pixelplex.io/next/images/home-page/trusted-by-companies/supporting-startups.png",
  },
  {
    title: "Scaling SMBs",
    description:
      "We help small businesses optimize their operations and scale, providing tailored guidance, streamlining processes, and implementing growth strategies.",
    testimonial:
      "“A project of our taking requires people to not only think technically but also to innovate in a way that meets the requirements of key stakeholders. Our expectations have been met at every step of the way.”",
    name: "Michael Watford",
    role: "CEO, FootballNet Global",
    logo: "https://pixelplex.io/next/images/clients-and-companies/footballnet-black-logo.png",
    img: "https://pixelplex.io/next/images/clients-and-companies/Michael-Watford.png",
    video: "https://s3.amazonaws.com/static.pixelplex.io/smbs_vide.mp4",
    banner: "https://pixelplex.io/next/images/home-page/trusted-by-companies/scaling-sm-bs.png",
  },
  {
    title: "Empowering enterprises",
    description:
      "Enterprises cautiously explore blockchain as part of their innovation programs. With our deep market experience, we guide ventures from pilots to value-adding solutions.",
    testimonial:
      "“The blockchain platform was delivered on time, and our community members enjoy bringing new features to our project. We had a great project manager who was online almost all the time, answering our questions and helping us solve unpredicted issues. The level of communication was great. We got a perfect result.”",
    name: "Kamal Youssefi",
    role: "Co-founder and R&D Lead, Swisscom",
    logo: "https://pixelplex.io/next/images/clients-and-companies/swisscom-black-logo.png",
    img: "https://pixelplex.io/next/images/clients-and-companies/kamal-youssefi.png",
    video: "https://s3.amazonaws.com/static.pixelplex.io/enterprises_video.mp4",
    banner: "https://pixelplex.io/next/images/home-page/trusted-by-companies/enterprises.png",
  },
];

const TrustedSection = () => {
  const [active, setActive] = React.useState(0);

  return (
    <section className={styles.trustedSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Trusted by startups, small businesses, and enterprises
        </h2>

        <div className={styles.sliderNav}>
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`${styles.navButton} ${
                active === index ? styles.active : ""
              }`}
              onClick={() => setActive(index)}
            >
              {slide.title}
            </button>
          ))}
        </div>

        <div className={styles.slide}>
          <div className={styles.slideContent}>
            <h3>{slides[active].title}</h3>
            <p>{slides[active].description}</p>
            <div className={styles.testimonial}>
              <img src={slides[active].logo} alt="Company Logo" />
              <p>{slides[active].testimonial}</p>
              <div className={styles.person}>
                <img src={slides[active].img} alt={slides[active].name} />
                <div>
                  <p>{slides[active].name}</p>
                  <p>{slides[active].role}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.slideMedia}>
  <video
    src={slides[active].video}
    autoPlay
    loop
    playsInline
    muted
    className={styles.video}
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
