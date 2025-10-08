export const metadata = {
  title: "Blog Management Services – MetaSense",
  description:
    "Boost your brand authority and engagement with MetaSense Blog Management services. We handle content creation, publishing, and strategy for your business blog.",
  keywords:
    "blog management, content creation, blog strategy, blog publishing, MetaSense services, business blogging, SEO blogs, blog optimization, online content management",
  alternates: {
    canonical: "https://metasense.in/blog-management",
  },
  openGraph: {
    title: "Blog Management Services – MetaSense",
    description:
      "MetaSense helps businesses create, publish, and manage blogs effectively to enhance online visibility and engagement.",
    url: "https://metasense.in/blog-management",
    siteName: "MetaSense",
    images: [
      {
        url: "https://metasense.in/og-blog-management.jpg",
        width: 1200,
        height: 630,
        alt: "MetaSense Blog Management",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Management Services – MetaSense",
    description:
      "MetaSense offers end-to-end blog management services to improve brand authority and audience engagement.",
    images: ["https://metasense.in/og-blog-management.jpg"],
    creator: "@MetaSense",
  },
};



import { FileText, Calendar, Search, Users, BarChart3, PenTool, Globe, ArrowRight, Sparkles, Clock, Target, TrendingUp } from "lucide-react"
import styles from "./blog-management.module.css"
import CTATriggerButton from "@/components/CTATriggerButton"
import CTAModal from "@/components/CTAmodal"
          
export default function BlogManagementPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.tagline}>
                <Sparkles size={16} />
                <span>Content Strategy Excellence</span>
              </div>
              <h1 className={styles.title}>
                Transform Your Brand with
                <span className={styles.highlight}> Professional Blog Management</span>
              </h1>
              <p className={styles.description}>
                Elevate your content strategy with our comprehensive blog management services. 
                From content planning to SEO optimization, we handle every aspect of your blog to drive engagement and conversions.
              </p>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>320%</div>
                  <div className={styles.metricLabel}>Traffic Growth</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>85%</div>
                  <div className={styles.metricLabel}>SEO Rankings</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>2.5M</div>
                  <div className={styles.metricLabel}>Monthly Readers</div>
                </div>
              </div>
              <div className={styles.actions}>
                <CTATriggerButton
                  text={
                    <>
                      Start Blog Strategy <ArrowRight className={styles.arrowIcon} />
                    </>
                  }
                  className={`${styles.primaryBtn} rounded-3`}
                />
                {/* <button className={styles.primaryBtn}>
                <button className={styles.primaryBtn}>
                  Start Blog Strategy
                  <ArrowRight size={18} />
                </button> */}
                <button className={styles.secondaryBtn}>View Content Samples</button>
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.chartContainer}>
                <div className={styles.chartCard}>
                  <div className={styles.chartHeader}>
                    <span>Blog Performance</span>
                    <TrendingUp size={20} className={styles.trendIcon} />
                  </div>
                  <div className={styles.chartBars}>
                    <div className={styles.bar} style={{ height: "65%" }}></div>
                    <div className={styles.bar} style={{ height: "80%" }}></div>
                    <div className={styles.bar} style={{ height: "95%" }}></div>
                    <div className={styles.bar} style={{ height: "100%" }}></div>
                  </div>
                  <div className={styles.chartFooter}>
                    <span className={styles.growth}>+280% Engagement</span>
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
            <h2>Complete Blog Management Solutions</h2>
            <p>End-to-end blog management that drives results and builds authority</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <PenTool size={28} />
              </div>
              <h3>Content Creation</h3>
              <p>High-quality, SEO-optimized blog posts that engage readers and drive conversions.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>10+ Posts/month</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Calendar size={28} />
              </div>
              <h3>Editorial Calendar</h3>
              <p>Strategic content planning and scheduling to maintain consistent publishing.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>365 Days Planned</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Search size={28} />
              </div>
              <h3>SEO Optimization</h3>
              <p>Technical SEO, keyword research, and on-page optimization for maximum visibility.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Top 3 Rankings</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Users size={28} />
              </div>
              <h3>Audience Engagement</h3>
              <p>Community management, comment moderation, and reader interaction strategies.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>95% Engagement</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <BarChart3 size={28} />
              </div>
              <h3>Performance Analytics</h3>
              <p>Comprehensive reporting and data analysis to optimize content performance.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Real-time Insights</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Globe size={28} />
              </div>
              <h3>Content Distribution</h3>
              <p>Multi-channel content promotion across social media and email marketing.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>5x Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Management Process */}
      <section className={styles.process}>
        <div className="container">
          <div className={styles.processHeader}>
            <h2>Our Blog Management Process</h2>
            <p>A systematic approach that ensures consistent, high-quality content delivery</p>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3>Strategy & Planning</h3>
                <p>Develop comprehensive content strategy aligned with your business goals and audience needs.</p>
                <ul>
                  <li>Content audit & analysis</li>
                  <li>Keyword research & mapping</li>
                  <li>Editorial calendar creation</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3>Content Creation</h3>
                <p>Produce engaging, SEO-optimized content that resonates with your target audience.</p>
                <ul>
                  <li>Topic ideation & research</li>
                  <li>Content writing & editing</li>
                  <li>Visual content integration</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3>Publishing & Optimization</h3>
                <p>Publish content with technical SEO optimization and cross-platform promotion.</p>
                <ul>
                  <li>SEO optimization</li>
                  <li>Content publishing</li>
                  <li>Social media promotion</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <div className={styles.stepContent}>
                <h3>Monitoring & Growth</h3>
                <p>Track performance metrics and continuously optimize for better results.</p>
                <ul>
                  <li>Performance tracking</li>
                  <li>Content optimization</li>
                  <li>Strategy refinement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className={styles.contentTypes}>
        <div className="container">
          <div className={styles.contentHeader}>
            <h2>Blog Content We Create</h2>
            <p>Diverse content formats that engage and convert your audience</p>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.contentCard}>
              <div className={styles.contentIcon}>📝</div>
              <h3>Educational Articles</h3>
              <ul>
                <li>How-to guides</li>
                <li>Tutorial posts</li>
                <li>Industry insights</li>
                <li>Best practices</li>
                <li>Expert tips</li>
              </ul>
            </div>

            <div className={styles.contentCard}>
              <div className={styles.contentIcon}>📊</div>
              <h3>Data-Driven Content</h3>
              <ul>
                <li>Research reports</li>
                <li>Case studies</li>
                <li>Statistics & trends</li>
                <li>Market analysis</li>
                <li>Survey results</li>
              </ul>
            </div>

            <div className={styles.contentCard}>
              <div className={styles.contentIcon}>💡</div>
              <h3>Thought Leadership</h3>
              <ul>
                <li>Opinion pieces</li>
                <li>Industry predictions</li>
                <li>Expert interviews</li>
                <li>Future trends</li>
                <li>Innovation insights</li>
              </ul>
            </div>

            <div className={styles.contentCard}>
              <div className={styles.contentIcon}>🎯</div>
              <h3>Conversion Content</h3>
              <ul>
                <li>Product reviews</li>
                <li>Comparison guides</li>
                <li>Buyer's guides</li>
                <li>ROI calculators</li>
                <li>Success stories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className={styles.performance}>
        <div className="container">
          <div className={styles.performanceHeader}>
            <h2>Proven Blog Management Results</h2>
            <p>Real metrics from our blog management campaigns</p>
          </div>

          <div className={styles.performanceGrid}>
            <div className={styles.performanceCard}>
              <div className={styles.perfNumber}>320%</div>
              <div className={styles.perfLabel}>Average Traffic Increase</div>
              <div className={styles.perfDescription}>Consistent growth through strategic content</div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.perfNumber}>85%</div>
              <div className={styles.perfLabel}>Top 3 Search Rankings</div>
              <div className={styles.perfDescription}>SEO-optimized content ranks high</div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.perfNumber}>2.5M</div>
              <div className={styles.perfLabel}>Monthly Blog Readers</div>
              <div className={styles.perfDescription}>Engaging content attracts readers</div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.perfNumber}>92%</div>
              <div className={styles.perfLabel}>Client Satisfaction Rate</div>
              <div className={styles.perfDescription}>Clients love our blog management</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaContent}>
              <h2>Ready to Transform Your Blog?</h2>
              <p>Get a free blog audit and discover how professional management can boost your content strategy.</p>
            </div>
            <CTATriggerButton
              text={
                <>
                  Get Free Blog Audit <ArrowRight className={styles.arrowIcon} />
                </>
              }
              className={`${styles.ctaButton} rounded-4`}
            />
            {/* <button className={styles.ctaButton}>
              Get Free Blog Audit
              <ArrowRight size={20} />
            </button> */}
          </div>
        </div>
      </section>

      <CTAModal />
    </main>
  )
}
