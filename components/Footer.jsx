import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react" // Using lucide-react for icons
import styles from "../styles/components/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className={styles.footerHeading}>Sense Digital</h5>
            <p className={styles.footerText}>Your trusted partner in digital transformation and technology solutions.</p>
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
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className={styles.footerHeading}>Quick Links</h5>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.footerLink}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className={styles.footerHeading}>Contact Us</h5>
            <p className={styles.footerText}>
              123 Main Street, Anytown, USA
              <br />
              Email: info@example.com
              <br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
        <div className={`row ${styles.bottomBar}`}>
          <div className="col-12 text-center">
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} Sense Digital. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
