"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import styles from "../styles/components/footer.module.css";

export default function Footer() {
  const services = [
    { title: "Digital Marketing", link: "/digital-marketing-services", icon: <Mail size={18} /> },
    { title: "SEO Services", link: "/search-engine-optimization-seo-services", icon: <MapPin size={18} /> },
    { title: "PPC Campaigns", link: "/pay-per-click-ppc-management-services", icon: <Mail size={18} /> },
    { title: "Social Media Marketing", link: "/social-media-optimization-services", icon: <Instagram size={18} /> },
    { title: "Web Development", link: "/website-development-services", icon: <Phone size={18} /> },
    { title: "App Development", link: "/app-development-services", icon: <Phone size={18} /> },
  ];

  const quickLinks = [
    { title: "About Us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
    { title: "Careers", link: "/careers" },
    { title: "Privacy Policy", link: "/privacy-policy" },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className={styles.footerHeading}>Sense Digital</h5>
            <p className={styles.footerText}>
              Your trusted partner in digital transformation and technology solutions.
              We help brands grow online with innovative strategies and cutting-edge solutions.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className={styles.footerHeading}>Quick Links</h5>
            <ul className={styles.footerLinks}>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.link} className={styles.footerLink}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4 mb-md-0">
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

          {/* Contact */}
          <div className="col-md-3">
            <h5 className={styles.footerHeading}>Contact Us</h5>
            <p className={styles.footerText}>
              <MapPin size={16} /> 123 Digital Street, New York, USA
              <br />
              <Phone size={16} /> +1 (123) 456-7890
              <br />
              <Mail size={16} /> info@sense.digital
            </p>
            <h6 className={styles.footerHeading}>Newsletter</h6>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Your email" className={styles.newsInput} />
              <button className={styles.newsBtn}>Subscribe</button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`row ${styles.bottomBar}`}>
          <div className="col-12 text-center">
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} Sense Digital. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
