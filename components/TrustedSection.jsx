"use client";

import React from "react";
import styles from "../styles/components/TrustedSection.module.css";

const slides = [
  {
    title: "Helping Startups Grow",
    description:
      "We partner with startups to build their first websites, apps, and marketing strategies. From branding to backlinks, we set the foundation for growth.",
    testimonial:
      "“They helped us launch our brand online with a professional website and strong SEO strategy. The team was responsive and full of creative ideas.”",
    name: "Rohit Sharma",
    role: "Founder, Local Startup",
    logo: "https://pixelplex.io/next/images/clients-and-companies/qtum.png",
    img: "https://pixelplex.io/next/images/clients-and-companies/patrick-dai.jpg",
    video: "https://s3.amazonaws.com/static.pixelplex.io/startups_video.mp4",
    banner: "https://pixelplex.io/next/images/home-page/trusted-by-companies/supporting-startups.png",
  },
  {
    title: "Scaling Small Businesses",
    description:
      "We help small businesses strengthen their online presence with modern websites, mobile apps, and effective digital marketing campaigns.",
    testimonial:
      "“Our new e-commerce site not only looks great but also boosted our online orders. The digital marketing campaign brought in real customers.”",
    name: "Ananya Verma",
    role: "Owner, Retail Business",
    logo: "https://pixelplex.io/next/images/clients-and-companies/footballnet-black-logo.png",
    img: "https://pixelplex.io/next/images/clients-and-companies/Michael-Watford.png",
    video: "https://s3.amazonaws.com/static.pixelplex.io/smbs_vide.mp4",
    banner: "https://pixelplex.io/next/images/home-page/trusted-by-companies/scaling-sm-bs.png",
  },
  {
    title: "Empowering Brands",
    description:
      "We support growing brands with end-to-end digital solutions: web & app development, SEO, backlinks, and targeted campaigns to boost visibility.",
    testimonial:
      "“They handled our website redesign and digital marketing seamlessly. Within months, we saw improved rankings and better client engagement.”",
    name: "Vikas Gupta",
    role: "Marketing Head, Growing Brand",
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
              {/* <div className={styles.person}>
                <img src={slides[active].img} alt={slides[active].name} />
                <div>
                  <p>{slides[active].name}</p>
                  <p>{slides[active].role}</p>
                </div>
              </div> */}
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
