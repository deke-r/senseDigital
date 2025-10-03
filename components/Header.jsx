"use client";

import Link from "next/link";
import Image from "next/image";
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
} from "react-icons/bs";
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
    { title: "E-Commerce SEO", desc: "Boost your online store’s visibility.", icon: <BsShop />, link: "/services/e-commerce-seo" },
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
  const renderDropdown = (items) => {
    return (
      <ul className={`dropdown-menu megaMenus shadow ${styles.dropdownMenu}`}>
        {items.map((item, i) => (
          <li key={i} className={styles.dropdownItemWrapper}>
            <Link href={item.link} className={`dropdown-item ${styles.dropdownItem}`}>
              <div className={styles.dropdownContent}>
                <span className={styles.icon}>{item.icon}</span>
                <div>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.desc}>{item.desc}</div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Logo */}
          <Link href="/" className={`navbar-brand ${styles.brand}`}>
            <Image src="/img/logo.png" alt="Logo" width={40} height={40} priority />
          </Link>

          {/* Toggler */}
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

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto bottom_header">
              {/* Digital Marketing */}
              <li className="nav-item">
                <Link href="/services/digital-marketing" className={`nav-link ${styles.navLink}`}>
                  Digital Marketing
                </Link>
              </li>

              {/* PPC */}
              <li className="nav-item dropdown">
                <Link
                  href="#"
                  className={`nav-link dropdown-toggle ${styles.navLink}`}
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  PPC
                </Link>
                {renderDropdown(dropdownItems.ppc)}
              </li>

              {/* SEO */}
              <li className="nav-item dropdown">
                <Link
                  href="#"
                  className={`nav-link dropdown-toggle ${styles.navLink}`}
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  SEO
                </Link>
                {renderDropdown(dropdownItems.seo)}
              </li>

              {/* SMO */}
              <li className="nav-item dropdown">
                <Link
                  href="#"
                  className={`nav-link dropdown-toggle ${styles.navLink}`}
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  SMO
                </Link>
                {renderDropdown(dropdownItems.smo)}
              </li>

              {/* Development */}
              <li className="nav-item dropdown">
                <Link
                  href="#"
                  className={`nav-link dropdown-toggle ${styles.navLink}`}
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Development
                </Link>
                {renderDropdown(dropdownItems.development)}
              </li>

              {/* Others */}
              <li className="nav-item">
                <Link href="/services/graphic-designing" className={`nav-link ${styles.navLink}`}>
                  Graphic Design
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/website-designing" className={`nav-link ${styles.navLink}`}>
                  Website Designing
                </Link>
              </li>
            </ul>

            {/* Right Menu */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item d-flex align-items-center">
                <DarkModeToggle />
              </li>
              <li className="nav-item">
                <CTAbtn />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
