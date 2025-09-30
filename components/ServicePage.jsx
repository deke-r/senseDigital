"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  BsSearch, 
  BsGraphUp, 
  BsGlobe, 
  BsShop, 
  BsPhone, 
  BsCheckCircle, 
  BsStar, 
  BsArrowRight,
  BsPeople,
  BsBarChart,
  BsShield,
  BsClock
} from 'react-icons/bs';
import styles from '../styles/components/ServicePage.module.css';

const ServicePage = ({ 
  serviceData = {
    title: "Search Engine Optimization (SEO) Services",
    heroDescription: "Boost your website visibility and rank higher on search engines with our proven SEO strategies.",
    aboutTitle: "About Our SEO Services",
    aboutDescription: "Our SEO services focus on optimizing your site structure, content, and backlinks to improve organic traffic and search rankings. We use data-driven strategies and cutting-edge tools to deliver measurable results for your business.",
    aboutImage: "/img/seo-service.jpg",
    features: [
      {
        icon: <BsSearch />,
        title: "On-Page SEO",
        description: "Optimize your website's content, structure, and HTML elements for better search engine visibility."
      },
      {
        icon: <BsGraphUp />,
        title: "Off-Page SEO",
        description: "Build authority and credibility through strategic backlink acquisition and digital PR."
      },
      {
        icon: <BsGlobe />,
        title: "Technical SEO",
        description: "Improve your website's technical foundation for better crawling and indexing by search engines."
      },
      {
        icon: <BsShop />,
        title: "Local SEO",
        description: "Dominate local search results and attract customers in your geographic area."
      },
      {
        icon: <BsPhone />,
        title: "E-Commerce SEO",
        description: "Specialized SEO strategies for online stores to increase product visibility and sales."
      }
    ],
    whyChooseUs: [
      {
        icon: <BsBarChart />,
        title: "Proven Results",
        description: "Track record of improving search rankings and organic traffic for businesses across industries."
      },
      {
        icon: <BsPeople />,
        title: "Expert Team",
        description: "Certified SEO professionals with years of experience in digital marketing."
      },
      {
        icon: <BsShield />,
        title: "Tailored Strategies",
        description: "Customized SEO plans designed specifically for your business goals and target audience."
      },
      {
        icon: <BsClock />,
        title: "Transparent Reporting",
        description: "Regular reports and updates on your SEO progress with clear metrics and insights."
      }
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        company: "TechStart Inc.",
        content: "Our organic traffic increased by 300% within 6 months of working with their SEO team. Highly recommended!",
        rating: 5
      },
      {
        name: "Michael Chen",
        company: "E-Commerce Plus",
        content: "The team's expertise in e-commerce SEO helped us rank #1 for our main keywords. Sales have doubled!",
        rating: 5
      },
      {
        name: "Emily Rodriguez",
        company: "Local Business Hub",
        content: "Local SEO services brought us more customers than we ever imagined. Great ROI on our investment.",
        rating: 5
      }
    ],
    ctaTitle: "Ready to grow with SEO?",
    ctaDescription: "Contact us today for a free SEO audit and consultation.",
    ctaButtonText: "Get Free SEO Audit",
    ctaButtonLink: "/contact"
  }
}) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <BsStar 
        key={index} 
        className={`${styles.star} ${index < rating ? styles.starFilled : styles.starEmpty}`} 
      />
    ));
  };

  return (
    <div className={styles.servicePage}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-6">
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>{serviceData.title}</h1>
                <p className={styles.heroDescription}>{serviceData.heroDescription}</p>
                <div className={styles.heroButtons}>
                  <Link href={serviceData.ctaButtonLink} className={`btn ${styles.primaryBtn}`}>
                    {serviceData.ctaButtonText}
                    <BsArrowRight className={styles.btnIcon} />
                  </Link>
                  <Link href="#about" className={`btn ${styles.secondaryBtn}`}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroImage}>
                <Image
                  src={serviceData.aboutImage || "/img/service-hero.jpg"}
                  alt={serviceData.title}
                  width={600}
                  height={400}
                  className={styles.heroImg}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Service Section */}
      <section id="about" className={`${styles.aboutSection} ${styles.section}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={styles.aboutContent}>
                <h2 className={styles.sectionTitle}>{serviceData.aboutTitle}</h2>
                <p className={styles.aboutDescription}>{serviceData.aboutDescription}</p>
                <div className={styles.aboutFeatures}>
                  {serviceData.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className={styles.aboutFeature}>
                      <BsCheckCircle className={styles.checkIcon} />
                      <span>{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.aboutImage}>
                <Image
                  src={serviceData.aboutImage || "/img/service-about.jpg"}
                  alt="About our service"
                  width={500}
                  height={400}
                  className={styles.aboutImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className={`${styles.featuresSection} ${styles.section}`}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Our Key Features</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive solutions designed to deliver exceptional results
            </p>
          </div>
          <div className="row g-4">
            {serviceData.features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`card ${styles.featureCard}`}>
                  <div className="card-body text-center">
                    <div className={styles.featureIcon}>
                      {feature.icon}
                    </div>
                    <h5 className="card-title">{feature.title}</h5>
                    <p className="card-text">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`${styles.whyChooseSection} ${styles.section}`}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
            <p className={styles.sectionSubtitle}>
              Discover what makes us the preferred choice for digital marketing success
            </p>
          </div>
          <div className="row g-4">
            {serviceData.whyChooseUs.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className={`card ${styles.whyChooseCard}`}>
                  <div className="card-body text-center">
                    <div className={styles.whyChooseIcon}>
                      {item.icon}
                    </div>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`${styles.testimonialsSection} ${styles.section}`}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <p className={styles.sectionSubtitle}>
              Real results from real businesses
            </p>
          </div>
          <div className="row g-4">
            {serviceData.testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`card ${styles.testimonialCard}`}>
                  <div className="card-body">
                    <div className={styles.testimonialRating}>
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className={styles.testimonialContent}>"{testimonial.content}"</p>
                    <div className={styles.testimonialAuthor}>
                      <h6 className={styles.authorName}>{testimonial.name}</h6>
                      <p className={styles.authorCompany}>{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className={`${styles.ctaSection} ${styles.section}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>{serviceData.ctaTitle}</h2>
                <p className={styles.ctaDescription}>{serviceData.ctaDescription}</p>
                <div className={styles.ctaButtons}>
                  <Link href={serviceData.ctaButtonLink} className={`btn ${styles.primaryBtn} ${styles.ctaBtn}`}>
                    {serviceData.ctaButtonText}
                    <BsArrowRight className={styles.btnIcon} />
                  </Link>
                  <Link href="tel:+1234567890" className={`btn ${styles.secondaryBtn} ${styles.ctaBtn}`}>
                    Call Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
