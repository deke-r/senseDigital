export const metadata = {
  title: "E-Commerce SEO Services – MetaSense",
  description:
    "Drive more traffic and sales to your online store with MetaSense E-Commerce SEO services. Optimize product pages, categories, and content for higher search rankings.",
  keywords:
    "E-Commerce SEO, online store SEO, product page optimization, category page SEO, MetaSense SEO services, e-commerce website SEO, SEO for online shops, increase online sales, search engine optimization",
  alternates: {
    canonical: "https://metasense.in/services/e-commerce-seo",
  },
  openGraph: {
    title: "E-Commerce SEO Services – MetaSense",
    description:
      "MetaSense offers professional E-Commerce SEO services to boost your online store's visibility, increase traffic, and maximize sales through optimized SEO strategies.",
    url: "https://metasense.in/services/e-commerce-seo",
    siteName: "MetaSense",
    images: [
      {
        url: "https://metasense.in/og-ecommerce-seo.jpg",
        width: 1200,
        height: 630,
        alt: "MetaSense E-Commerce SEO Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce SEO Services – MetaSense",
    description:
      "Optimize your online store for higher search rankings with MetaSense E-Commerce SEO services. Product and category page optimization for maximum traffic and sales.",
    images: ["https://metasense.in/og-ecommerce-seo.jpg"],
    creator: "@MetaSense",
  },
};




import Link from "next/link"
import { ShoppingCart, TrendingUp, Search, Package, Target, ArrowRight } from "lucide-react"
import styles from "./ecommerce-seo.module.css"
import CTATriggerButton from "@/components/CTATriggerButton"
import CTAModal from "@/components/CTAmodal"

const ECommerceSeo = () => {
  const features = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Product Page Optimization",
      description: "Optimize product descriptions, images, and metadata for maximum visibility",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Category SEO",
      description: "Strategic category structure and internal linking for better rankings",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Conversion Rate Optimization",
      description: "Increase sales with SEO strategies that drive qualified traffic",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Schema Markup",
      description: "Rich snippets for products, reviews, and pricing information",
    },
  ]

  const benefits = [
    { metric: "150%", label: "Organic Traffic Increase" },
    { metric: "85%", label: "Higher Conversion Rate" },
    { metric: "3x", label: "More Product Visibility" },
    { metric: "60%", label: "Lower CAC" },
  ]

  const services = [
    "Product SEO Optimization",
    "Technical E-commerce Audits",
    "Shopping Feed Optimization",
    "Local Inventory Ads",
    "Content Marketing for E-commerce",
    "Link Building Strategies",
  ]

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>E-Commerce SEO Services</h1>
            <p className={styles.heroSubtitle}>
              Drive more sales with SEO strategies designed specifically for online stores. Increase product visibility,
              attract qualified buyers, and dominate search results.
            </p>
            <div className={styles.heroCta}>
              <CTATriggerButton
                text={
                  <>
                    Get Free E-commerce Audit <ArrowRight className={styles.arrowIcon} />
                  </>
                }
                className={`${styles.primaryButton} rounded-4 border-0`}
              />
              {/* <Link href="/contact" className={styles.primaryButton}>
                Get Free E-commerce Audit
              </Link> */}
              <Link href="#services" className={styles.secondaryButton}>
                View Services
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.shoppingCard}>
              <ShoppingCart className="w-16 h-16 text-emerald-500" />
              <div className={styles.trendLine}>
                <TrendingUp className="w-8 h-8 text-emerald-500" />
                <span className="text-2xl font-bold text-emerald-500">+150%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statMetric}>{benefit.metric}</div>
            <div className={styles.statLabel}>{benefit.label}</div>
          </div>
        ))}
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>E-Commerce SEO Solutions</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.servicesContent}>
          <div className={styles.servicesText}>
            <h2 className={styles.servicesTitle}>Comprehensive E-Commerce SEO</h2>
            <p className={styles.servicesDescription}>
              Our specialized e-commerce SEO services cover every aspect of your online store's search visibility, from
              technical optimization to content strategy.
            </p>
            <ul className={styles.servicesList}>
              {services.map((service, index) => (
                <li key={index} className={styles.serviceItem}>
                  <Target className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.servicesVisual}>
            <div className={styles.productCard}>
              <Package className="w-12 h-12 text-emerald-500 mb-4" />
              <div className={styles.productInfo}>
                <div className={styles.productTitle}>Product Optimization</div>
                <div className={styles.productPrice}>SEO Score: 95/100</div>
              </div>
              <div className={styles.productBadge}>Optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to Boost Your Online Store?</h2>
        <p className={styles.ctaDescription}>
          Get a free e-commerce SEO audit and discover opportunities to increase your sales
        </p>
        <CTATriggerButton
          text={
            <>
              Start Growing Today <ArrowRight className={styles.arrowIcon} />
            </>
          }
          className={`${styles.ctaButton} rounded-4 border-0`}
        />
        {/* <Link href="/contact" className={styles.ctaButton}>
          Start Growing Today
        </Link> */}
      </section>

      <CTAModal />
      </div>
  )
}

export default ECommerceSeo
