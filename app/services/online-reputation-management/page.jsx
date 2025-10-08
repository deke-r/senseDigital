export const metadata = {
  title: "Online Reputation Management – MetaSense",
  description:
    "Protect and enhance your brand image with MetaSense Online Reputation Management services. Monitor, manage, and improve your business reputation online.",
  keywords:
    "online reputation management, ORM, brand reputation, reputation monitoring, reputation repair, MetaSense services, manage online reviews, business reputation, online image management",
  alternates: {
    canonical: "https://metasense.in/services/online-reputation-management",
  },
  openGraph: {
    title: "Online Reputation Management – MetaSense",
    description:
      "MetaSense helps businesses monitor and improve their online reputation, ensuring positive brand presence across platforms.",
    url: "https://metasense.in/services/online-reputation-management",
    siteName: "MetaSense",
    images: [
      {
        url: "https://metasense.in/og-online-reputation-management.jpg",
        width: 1200,
        height: 630,
        alt: "MetaSense Online Reputation Management",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Reputation Management – MetaSense",
    description:
      "Enhance and protect your brand image online with MetaSense ORM services.",
    images: ["https://metasense.in/og-online-reputation-management.jpg"],
    creator: "@MetaSense",
  },
};



import { Shield, Search, AlertTriangle, BarChart3, Users, Globe, ArrowRight, Sparkles, Star, Mic, Image } from "lucide-react"
import styles from "./online-reputation-management.module.css"
import CTATriggerButton from "@/components/CTATriggerButton"
import CTAModal from "@/components/CTAmodal"
          
export default function OnlineReputationManagementPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.tagline}>
                <Sparkles size={16} />
                <span>Protect Your Brand</span>
              </div>
              <h1 className={styles.title}>
                Master Your
                <span className={styles.highlight}> Online Reputation</span>
              </h1>
              <p className={styles.description}>
                Build, protect, and monitor your brand's reputation across all digital platforms. 
                Our comprehensive ORM strategies safeguard your image and amplify positive sentiment.
              </p>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>95%</div>
                  <div className={styles.metricLabel}>Positive Sentiment</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>24/7</div>
                  <div className={styles.metricLabel}>Monitoring</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>2.3M</div>
                  <div className={styles.metricLabel}>Reputation Reach</div>
                </div>
              </div>
              <div className={styles.actions}>
                <CTATriggerButton
                  text={
                    <>
                      Start Reputation Management <ArrowRight className={styles.arrowIcon} />
                    </>
                  }
                  className={`${styles.primaryBtn} rounded-3`}
                />
                {/* <button className={styles.primaryBtn}>
                  Start Reputation Management
                  <ArrowRight size={18} />
                </button> */}
                <button className={styles.secondaryBtn}>View Case Studies</button>
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.chartContainer}>
                <div className={styles.chartCard}>
                  <div className={styles.chartHeader}>
                    <span>Reputation Health Score</span>
                    <Shield size={20} className={styles.trendIcon} />
                  </div>
                  <div className={styles.chartBars}>
                    <div className={styles.bar} style={{ height: "60%" }}></div>
                    <div className={styles.bar} style={{ height: "85%" }}></div>
                    <div className={styles.bar} style={{ height: "95%" }}></div>
                    <div className={styles.bar} style={{ height: "98%" }}></div>
                  </div>
                  <div className={styles.chartFooter}>
                    <span className={styles.growth}>+95% Sentiment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.servicesHeader}>
            <h2>Complete Reputation Management</h2>
            <p>End-to-end solutions that protect and enhance your brand reputation</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Search size={28} />
              </div>
              <h3>Reputation Monitoring</h3>
              <p>Track mentions, reviews, and sentiment across all online platforms in real-time.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Real-time Alerts</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Shield size={28} />
              </div>
              <h3>Review Management</h3>
              <p>Strategically manage reviews, respond professionally, and improve overall ratings.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Higher Ratings</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <AlertTriangle size={28} />
              </div>
              <h3>Crisis Management</h3>
              <p>Quick response strategies and crisis communication to protect your brand during challenges.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Crisis Prevention</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <BarChart3 size={28} />
              </div>
              <h3>Sentiment Analysis</h3>
              <p>Deep insights into public perception and brand sentiment with actionable recommendations.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Data-Driven Insights</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Star size={28} />
              </div>
              <h3>Positive Content Creation</h3>
              <p>Create and promote positive content that showcases your brand's strengths and values.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Brand Enhancement</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Globe size={28} />
              </div>
              <h3>SEO for Reputation</h3>
              <p>Optimize positive content to rank higher and push down negative results in search.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Search Dominance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Platforms */}
      <section className={styles.platforms}>
        <div className="container">
          <div className={styles.platformsHeader}>
            <h2>Platform Coverage</h2>
            <p>Comprehensive monitoring across all digital touchpoints</p>
          </div>

          <div className={styles.platformsGrid}>
            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>⭐</div>
              <h3>Review Platforms</h3>
              <ul>
                <li>Google Reviews</li>
                <li>Yelp Business Pages</li>
                <li>Better Business Bureau</li>
                <li>Industry-specific sites</li>
              </ul>
            </div>

            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>📱</div>
              <h3>Social Media</h3>
              <ul>
                <li>Facebook Pages</li>
                <li>Instagram Brand Mentions</li>
                <li>Twitter Brand Monitoring</li>
                <li>LinkedIn Company Reviews</li>
              </ul>
            </div>

            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>🔍</div>
              <h3>Search Results</h3>
              <ul>
                <li>Google Search Results</li>
                <li>News Articles</li>
                <li>Directory Listings</li>
                <li>Blog Mentions</li>
              </ul>
            </div>

            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>💼</div>
              <h3>Business Listings</h3>
              <ul>
                <li>Google My Business</li>
                <li>Industry directories</li>
                <li>Local directories</li>
                <li>Professional networks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className="container">
          <div className={styles.processHeader}>
            <h2>Our ORM Process</h2>
            <p>A systematic approach to building and protecting your reputation</p>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3>Audit & Analysis</h3>
                <p>Comprehensive analysis of current reputation across all platforms and touchpoints.</p>
                <ul>
                  <li>Reputation audit</li>
                  <li>Sentiment analysis</li>
                  <li>Competitor comparison</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3>Strategy Development</h3>
                <p>Custom reputation strategies tailored to your industry and brand goals.</p>
                <ul>
                  <li>Response frameworks</li>
                  <li>Content strategies</li>
                  <li>Monitoring protocols</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3>Implementation</h3>
                <p>Deploy monitoring systems and execute strategies to improve reputation.</p>
                <ul>
                  <li>Monitoring setup</li>
                  <li>Review responses</li>
                  <li>Content creation</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <div className={styles.stepContent}>
                <h3>Ongoing Management</h3>
                <p>Continuous monitoring, optimization, and crisis prevention strategies.</p>
                <ul>
                  <li>24/7 monitoring</li>
                  <li>Performance tracking</li>
                  <li>Strategy refinement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaContent}>
              <h2>Ready to Take Control of Your Reputation?</h2>
              <p>Get a free reputation audit and see how we can enhance your brand's online presence.</p>
            </div>
            <CTATriggerButton
              text={
                <>
                  Get Free Reputation Audit <ArrowRight className={styles.arrowIcon} />
                </>
              }
              className={`${styles.ctaButton} rounded-4`}
            />
            {/* <button className={styles.ctaButton}>
              Get Free Reputation Audit
              <ArrowRight size={20} />
            </button> */}
          </div>
        </div>
      </section>

      <CTAModal />
    </main>
  )
}
