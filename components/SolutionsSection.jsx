"use client";

import { useState } from "react";
import { 
  Search, 
  Globe, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Shield,
  Rocket
} from "lucide-react";
import styles from "../styles/components/SolutionsSection.module.css";
import CTATriggerButton from "./CTATriggerButton";

const SolutionsSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Digital Marketing",
      icon: <TrendingUp size={24} />,
      description: "Comprehensive digital marketing strategies that drive growth and maximize ROI across all channels.",
      features: [
        "SEO & Content Marketing",
        "Social Media Management", 
        "PPC Advertising",
        "Email Marketing",
        "Analytics & Reporting"
      ],
      metrics: "3.5x Average ROI",
      link: "/services/digital-marketing"
    },
    {
      id: 1,
      title: "Website Development",
      icon: <Globe size={24} />,
      description: "Custom websites and web applications built with modern technologies for optimal performance.",
      features: [
        "Custom Web Design",
        "E-commerce Solutions",
        "Landing Pages",
        "Mobile Optimization",
        "SEO Integration"
      ],
      metrics: "500+ Websites Launched",
      link: "/services/website-development"
    },
    {
      id: 2,
      title: "App Development",
      icon: <Smartphone size={24} />,
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: [
        "iOS & Android Apps",
        "Cross-platform Development",
        "UI/UX Design",
        "App Store Optimization",
        "Maintenance & Support"
      ],
      metrics: "99% App Store Rating",
      link: "/services/app-development"
    },
    {
      id: 3,
      title: "SEO Services",
      icon: <Search size={24} />,
      description: "Complete SEO solutions to improve your search rankings and drive organic traffic growth.",
      features: [
        "On-Page SEO",
        "Off-Page SEO",
        "Local SEO",
        "Technical SEO",
        "Content Strategy"
      ],
      metrics: "+180% Organic Traffic",
      link: "/services/search-engine-optimization-outsourcing-seo"
    },
    {
      id: 4,
      title: "UI/UX Design",
      icon: <Palette size={24} />,
      description: "User-centered design solutions that create engaging experiences and improve conversion rates.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems"
      ],
      metrics: "42% Conversion Increase",
      link: "/services/ui-ux"
    },
    {
      id: 5,
      title: "Software Development",
      icon: <Rocket size={24} />,
      description: "Custom software solutions tailored to your business needs with scalable architecture.",
      features: [
        "Custom Software",
        "API Development",
        "Database Design",
        "Cloud Integration",
        "DevOps & Deployment"
      ],
      metrics: "50% Faster Development",
      link: "/services/software-development"
    }
  ];

  return (
    <section className={styles.solutionsSection}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.tagline}>
            <Sparkles size={16} />
            <span>Complete Solutions</span>
          </div>
          <h2 className={styles.title}>
            Transform Your Business with Our
            <span className={styles.highlight}> Comprehensive Services</span>
          </h2>
          <p className={styles.description}>
            From digital marketing to custom development, we provide end-to-end solutions 
            that drive growth and deliver measurable results for your business.
          </p>
        </div>

        {/* Split Layout */}
        <div className={styles.splitLayout}>
          {/* Services List */}
          <div className={styles.servicesList}>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`${styles.serviceItem} ${
                  activeService === index ? styles.active : ""
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={styles.serviceNumber}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <div className={styles.serviceInfo}>
                  <h3>{service.title}</h3>
                  <span className={styles.serviceMetric}>{service.metrics}</span>
                </div>
                <ArrowRight size={18} className={styles.arrowIcon} />
              </div>
            ))}
          </div>

          {/* Service Details */}
          <div className={styles.serviceDetails}>
            <div className={styles.detailsHeader}>
              <div className={styles.detailsIcon}>
                {services[activeService].icon}
              </div>
              <div className={styles.detailsTitle}>
                <h3>{services[activeService].title}</h3>
                <span className={styles.detailsMetric}>
                  {services[activeService].metrics}
                </span>
              </div>
            </div>
            
            <p className={styles.detailsDescription}>
              {services[activeService].description}
            </p>

            <div className={styles.featuresList}>
              {services[activeService].features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <CheckCircle size={18} className={styles.checkIcon} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className={styles.detailsActions}>
              <a href={services[activeService].link} className={styles.learnMore}>
                Learn More
                <ArrowRight size={16} />
              </a>
              <CTATriggerButton
                text={
                  <>
                    Get Free Quote <ArrowRight className={styles.arrowIcon} />
                  </>
                }
                className={`${styles.getQuote} rounded-4`}
              />
              {/* <button className={styles.getQuote}>
                Get Free Quote
                <Zap size={16} />
              </button> */}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Users size={24} />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Happy Clients</div>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Rocket size={24} />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>1000+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <TrendingUp size={24} />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>250%</div>
                <div className={styles.statLabel}>Average Growth</div>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Shield size={24} />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>99%</div>
                <div className={styles.statLabel}>Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;