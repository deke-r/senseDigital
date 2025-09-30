"use client";

import React from 'react';
import ServicePage from './ServicePage';

// Example usage of ServicePage component with different service data
const ServicePageExample = () => {
  // Example 1: SEO Service (default)
  const seoServiceData = {
    title: "Search Engine Optimization (SEO) Services",
    heroDescription: "Boost your website visibility and rank higher on search engines with our proven SEO strategies.",
    aboutTitle: "About Our SEO Services",
    aboutDescription: "Our SEO services focus on optimizing your site structure, content, and backlinks to improve organic traffic and search rankings. We use data-driven strategies and cutting-edge tools to deliver measurable results for your business.",
    aboutImage: "/img/seo-service.jpg",
    features: [
      {
        icon: "🔍",
        title: "On-Page SEO",
        description: "Optimize your website's content, structure, and HTML elements for better search engine visibility."
      },
      {
        icon: "📈",
        title: "Off-Page SEO",
        description: "Build authority and credibility through strategic backlink acquisition and digital PR."
      },
      {
        icon: "🌐",
        title: "Technical SEO",
        description: "Improve your website's technical foundation for better crawling and indexing by search engines."
      },
      {
        icon: "🏪",
        title: "Local SEO",
        description: "Dominate local search results and attract customers in your geographic area."
      },
      {
        icon: "📱",
        title: "E-Commerce SEO",
        description: "Specialized SEO strategies for online stores to increase product visibility and sales."
      }
    ],
    whyChooseUs: [
      {
        icon: "📊",
        title: "Proven Results",
        description: "Track record of improving search rankings and organic traffic for businesses across industries."
      },
      {
        icon: "👥",
        title: "Expert Team",
        description: "Certified SEO professionals with years of experience in digital marketing."
      },
      {
        icon: "🛡️",
        title: "Tailored Strategies",
        description: "Customized SEO plans designed specifically for your business goals and target audience."
      },
      {
        icon: "⏰",
        title: "Transparent Reporting",
        description: "Regular reports and updates on your SEO progress with clear metrics and insights."
      }
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        company: "TechStart Inc.",
        content: "Our organic traffic increased by 300% within 6 months of working with their SEO team. Highly recommended!",
        rating: 5
      },
      {
        name: "Michael Chen",
        company: "E-Commerce Plus",
        content: "The team's expertise in e-commerce SEO helped us rank #1 for our main keywords. Sales have doubled!",
        rating: 5
      },
      {
        name: "Emily Rodriguez",
        company: "Local Business Hub",
        content: "Local SEO services brought us more customers than we ever imagined. Great ROI on our investment.",
        rating: 5
      }
    ],
    ctaTitle: "Ready to grow with SEO?",
    ctaDescription: "Contact us today for a free SEO audit and consultation.",
    ctaButtonText: "Get Free SEO Audit",
    ctaButtonLink: "/contact"
  };

  // Example 2: PPC Service
  const ppcServiceData = {
    title: "Pay-Per-Click (PPC) Advertising Services",
    heroDescription: "Maximize your ROI with targeted PPC campaigns that drive qualified leads and boost conversions.",
    aboutTitle: "About Our PPC Services",
    aboutDescription: "Our PPC experts create and manage high-performing campaigns across Google Ads, Facebook, LinkedIn, and other platforms. We focus on data-driven optimization to ensure every dollar spent delivers maximum value.",
    aboutImage: "/img/ppc-service.jpg",
    features: [
      {
        icon: "🎯",
        title: "Google Ads Management",
        description: "Strategic Google Ads campaigns optimized for maximum ROI and lead generation."
      },
      {
        icon: "📱",
        title: "Social Media Advertising",
        description: "Facebook, Instagram, and LinkedIn ads that reach your target audience effectively."
      },
      {
        icon: "📊",
        title: "Campaign Optimization",
        description: "Continuous monitoring and optimization to improve performance and reduce costs."
      },
      {
        icon: "🔍",
        title: "Keyword Research",
        description: "In-depth keyword analysis to target high-value, low-competition terms."
      },
      {
        icon: "📈",
        title: "Conversion Tracking",
        description: "Advanced tracking setup to measure and optimize for your business goals."
      }
    ],
    whyChooseUs: [
      {
        icon: "💰",
        title: "ROI-Focused",
        description: "Every campaign is designed to maximize return on investment and drive profitable growth."
      },
      {
        icon: "🎯",
        title: "Precise Targeting",
        description: "Advanced audience targeting to reach the right people at the right time."
      },
      {
        icon: "📊",
        title: "Data-Driven",
        description: "Comprehensive analytics and reporting to track performance and optimize results."
      },
      {
        icon: "⚡",
        title: "Quick Results",
        description: "See immediate traffic and leads from day one of your campaign launch."
      }
    ],
    testimonials: [
      {
        name: "David Kim",
        company: "Tech Solutions Ltd.",
        content: "Our PPC campaigns generated 5x more qualified leads than our previous efforts. Excellent ROI!",
        rating: 5
      },
      {
        name: "Lisa Wang",
        company: "E-Commerce Store",
        content: "The team's expertise in Google Ads helped us reduce cost per acquisition by 60%. Highly recommended!",
        rating: 5
      },
      {
        name: "James Wilson",
        company: "B2B Services",
        content: "LinkedIn advertising campaigns brought us high-quality B2B leads. Great targeting and optimization.",
        rating: 5
      }
    ],
    ctaTitle: "Ready to boost your ROI?",
    ctaDescription: "Get started with a free PPC audit and strategy consultation.",
    ctaButtonText: "Get Free PPC Audit",
    ctaButtonLink: "/contact"
  };

  // Example 3: Web Development Service
  const webDevServiceData = {
    title: "Web Development Services",
    heroDescription: "Build stunning, responsive websites that convert visitors into customers with our expert development team.",
    aboutTitle: "About Our Web Development",
    aboutDescription: "We create custom websites using the latest technologies and best practices. From simple landing pages to complex e-commerce platforms, we deliver solutions that are fast, secure, and optimized for conversions.",
    aboutImage: "/img/web-dev-service.jpg",
    features: [
      {
        icon: "💻",
        title: "Custom Web Development",
        description: "Tailored websites built to your exact specifications and business requirements."
      },
      {
        icon: "📱",
        title: "Responsive Design",
        description: "Mobile-first designs that look perfect on all devices and screen sizes."
      },
      {
        icon: "⚡",
        title: "Performance Optimization",
        description: "Lightning-fast websites optimized for speed, SEO, and user experience."
      },
      {
        icon: "🛒",
        title: "E-Commerce Solutions",
        description: "Full-featured online stores with payment processing and inventory management."
      },
      {
        icon: "🔧",
        title: "Maintenance & Support",
        description: "Ongoing maintenance, updates, and technical support to keep your site running smoothly."
      }
    ],
    whyChooseUs: [
      {
        icon: "🎨",
        title: "Modern Design",
        description: "Contemporary, user-friendly designs that reflect your brand and engage visitors."
      },
      {
        icon: "🔒",
        title: "Secure & Reliable",
        description: "Built with security best practices and hosted on reliable, scalable infrastructure."
      },
      {
        icon: "📈",
        title: "Conversion Optimized",
        description: "Every element designed to guide visitors toward your business goals."
      },
      {
        icon: "🚀",
        title: "Fast Delivery",
        description: "Efficient development process that delivers your project on time and on budget."
      }
    ],
    testimonials: [
      {
        name: "Maria Garcia",
        company: "Fashion Boutique",
        content: "Our new e-commerce site increased online sales by 250%. Beautiful design and seamless functionality!",
        rating: 5
      },
      {
        name: "Robert Taylor",
        company: "Consulting Firm",
        content: "Professional website that perfectly represents our brand. Great communication throughout the project.",
        rating: 5
      },
      {
        name: "Jennifer Lee",
        company: "Restaurant Chain",
        content: "Mobile-responsive site with online ordering. Our customers love the new experience!",
        rating: 5
      }
    ],
    ctaTitle: "Ready to build your dream website?",
    ctaDescription: "Let's discuss your project and create something amazing together.",
    ctaButtonText: "Start Your Project",
    ctaButtonLink: "/contact"
  };

  return (
    <div>
      {/* You can switch between different service data */}
      <ServicePage serviceData={seoServiceData} />
      {/* <ServicePage serviceData={ppcServiceData} /> */}
      {/* <ServicePage serviceData={webDevServiceData} /> */}
    </div>
  );
};

export default ServicePageExample;
