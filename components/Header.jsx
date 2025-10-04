"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  BsGraphUp,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsFileText,
  BsShop,
  BsPhone,
  BsEnvelope,
  BsLaptop,
  BsCodeSlash,
  BsPhoneFill,
  BsChevronDown,
} from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";
import styles from "../styles/components/header.module.css";
import DarkModeToggle from "./DarkModeToggle";
import CTAbtn from "./CTAbtn";

const dropdownItems = {
  ppc: [
    {
      title: "Google Ads Management",
      desc: "Maximize ROI with targeted Google campaigns.",
      icon: <BsGraphUp />,
      link: "/services/google-ads-management",
    },
    {
      title: "LinkedIn Ads Management",
      desc: "Generate leads with precise LinkedIn targeting.",
      icon: <BsLinkedin />,
      link: "/services/linkedin-ads-management",
    },
    {
      title: "Facebook Ads Marketing",
      desc: "Boost engagement with Facebook campaigns.",
      icon: <BsFacebook />,
      link: "/services/facebook-ads-management",
    },
    {
      title: "Instagram Ads Management",
      desc: "Reach your audience effectively on Instagram.",
      icon: <BsInstagram />,
      link: "/services/instagram-ads-management",
    },
  ],
  seo: [
    { title: "On-Page SEO", desc: "Optimize content & structure for search engines.", icon: <BsFileText />, link: "/services/on-page-seo" },
    { title: "Off-Page SEO", desc: "Build authority with backlinks & outreach.", icon: <BsGraphUp />, link: "/services/off-page-seo" },
    { title: "E-Commerce SEO", desc: "Boost your online store's visibility.", icon: <BsShop />, link: "/services/e-commerce-seo" },
    { title: "Mobile SEO", desc: "Optimize for mobile-first indexing.", icon: <BsPhone />, link: "/services/mobile-seo" },
    { title: "SEO Outsourcing", desc: "Delegate SEO tasks to experts.", icon: <BsEnvelope />, link: "/services/search-engine-optimization-outsourcing-seo" },
    { title: "Local SEO", desc: "Get found in local search results.", icon: <BsGraphUp />, link: "/services/local-seo" },
  ],
  smo: [
    { title: "Social Media Optimization", desc: "Increase engagement & followers.", icon: <BsGraphUp />, link: "/services/social-media-optimization" },
    { title: "Content Marketing", desc: "Create valuable content to attract users.", icon: <BsFileText />, link: "/services/content-marketing" },
    { title: "Digital Marketing", desc: "Holistic online marketing strategies.", icon: <BsGraphUp />, link: "/services/digital-marketing" },
    { title: "Online Reputation Management", desc: "Maintain a positive brand image.", icon: <BsEnvelope />, link: "/services/online-reputation-management" },
    { title: "Blog Management", desc: "Plan and manage your blog content.", icon: <BsFileText />, link: "/blog-management" },
    { title: "Influencer Marketing", desc: "Collaborate with influencers effectively.", icon: <BsInstagram />, link: "/services/influencer-marketing" },
  ],
  development: [
    { title: "Web Development", desc: "Build responsive & modern websites.", icon: <BsLaptop />, link: "/services/website-development" },
    { title: "Software Development", desc: "Custom software solutions.", icon: <BsCodeSlash />, link: "/services/software-development" },
    { title: "App Development", desc: "iOS & Android mobile applications.", icon: <BsPhoneFill />, link: "/services/app-development" },
  ],
};

export default function Header() {
  const { isDarkMode } = useDarkMode();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const renderDropdown = (items, category) => {
    const isActive = activeDropdown === category;
    return (
      <div 
        className={`${styles.dropdownMenu} ${isActive ? styles.dropdownActive : ''}`}
      >
        {items.map((item, i) => (
          <Link 
            key={i} 
            href={item.link}
            className={`${styles.dropdownItemWrapper} ${styles.dropdownItem}`}
          >
            <span className={styles.dropdownIcon}>{item.icon}</span>
            <div>
              <div className={styles.dropdownTitle}>{item.title}</div>
              <div className={styles.dropdownDesc}>{item.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <header className={`${styles.header} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Logo */}
          <Link href="/" className={`navbar-brand ${styles.brand}`}>
            <Image src="/img/logo.png" alt="Logo" width={40} height={40} priority />
            <span className={`${styles.brandText}`}>MetaSense</span>
          </Link>

          {/* Bootstrap Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Bootstrap Collapse */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {/* Digital Marketing */}
              <li className="nav-item">
                <Link href="/services/digital-marketing" className={`nav-link ${styles.navLink}`}>
                  Digital Marketing
                </Link>
              </li>

              {/* PPC Dropdown */}
              <li 
                className="nav-item dropdown"
                onMouseEnter={() => setActiveDropdown('ppc')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="#" className={`nav-link  ${styles.navLink}`}>
                  PPC <BsChevronDown className={styles.chevronIcon} />
                </Link>
                {renderDropdown(dropdownItems.ppc, 'ppc')}
              </li>

              {/* SEO Dropdown */}
              <li 
                className="nav-item dropdown"
                onMouseEnter={() => setActiveDropdown('seo')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="#" className={`nav-link  ${styles.navLink}`}>
                  SEO <BsChevronDown className={styles.chevronIcon} />
                </Link>
                {renderDropdown(dropdownItems.seo, 'seo')}
              </li>

              {/* SMO Dropdown */}
              <li 
                className="nav-item dropdown"
                onMouseEnter={() => setActiveDropdown('smo')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="#" className={`nav-link  ${styles.navLink}`}>
                  SMO <BsChevronDown className={styles.chevronIcon} />
                </Link>
                {renderDropdown(dropdownItems.smo, 'smo')}
              </li>

              {/* Development Dropdown */}
              <li 
                className="nav-item dropdown"
                onMouseEnter={() => setActiveDropdown('development')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="#" className={`nav-link  ${styles.navLink}`}>
                  Development <BsChevronDown className={styles.chevronIcon} />
                </Link>
                {renderDropdown(dropdownItems.development, 'development')}
              </li>

              {/* Others */}
              <li className="nav-item">
                <Link href="/services/graphic-designing" className={`nav-link ${styles.navLink}`}>
                  Graphic Design
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services/ui-ux" className={`nav-link ${styles.navLink}`}>
                  UI/UX Design
                </Link>
              </li>
            </ul>

            {/* Right Menu */}
            <ul className="navbar-nav">
              <li className="nav-item d-flex align-items-center">
                <DarkModeToggle />
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}