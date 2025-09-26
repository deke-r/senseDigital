"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "../styles/components/header.module.css"
import CTAbtn from "./CTAbtn"

export default function Header() {
  return (
    <header className='bg-light'>
      <nav className={`navbar navbar-expand-lg navbar-dark`}>
        <div className="container">
          {/* Logo */}
          <Link href="/" className={`navbar-brand ${styles.brand}`}>
            <Image
              src="/logo.svg" // replace with your logo
              alt="Logo"
              width={116}
              height={26}
              priority
            />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${styles.navbarTogglerIcon}`}></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Left side links */}
            <ul className={`navbar-nav me-auto ${styles.navbarNav}`}>
              {/* Services Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  href="#"
                  className={`nav-link dropdown-toggle ${styles.navLink}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li><Link href="/services/blockchain-development" className="dropdown-item">Blockchain Development</Link></li>
                  <li><Link href="/services/blockchain-consulting" className="dropdown-item">Blockchain Consulting</Link></li>
                  <li><Link href="/services/custom-software" className="dropdown-item">Custom Software Development</Link></li>
                  <li><Link href="/services/it-consulting" className="dropdown-item">IT Consulting</Link></li>
                  <li><Link href="/services/ml-development" className="dropdown-item">ML Development</Link></li>
                  <li><Link href="/services/data-science" className="dropdown-item">Data Science Development</Link></li>
                  <li><Link href="/services/ar-vr" className="dropdown-item">AR & VR Development</Link></li>
                  <li><Link href="/services/ui-ux" className="dropdown-item">UI/UX Design</Link></li>
                  <li><Link href="/services/qa-testing" className="dropdown-item">QA & Software Testing</Link></li>
                  <li><Link href="/services/mvp-development" className="dropdown-item">MVP Development</Link></li>
                </ul>
              </li>

              {/* Solutions Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  href="#"
                  className={`nav-link dropdown-toggle ${styles.navLink}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutions
                </Link>
                <ul className="dropdown-menu">
                  <li><Link href="/solutions/rwa" className="dropdown-item">RWA Platform</Link></li>
                  <li><Link href="/solutions/arbitrage-bot" className="dropdown-item">Arbitrage Bot</Link></li>
                  <li><Link href="/solutions/cryptoapi" className="dropdown-item">CryptoAPI</Link></li>
                  <li><Link href="/solutions/otc-hawk" className="dropdown-item">OTC Hawk</Link></li>
                  <li><Link href="/solutions/docflow" className="dropdown-item">DocFlow</Link></li>
                  <li><Link href="/solutions/kyt" className="dropdown-item">Know-Your-Transaction</Link></li>
                </ul>
              </li>

              {/* Success Stories */}
              <li className="nav-item">
                <Link href="/success-stories" className={`nav-link ${styles.navLink}`}>
                  Success Stories
                </Link>
              </li>

              {/* Company Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  href="#"
                  className={`nav-link dropdown-toggle ${styles.navLink}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </Link>
                <ul className="dropdown-menu">
                  <li><Link href="/company/about" className="dropdown-item">About Us</Link></li>
                  <li><Link href="/company/team" className="dropdown-item">Team</Link></li>
                  <li><Link href="/company/careers" className="dropdown-item">Careers</Link></li>
                  <li><Link href="/company/social-responsibility" className="dropdown-item">Social Responsibility</Link></li>
                  <li><Link href="/company/contacts" className="dropdown-item">Contacts</Link></li>
                </ul>
              </li>

              {/* Blog */}
              <li className="nav-item">
                <Link href="/blog" className={`nav-link ${styles.navLink}`}>
                  Blog
                </Link>
              </li>
            </ul>

            {/* Right side CTA */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <CTAbtn />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
