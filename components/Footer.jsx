"use client";

import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Search,
  MousePointer,
  Smartphone,
  Users,
  Shield,
  ArrowRight
} from "lucide-react";
import styles from "../styles/components/footer.module.css";

export default function Footer() {
  const services = [
    { title: "Digital Marketing", link: "/services/digital-marketing", icon: <Globe size={16} /> },
    { title: "SEO Services", link: "/services/search-engine-optimization-outsourcing-seo", icon: <Search size={16} /> },
    { title: "PPC Campaigns", link: "/services/google-ads-management", icon: <MousePointer size={16} /> },
    { title: "Social Media Marketing", link: "/services/social-media-optimization", icon: <Users size={16} /> },
    { title: "Web Development", link: "/services/website-development", icon: <Globe size={16} /> },
    { title: "App Development", link: "/services/app-development", icon: <Smartphone size={16} /> },
  ];

  const quickLinks = [
    { title: "About Us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
    { title: "Careers", link: "/careers" },
    { title: "Privacy Policy", link: "/privacy-policy" },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription");
  };

  return (
    <footer className={styles.footer}>
      <div className="container-fluid p-0">
        {/* Main Footer Content */}
        <div className="row mx-md-5">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className={styles.companySection}>
              <div className={styles.logoSection}>
                <h3 className={styles.companyName}>MetaSense</h3>
                <div className={styles.tagline}>Digital Excellence Delivered</div>
              </div>
              <p className={styles.companyDescription}>
                Your trusted partner in digital transformation and technology solutions. 
                We help brands grow online with innovative strategies and cutting-edge solutions 
                that drive real results.
              </p>
              <div className={styles.socialLinks}>
                <a href="https://www.facebook.com/metasensedigital/" className={styles.socialIcon} aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://x.com/metasense_" className={styles.socialIcon} aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/metasensedigital/" className={styles.socialIcon} aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className={styles.footerHeading}>Quick Links</h5>
            <ul className={styles.footerLinks}>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.link} className={styles.footerLink}>
                    <ArrowRight size={14} />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className={styles.footerHeading}>Our Services</h5>
            <ul className={styles.footerLinks}>
              {services.map((service, i) => (
                <li key={i} className={styles.serviceItem}>
                  <Link href={service.link} className={styles.footerLink}>
                    <span className={styles.serviceIcon}>{service.icon}</span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5 className={styles.footerHeading}>Get In Touch</h5>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span>MetaSense Digital Marketing Agency<br />
                      Surya Plaza K-185, 2nd Floor<br />
                      Sarai Jullena, NFC, New Delhi-110025</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <span>+91 9599 196874</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                <span>info@metasense.in</span>
              </div>
            </div>
            
            <div className={styles.newsletterSection}>
              <h6 className={styles.newsletterTitle}>Stay Updated</h6>
              <p className={styles.newsletterDescription}>
                Get the latest insights and updates delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className={styles.newsletter}>
                <div className={styles.newsletterInputGroup}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className={styles.newsInput}
                    required
                  />
                  <button type="submit" className={styles.newsBtn}>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className="row align-items-center px-md-5">
            <div className="col-md-6">
              <p className={styles.copyright}>
                &copy; {new Date().getFullYear()} MetaSense. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className={styles.bottomLinks}>
                <Link href="/privacy-policy" className={styles.bottomLink}>Privacy Policy</Link>
                <Link href="/terms-of-service" className={styles.bottomLink}>Terms of Service</Link>
                <Link href="/cookie-policy" className={styles.bottomLink}>Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}