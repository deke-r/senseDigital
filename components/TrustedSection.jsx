"use client";

import React from "react";
import { Building2, Users, Award, Shield, Star, CheckCircle, ArrowRight } from "lucide-react";
import styles from "../styles/components/TrustedSection.module.css";
import CTATriggerButton from "./CTATriggerButton";

const TrustedSection = () => {
  const trustedCompanies = [
    {
      name: "TechCorp",
      logo: "🏢",
      industry: "Technology",
      description: "Leading software solutions provider"
    },
    {
      name: "FinanceFlow",
      logo: "💼",
      industry: "Finance",
      description: "Digital banking platform"
    },
    {
      name: "HealthTech",
      logo: "🏥",
      industry: "Healthcare",
      description: "Medical technology innovator"
    },
    {
      name: "EcoRetail",
      logo: "🛒",
      industry: "E-commerce",
      description: "Sustainable retail platform"
    },
    {
      name: "EduTech",
      logo: "🎓",
      industry: "Education",
      description: "Online learning solutions"
    },
    {
      name: "LogiFlow",
      logo: "📦",
      industry: "Logistics",
      description: "Supply chain optimization"
    }
  ];

  const trustMetrics = [
    {
      icon: <Building2 size={24} />,
      number: "500+",
      label: "Companies Trust Us",
      description: "From startups to Fortune 500"
    },
    {
      icon: <Users size={24} />,
      number: "50K+",
      label: "Happy Users",
      description: "Across all our platforms"
    },
    {
      icon: <Award size={24} />,
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable service delivery"
    },
    {
      icon: <Shield size={24} />,
      number: "100%",
      label: "Security Compliant",
      description: "Enterprise-grade protection"
    }
  ];

  const trustReasons = [
    "Enterprise-grade security & compliance",
    "24/7 dedicated support team",
    "Scalable solutions for any business size",
    "Proven track record of success",
    "Cutting-edge technology stack",
    "Transparent pricing & billing"
  ];

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
            {trustMetrics.map((metric, index) => (
              <div key={index} className={styles.metricCard}>
                <div className={styles.metricIcon}>
                  {metric.icon}
                </div>
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
            {trustedCompanies.map((company, index) => (
              <div key={index} className={styles.companyCard}>
                <div className={styles.companyLogo}>
                  <span className={styles.logoEmoji}>{company.logo}</span>
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
              {trustReasons.map((reason, index) => (
                <div key={index} className={styles.reasonItem}>
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
                className={`${styles.primaryButton} rounded-pill`}
              />
              {/* <button className={styles.primaryButton}>
                Start Your Project
                <Star size={16} />
              </button> */}   
              <button className={styles.secondaryButton}>
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;

