"use client";

import React, { useState } from "react";
import { Monitor, Users, Award, Shield, Star, CheckCircle, ArrowRight, Building2 } from "lucide-react";
import styles from "../styles/components/TrustedSection.module.css";
import CTATriggerButton from "./CTATriggerButton";

const TrustedSection = () => {
  const trustedCompanies = [ { name: "Scrapify", logo: "https://scrapify.in/favicon.ico", website: "https://scrapify.in/", industry: "Recycling & Waste Management", description: "Facilitates bulk scrap and electronic waste collection." }, { name: "Aerofabricators", logo: "https://aerofabricators.in/favicon.ico", website: "https://aerofabricators.in/", industry: "Steel Fabrication", description: "Industrial and commercial steel fabrication services." }, { name: "Sense Interiors", logo: "https://senseinteriors.in/favicon.ico", website: "https://senseinteriors.in/", industry: "Interior Design", description: "Residential and commercial interior design services." }, { name: "StarGlass", logo: "https://starglass.in/favicon.ico", website: "https://starglass.in/", industry: "Glass Solutions", description: "Glass products and installation services." }, { name: "SkySignage", logo: "https://skysignage.in/favicon.ico", website: "https://skysignage.in/", industry: "Signage", description: "Custom signboards and printing services." }, { name: "Acme Global", logo: "https://acmeglobal.in/favicon.ico", website: "https://acmeglobal.in/", industry: "Corporate Services", description: "Showcasing services and global clients." }, { name: "CFDSI", logo: "https://cfdsi.com/favicon.ico", website: "https://cfdsi.com/", industry: "IT Services", description: "Providing information on projects and services." }, { name: "Sense Projects", logo: "https://senseprojects.in/favicon.ico", website: "https://senseprojects.in/", industry: "Digital Solutions", description: "Website design and development services." } ];

  const trustMetrics = [
    { icon: <Monitor size={24} />, number: "175+", label: "Web Solutions Launched", description: "From startups to established businesses" },
    { icon: <Users size={24} />, number: "125+", label: "Happy Clients", description: "Across all our platforms" },
    { icon: <Award size={24} />, number: "99.9%", label: "Success Rate", description: "Reliable service delivery" },
    { icon: <Shield size={24} />, number: "100%", label: "Client Retention", description: "Enterprise-grade protection" }
  ];

  const trustReasons = [
    "Enterprise-grade security & compliance",
    "24/7 dedicated support team",
    "Scalable solutions for any business size",
    "Proven track record of success",
    "Cutting-edge technology stack",
    "Transparent pricing & billing"
  ];

  // Track which images failed
  const [imgErrorIndexes, setImgErrorIndexes] = useState({});

  const handleImgError = (index) => {
    setImgErrorIndexes(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className={styles.trustedSection}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.tagline}>
            <Star size={16} />
            <span>Trusted Worldwide</span>
          </div>
          <h2 className={styles.title}>
            Trusted by Leading Companies
            <span className={styles.highlight}> Across Industries</span>
          </h2>
          <p className={styles.description}>
            Join thousands of businesses that rely on our expertise to drive growth,
            innovation, and digital transformation in their organizations.
          </p>
        </div>

        {/* Trust Metrics */}
        <div className={styles.metricsSection}>
          <div className={styles.metricsGrid}>
            {trustMetrics.map((metric, idx) => (
              <div key={idx} className={styles.metricCard}>
                <div className={styles.metricIcon}>{metric.icon}</div>
                <div className={styles.metricContent}>
                  <div className={styles.metricNumber}>{metric.number}</div>
                  <div className={styles.metricLabel}>{metric.label}</div>
                  <div className={styles.metricDescription}>{metric.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Companies Grid */}
        <div className={styles.companiesSection}>
          <h3 className={styles.companiesTitle}>Our Trusted Partners</h3>
          <div className={styles.companiesGrid}>
            {trustedCompanies.map((company, idx) => (
              <div key={idx} className={styles.companyCard}>
                <div className={styles.companyLogo}>
                  <a href={company.website} target="_blank" rel="noopener noreferrer">
                    {!imgErrorIndexes[idx] ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className={styles.companyLogoImg}
                        onError={() => handleImgError(idx)}
                      />
                    ) : (
                      <Building2 size={32} />
                    )}
                  </a>
                </div>

                <div className={styles.companyInfo}>
                  <h4 className={styles.companyName}>{company.name}</h4>
                  <p className={styles.companyIndustry}>{company.industry}</p>
                  <p className={styles.companyDescription}>{company.description}</p>
                </div>

                <div className={styles.companyBadge}>
                  <CheckCircle size={16} />
                  <span>Verified Partner</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Reasons */}
        <div className={styles.reasonsSection}>
          <div className={styles.reasonsContent}>
            <div className={styles.reasonsHeader}>
              <h3 className={styles.reasonsTitle}>Why Companies Choose Us</h3>
              <p className={styles.reasonsDescription}>
                We've built our reputation on delivering exceptional results and
                maintaining the highest standards of service excellence.
              </p>
            </div>
            <div className={styles.reasonsList}>
              {trustReasons.map((reason, idx) => (
                <div key={idx} className={styles.reasonItem}>
                  <CheckCircle size={18} className={styles.checkIcon} />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Join Our Success Stories?</h3>
            <p className={styles.ctaDescription}>
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <div className={styles.ctaButtons}>
              <CTATriggerButton
                text={
                  <>
                    Start Your Project <ArrowRight className={styles.arrowIcon} />
                  </>
                }
                className={`${styles.primaryButton} border-0 rounded-pill`}
              />
              {/* <button className={styles.primaryButton}>
                Start Your Project
                <Star size={16} />
              </button> */}
              {/* <button className={styles.secondaryButton}>
                View Case Studies
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
