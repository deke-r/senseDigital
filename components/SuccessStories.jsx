"use client";

import React from "react";
import { Star, TrendingUp, Users, Award, CheckCircle, Quote, ArrowRight } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import styles from "../styles/components/successStories.module.css";
import CTATriggerButton from "./CTATriggerButton";

const SuccessStories = () => {
  const { isDarkMode } = useDarkMode();

  const successMetrics = [
    {
      icon: <TrendingUp size={24} />,
      number: "300%",
      label: "Average Growth",
      description: "Revenue increase for our clients"
    },
    {
      icon: <Users size={24} />,
      number: "500+",
      label: "Happy Clients",
      description: "Businesses we've transformed"
    },
    {
      icon: <Award size={24} />,
      number: "98%",
      label: "Success Rate",
      description: "Project completion success"
    },
    {
      icon: <Star size={24} />,
      number: "4.9/5",
      label: "Client Rating",
      description: "Average client satisfaction"
    }
  ];

  const testimonials = [
    {
      name: "Aarav Mehta",
      company: "BrightMart Retail",
      role: "Founder & CEO",
      avatar: "👨‍💼",
      content:
        "Sense Digital helped us revamp our e-commerce website and run targeted ad campaigns. Within 6 months, our sales grew by 350%. Their team truly understands the Indian market!",
      rating: 5,
      results: ["350% Sales Growth", "Improved Ad ROI", "6 Months"]
    },
    {
      name: "Priya Sharma",
      company: "HealthNest Clinic",
      role: "Marketing Head",
      avatar: "👩‍⚕️",
      content:
        "We saw a 400% increase in appointment bookings after their local SEO work. Our clinic now ranks #1 in our city for major keywords. Highly professional and responsive team.",
      rating: 5,
      results: ["400% More Bookings", "Top Local Rankings", "5 Months"]
    },
    {
      name: "Rohan Verma",
      company: "EduSpark Learning",
      role: "Co-Founder",
      avatar: "👨‍🏫",
      content:
        "Sense Digital’s performance marketing campaigns brought us consistent leads for our online courses. Our cost per lead dropped by 45%. Excellent ROI and transparency.",
      rating: 5,
      results: ["45% Lower CPL", "High-Quality Leads", "4 Months"]
    },
    {
      name: "Neha Patel",
      company: "UrbanGlow Beauty Studio",
      role: "Owner",
      avatar: "👩‍🎨",
      content:
        "Their social media strategy completely changed how people perceive our brand. Our followers grew by 500% and we’re now fully booked most weekends!",
      rating: 5,
      results: ["500% Follower Growth", "Full Bookings", "3 Months"]
    },
    {
      name: "Siddharth Iyer",
      company: "FinEdge Advisors",
      role: "CTO",
      avatar: "👨‍💻",
      content:
        "The web development team at Sense Digital built a fast, secure, and elegant platform for our fintech startup. We’ve seen 250% more user signups and zero downtime.",
      rating: 5,
      results: ["250% More Signups", "99.9% Uptime", "3 Months"]
    },
    {
      name: "Ananya Das",
      company: "TasteBite Foods",
      role: "Brand Manager",
      avatar: "👩‍💼",
      content:
        "We collaborated with Sense Digital for our product launch. Their influencer and digital campaigns helped us reach millions of new customers across India.",
      rating: 5,
      results: ["Viral Reach", "Successful Product Launch", "2 Months"]
    }
  ];
  

  const caseStudies = [
    {
      title: "E-commerce Transformation",
      industry: "Retail",
      challenge: "Low conversion rates and poor user experience",
      solution: "Complete website redesign with UX optimization",
      results: [
        { metric: "Conversion Rate", before: "1.2%", after: "4.8%" },
        { metric: "Average Order Value", before: "$45", after: "$78" },
        { metric: "Revenue Growth", before: "Baseline", after: "+320%" }
      ],
      timeline: "6 months",
      image: "🛒"
    },
    {
      title: "Local SEO Success",
      industry: "Healthcare",
      challenge: "Poor local visibility and low patient acquisition",
      solution: "Comprehensive local SEO and Google My Business optimization",
      results: [
        { metric: "Local Rankings", before: "Page 3", after: "Top 3" },
        { metric: "Phone Calls", before: "5/week", after: "25/week" },
        { metric: "New Patients", before: "2/month", after: "15/month" }
      ],
      timeline: "4 months",
      image: "🏥"
    },
    {
      title: "SaaS Platform Launch",
      industry: "Technology",
      challenge: "Need for scalable, secure web application",
      solution: "Custom web development with cloud infrastructure",
      results: [
        { metric: "User Signups", before: "0", after: "2,500+" },
        { metric: "Page Load Speed", before: "N/A", after: "<2s" },
        { metric: "Uptime", before: "N/A", after: "99.9%" }
      ],
      timeline: "8 months",
      image: "💻"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        size={16}
        className={`${styles.star} ${index < rating ? styles.starFilled : styles.starEmpty}`} 
      />
    ));
  };

  return (
    <section className={`${styles.successStories} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.tagline}>
            <Star size={16} />
            <span>Success Stories</span>
          </div>
          <h2 className={styles.title}>
            Real Results from 
            <span className={styles.highlight}> Real Clients</span>
          </h2>
          <p className={styles.description}>
            Discover how we've helped businesses across industries achieve their digital goals 
            and transform their online presence with measurable results.
          </p>
        </div>

        {/* Success Metrics */}
        <div className={styles.metricsSection}>
          <div className={styles.metricsGrid}>
            {successMetrics.map((metric, index) => (
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

        {/* Testimonials */}
        <div className={styles.testimonialsSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>What Our Clients Say</h3>
            <p className={styles.sectionSubtitle}>
              Hear from the businesses we've helped transform
            </p>
          </div>
          
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <div className={styles.quoteIcon}>
                    <Quote size={20} />
                  </div>
                  <div className={styles.testimonialRating}>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className={styles.testimonialContent}>
                  "{testimonial.content}"
                </p>
                
                <div className={styles.testimonialResults}>
                  {testimonial.results.map((result, resultIndex) => (
                    <span key={resultIndex} className={styles.resultTag}>
                      {result}
                    </span>
                  ))}
                </div>
                
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    <span className={styles.avatarEmoji}>{testimonial.avatar}</span>
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorRole}>{testimonial.role}</p>
                    <p className={styles.authorCompany}>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className={styles.caseStudiesSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Detailed Case Studies</h3>
            <p className={styles.sectionSubtitle}>
              In-depth look at our most successful projects
            </p>
          </div>
          
          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((study, index) => (
              <div key={index} className={styles.caseStudyCard}>
                <div className={styles.caseStudyHeader}>
                  <div className={styles.caseStudyIcon}>
                    <span className={styles.studyEmoji}>{study.image}</span>
                  </div>
                  <div className={styles.caseStudyInfo}>
                    <h4 className={styles.caseStudyTitle}>{study.title}</h4>
                    <p className={styles.caseStudyIndustry}>{study.industry}</p>
                    <span className={styles.caseStudyTimeline}>{study.timeline}</span>
                  </div>
                </div>
                
                <div className={styles.caseStudyContent}>
                  <div className={styles.challengeSection}>
                    <h5 className={styles.challengeTitle}>Challenge</h5>
                    <p className={styles.challengeText}>{study.challenge}</p>
                  </div>
                  
                  <div className={styles.solutionSection}>
                    <h5 className={styles.solutionTitle}>Solution</h5>
                    <p className={styles.solutionText}>{study.solution}</p>
                  </div>
                  
                  <div className={styles.resultsSection}>
                    <h5 className={styles.resultsTitle}>Results</h5>
                    <div className={styles.resultsList}>
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className={styles.resultItem}>
                          <div className={styles.resultMetric}>{result.metric}</div>
                          <div className={styles.resultComparison}>
                            <span className={styles.resultBefore}>{result.before}</span>
                            <ArrowRight size={16} className={styles.resultArrow} />
                            <span className={styles.resultAfter}>{result.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Write Your Success Story?</h3>
            <p className={styles.ctaDescription}>
              Join hundreds of businesses that have transformed their digital presence with our expertise.
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
                <ArrowRight size={16} />
              </button> */}       
              <button className={styles.secondaryButton}>
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;