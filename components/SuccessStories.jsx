"use client";

import React from "react";
import { Star, TrendingUp, Users, Award, CheckCircle, Quote, ArrowRight } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import styles from "../styles/components/successStories.module.css";

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
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      avatar: "👩‍💼",
      content: "Sense Digital transformed our online presence completely. Our website traffic increased by 400% and we're now ranking #1 for our main keywords. The team's expertise is unmatched.",
      rating: 5,
      results: ["400% Traffic Increase", "Top 3 Rankings", "6 Months"]
    },
    {
      name: "Michael Chen",
      company: "E-Commerce Plus",
      role: "Marketing Director",
      avatar: "👨‍💻",
      content: "Working with Sense Digital was a game-changer for our business. They helped us optimize our e-commerce platform and our sales doubled within 8 months. Highly recommended!",
      rating: 5,
      results: ["200% Sales Growth", "50% Conversion Rate", "8 Months"]
    },
    {
      name: "Emily Rodriguez",
      company: "Local Business Hub",
      role: "Founder",
      avatar: "👩‍🎨",
      content: "The local SEO services brought us more customers than we ever imagined. We went from struggling to get noticed to being the go-to business in our area. Amazing results!",
      rating: 5,
      results: ["500% Local Visibility", "Top Local Rankings", "4 Months"]
    },
    {
      name: "David Thompson",
      company: "FinanceFlow",
      role: "CTO",
      avatar: "👨‍💼",
      content: "Sense Digital's web development team created a stunning, fast, and secure platform for us. Our user engagement increased by 300% and we've received countless compliments.",
      rating: 5,
      results: ["300% User Engagement", "99.9% Uptime", "3 Months"]
    },
    {
      name: "Lisa Wang",
      company: "HealthTech Solutions",
      role: "VP Marketing",
      avatar: "👩‍⚕️",
      content: "Their digital marketing strategies helped us reach our target audience effectively. Our lead generation increased by 250% and the quality of leads improved significantly.",
      rating: 5,
      results: ["250% Lead Generation", "High-Quality Leads", "5 Months"]
    },
    {
      name: "James Wilson",
      company: "EduTech Platform",
      role: "Operations Manager",
      avatar: "👨‍🏫",
      content: "The team's attention to detail and commitment to our success is outstanding. They delivered our project ahead of schedule and exceeded all our expectations.",
      rating: 5,
      results: ["Ahead of Schedule", "Exceeded Expectations", "2 Months"]
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
              <button className={styles.primaryButton}>
                Start Your Project
                <ArrowRight size={16} />
              </button>
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