"use client";

import Head from "next/head"
import Layout from "../../components/Layout"
import styles from "../../styles/pages/careers.module.css"
import { 
  Briefcase, 
  Users, 
  MapPin, 
  Clock, 
  IndianRupee, 
  Heart, 
  Lightbulb, 
  Target,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Calendar
} from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"

export default function CareersPage() {
  const { isDarkMode } = useDarkMode();

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Digital Marketing Specialist",
      department: "Marketing",
      location: "New Delhi, India",
      type: "Full-time (On-site)",
      experience: "3-5 years",
      salary: "₹8–12 LPA",
      description:
        "We’re seeking a creative and data-driven digital marketing specialist to lead client campaigns, manage ad budgets, and drive measurable business growth.",
      requirements: [
        "Bachelor’s degree in Marketing, Business, or related field",
        "3+ years of digital marketing experience in an agency or corporate setup",
        "Hands-on experience with Google Ads, Meta Ads, and Analytics tools",
        "Excellent communication and analytical skills"
      ],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      department: "Development",
      location: "New Delhi, India",
      type: "Full-time (On-site)",
      experience: "2-4 years",
      salary: "₹10–14 LPA",
      description:
        "Join our development team to build cutting-edge web applications and digital platforms that deliver exceptional performance and scalability.",
      requirements: [
        "Bachelor’s degree in Computer Science or equivalent experience",
        "2+ years of full-stack development experience",
        "Proficiency in React, Node.js, and modern web technologies",
        "Experience with databases (MySQL/MongoDB) and cloud platforms"
      ],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      location: "New Delhi, India",
      type: "Full-time (On-site)",
      experience: "2-3 years",
      salary: "₹6–9 LPA",
      description:
        "Create beautiful and intuitive user experiences that delight our clients and users. Work closely with developers and product teams to bring ideas to life.",
      requirements: [
        "Bachelor’s degree in Design, HCI, or related field",
        "2+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe XD, or similar design tools",
        "Strong portfolio showcasing creative design solutions"
      ],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "SEO Specialist",
      department: "Marketing",
      location: "New Delhi, India",
      type: "Full-time (On-site)",
      experience: "1-3 years",
      salary: "5–8 LPA",
      description:
        "Help clients improve their organic rankings and website traffic through data-backed SEO strategies and on-page/off-page optimization.",
      requirements: [
        "Bachelor’s degree in Marketing or related field",
        "1+ years of SEO experience (agency experience preferred)",
        "Knowledge of tools like Ahrefs, SEMrush, and Google Analytics",
        "Strong understanding of search algorithms and keyword strategy"
      ],
      posted: "5 days ago"
    }
  ];
  
  

  const benefits = [
    {
      icon: <Heart />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and mental health support"
    },
    {
      icon: <IndianRupee />,
      title: "Competitive Salary",
      description: "Market-competitive compensation with performance bonuses and equity options"
    },
    {
      icon: <Calendar />,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible hours and remote work options"
    },
    {
      icon: <Lightbulb />,
      title: "Learning & Development",
      description: "Professional development budget, conferences, and skill-building opportunities"
    },
    {
      icon: <Target />,
      title: "Career Growth",
      description: "Clear career progression paths and mentorship programs"
    },
    {
      icon: <Users />,
      title: "Team Culture",
      description: "Collaborative environment with regular team events and company retreats"
    }
  ];

  return (
 
     
      
      <main className={`container my-5 ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
        {/* Hero Section */}
        <section className={`${styles.heroSection} ${isDarkMode ? styles.darkHero : styles.lightHero}`}>
          <div className="row">
            <div className="col-12 text-center">
              <h1 className={`${styles.pageTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>Join Our Team</h1>
              <p className={`${styles.heroSubtitle} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
                Be part of a dynamic team that's shaping the future of digital marketing and web development. 
                We're looking for passionate individuals who want to make a real impact.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className={styles.whyWorkSection}>
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className={`${styles.sectionTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>Why Work With MetaSense?</h2>
              <p className={`${styles.sectionSubtitle} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
                We believe in creating an environment where talented people can thrive and grow their careers.
              </p>
            </div>
          </div>
          <div className="row">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className={`${styles.benefitCard} ${isDarkMode ? styles.darkBenefitCard : styles.lightBenefitCard}`}>
                  <div className={`${styles.benefitIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`}>
                    {benefit.icon}
                  </div>
                  <h4 className={`${styles.benefitTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>
                    {benefit.title}
                  </h4>
                  <p className={`${styles.benefitDesc} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current Openings Section */}
        <section className={styles.openingsSection}>
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className={`${styles.sectionTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>Current Openings</h2>
              <p className={`${styles.sectionSubtitle} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
                Explore our current job opportunities and find the perfect role for you.
              </p>
            </div>
          </div>
          <div className="row">
            {jobOpenings.map((job) => (
              <div key={job.id} className="col-lg-6 mb-4">
                <div className={`${styles.jobCard} ${isDarkMode ? styles.darkJobCard : styles.lightJobCard}`}>
                  <div className={styles.jobHeader}>
                    <h3 className={`${styles.jobTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>
                      {job.title}
                    </h3>
                    <span className={`${styles.jobDepartment} ${isDarkMode ? styles.darkBadge : styles.lightBadge}`}>
                      {job.department}
                    </span>
                  </div>
                  
                  <div className={styles.jobMeta}>
                    <div className={styles.jobMetaItem}>
                      <MapPin className={`${styles.metaIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                      <span className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>{job.location}</span>
                    </div>
                    <div className={styles.jobMetaItem}>
                      <Briefcase className={`${styles.metaIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                      <span className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>{job.type}</span>
                    </div>
                    <div className={styles.jobMetaItem}>
                      <Clock className={`${styles.metaIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                      <span className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>{job.experience}</span>
                    </div>
                    <div className={styles.jobMetaItem}>
                      <IndianRupee className={`${styles.metaIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                      <span className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>{job.salary}</span>
                    </div>
                  </div>
                  
                  <p className={`${styles.jobDescription} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
                    {job.description}
                  </p>
                  
                  <div className={styles.jobRequirements}>
                    <h5 className={`${styles.requirementsTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>
                      Key Requirements:
                    </h5>
                    <ul className={styles.requirementsList}>
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className={styles.requirementItem}>
                          <CheckCircle className={`${styles.checkIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                          <span className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.jobFooter}>
                    <span className={`${styles.postedDate} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
                      Posted {job.posted}
                    </span>
                    <button className={`${styles.applyButton} ${isDarkMode ? styles.darkApplyButton : styles.lightApplyButton}`}>
                      Apply Now <ArrowRight className={styles.arrowIcon} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className={styles.cultureSection}>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className={`${styles.cultureContent} ${isDarkMode ? styles.darkCultureContent : styles.lightCultureContent}`}>
                <h2 className={`${styles.cultureTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>
                  Our Culture
                </h2>
                <p className={`${styles.cultureDescription} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
                  At MetaSense, we foster a culture of innovation, collaboration, and continuous learning. 
                  We believe that great ideas come from diverse perspectives and encourage our team members 
                  to bring their authentic selves to work every day.
                </p>
                <div className={styles.cultureValues}>
                  <div className={styles.valueItem}>
                    <CheckCircle className={`${styles.valueIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                    <span className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>Innovation & Creativity</span>
                  </div>
                  <div className={styles.valueItem}>
                    <CheckCircle className={`${styles.valueIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                    <span className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>Collaboration & Teamwork</span>
                  </div>
                  <div className={styles.valueItem}>
                    <CheckCircle className={`${styles.valueIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                    <span className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>Work-Life Balance</span>
                  </div>
                  <div className={styles.valueItem}>
                    <CheckCircle className={`${styles.valueIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                    <span className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>Continuous Learning</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className={`${styles.cultureImage} ${isDarkMode ? styles.darkCultureImage : styles.lightCultureImage}`}>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team Culture"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact HR Section */}
        <section className={styles.contactHRSection}>
          <div className="row">
            <div className="col-12 text-center">
              <div className={`${styles.contactHRCard} ${isDarkMode ? styles.darkContactHRCard : styles.lightContactHRCard}`}>
                <h3 className={`${styles.contactHRTitle} ${isDarkMode ? styles.darkText : styles.lightText}`}>
                  Don't See Your Perfect Role?
                </h3>
                <p className={`${styles.contactHRDescription} ${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>
                  We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our team.
                </p>
                <div className={styles.contactHRInfo}>
                  <div className={styles.contactHRItem}>
                    <Mail className={`${styles.contactHRIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                    <span className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>careers@metasense.com</span>
                  </div>
                  <div className={styles.contactHRItem}>
                    <Phone className={`${styles.contactHRIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`} />
                    <span className={`${isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}`}>+1 (555) 123-4567</span>
                  </div>
                </div>
                <button className={`${styles.contactHRButton} ${isDarkMode ? styles.darkContactHRButton : styles.lightContactHRButton}`}>
                  Send Resume <ArrowRight className={styles.arrowIcon} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
  
  )
}
