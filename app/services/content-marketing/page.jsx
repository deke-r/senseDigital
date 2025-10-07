import { FileText, PenTool, Calendar, Target, BarChart3, Users, ArrowRight, Sparkles, Globe, Megaphone } from "lucide-react"
import styles from "./content-marketing.module.css"
import CTATriggerButton from "@/components/CTATriggerButton"
import CTAModal from "@/components/CTAmodal"

export default function ContentMarketingPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.tagline}>
                <Sparkles size={16} />
                <span>Content That Converts</span>
              </div>
              <h1 className={styles.title}>
                Drive Growth with
                <span className={styles.highlight}> Strategic Content Marketing</span>
              </h1>
              <p className={styles.description}>
                Create compelling content that attracts, engages, and converts your target audience. 
                Our data-driven content strategies build brand authority and drive sustainable business growth.
              </p>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>450%</div>
                  <div className={styles.metricLabel}>Content ROI</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>3.2M</div>
                  <div className={styles.metricLabel}>Content Views</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>78%</div>
                  <div className={styles.metricLabel}>Lead Conversion</div>
                </div>
              </div>
              <div className={styles.actions}>
                <CTATriggerButton
                  text={
                    <>
                      Start Content Strategy <ArrowRight className={styles.arrowIcon} />
                    </>
                  }
                  className={`${styles.primaryBtn} rounded-4 border-0`}
                />
                {/* <button className={styles.primaryBtn}>
                  Start Content Strategy
                  <ArrowRight size={18} />
                </button> */}   
                <button className={styles.secondaryBtn}>View Content Gallery</button>
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.chartContainer}>
                <div className={styles.chartCard}>
                  <div className={styles.chartHeader}>
                    <span>Content Performance</span>
                    <BarChart3 size={20} className={styles.trendIcon} />
                  </div>
                  <div className={styles.chartBars}>
                    <div className={styles.bar} style={{ height: "55%" }}></div>
                    <div className={styles.bar} style={{ height: "70%" }}></div>
                    <div className={styles.bar} style={{ height: "90%" }}></div>
                    <div className={styles.bar} style={{ height: "100%" }}></div>
                  </div>
                  <div className={styles.chartFooter}>
                    <span className={styles.growth}>+85% Engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.servicesHeader}>
            <h2>Comprehensive Content Solutions</h2>
            <p>Multi-format content strategies that engage audiences across all touchpoints</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <FileText size={28} />
              </div>
              <h3>Blog Content Strategy</h3>
              <p>SEO-optimized blog posts that establish thought leadership and drive organic traffic.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>10k+ Words/month</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Megaphone size={28} />
              </div>
              <h3>Social Media Content</h3>
              <p>Engaging posts, stories, and videos optimized for each social platform.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Viral Content</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <PenTool size={28} />
              </div>
              <h3>Visual Content Design</h3>
              <p>Infographics, illustrations, and visual storytelling that captivates audiences.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Creative Assets</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Calendar size={28} />
              </div>
              <h3>Content Calendar Management</h3>
              <p>Strategic content planning and scheduling across all platforms and channels.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Consistent Publishing</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Users size={28} />
              </div>
              <h3>Email Newsletter Content</h3>
              <p>Personalized email campaigns and newsletters that nurture leads and retain customers.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>High Open Rates</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Globe size={28} />
              </div>
              <h3>Website Copywriting</h3>
              <p>Compelling web copy that converts visitors into customers with persuasive storytelling.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Conversion Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Strategy Process */}
      <section className={styles.strategyProcess}>
        <div className="container">
          <div className={styles.strategyHeader}>
            <h2>Our Content Strategy Framework</h2>
            <p>A proven methodology that transforms your content from good to exceptional</p>
          </div>

          <div className={styles.strategySteps}>
            <div className={styles.strategyCard}>
              <div className={styles.strategyIcon}>
                <Target size={32} />
              </div>
              <h3>1. Audience Analysis</h3>
              <p>Deep dive into your target audience's pain points, preferences, and content consumption habits.</p>
              <ul>
                <li>Persona development</li>
                <li>Journey mapping</li>
                <li>Content gap analysis</li>
              </ul>
            </div>

            <div className={styles.strategyCard}>
              <div className={styles.strategyIcon}>
                <FileText size={32} />
              </div>
              <h3>2. Content Planning</h3>
              <p>Strategic content themes, messaging frameworks, and editorial calendars aligned with business goals.</p>
              <ul>
                <li>Theme development</li>
                <li>Messaging frameworks</li>
                <li>Editorial calendars</li>
              </ul>
            </div>

            <div className={styles.strategyCard}>
              <div className={styles.strategyIcon}>
                <PenTool size={32} />
              </div>
              <h3>3. Content Creation</h3>
              <p>High-quality content production across all formats, maintaining brand voice and messaging.</p>
              <ul>
                <li>Content production</li>
                <li>Quality assurance</li>
                <li>Brand consistency</li>
              </ul>
            </div>

            <div className={styles.strategyCard}>
              <div className={styles.strategyIcon}>
                <BarChart3 size={32} />
              </div>
              <h3>4. Performance Optimization</h3>
              <p>Data-driven content optimization based on performance metrics and audience feedback.</p>
              <ul>
                <li>Performance tracking</li>
                <li>A/B testing</li>
                <li>Content iteration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Formats */}
      <section className={styles.formatsSection}>
        <div className="container">
          <div className={styles.formatsHeader}>
            <h2>Content Formats We Master</h2>
            <p>Diverse content types that resonate with your audience</p>
          </div>

          <div className={styles.formatsGrid}>
            <div className={styles.formatCard}>
              <div className={styles.formatType}>📝</div>
              <h3>Written Content</h3>
              <ul>
                <li>Blog articles</li>
                <li>Case studies</li>
                <li>Whitepapers</li>
                <li>Email newsletters</li>
                <li>Social media posts</li>
              </ul>
            </div>

            <div className={styles.formatCard}>
              <div className={styles.formatType}>🎥</div>
              <h3>Video Content</h3>
              <ul>
                <li>Explainer videos</li>
                <li>Product demos</li>
                <li>Customer testimonials</li>
                <li>Live streaming</li>
                <li>Tutorial series</li>
              </ul>
            </div>

            <div className={styles.formatCard}>
              <div className={styles.formatType}>🎤</div>
              <h3>Audio Content</h3>
              <ul>
                <li>Podcast episodes</li>
                <li>Webinar recordings</li>
                <li>Audio testimonials</li>
                <li>Interview content</li>
                <li>Audio guides</li>
              </ul>
            </div>

            <div className={styles.formatCard}>
              <div className={styles.formatType}>📊</div>
              <h3>Visual Content</h3>
              <ul>
                <li>Infographics</li>
                <li>Social media graphics</li>
                <li>Webinar slides</li>
                <li>Interactive content</li>
                <li>Data visualizations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Performance */}
      <section className={styles.performance}>
        <div className="container">
          <div className={styles.performanceHeader}>
            <h2>Proven Content Performance</h2>
            <p>Real results from our content marketing strategies</p>
          </div>

          <div className={styles.performanceGrid}>
            <div className={styles.performanceCard}>
              <div className={styles.perfNumber}>450%</div>
              <div className={styles.perfLabel}>Increase in Content ROI</div>
              <div className={styles.perfDescription}>Our strategic content approach delivers measurable returns</div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.perfNumber}>2.3M</div>
              <div className={styles.perfLabel}>Total Content Views</div>
              <div className={styles.perfDescription}>High-engagement content reaches millions of viewers</div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.perfNumber}>78%</div>
              <div className={styles.perfLabel}>Average Lead Conversion</div>
              <div className={styles.perfDescription}>Compelling content turns readers into leads</div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.perfNumber}>95%</div>
              <div className={styles.perfLabel}>Client Satisfaction</div>
              <div className={styles.perfDescription}>Clients love our content marketing results</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaContent}>
              <h2>Ready to Transform Your Marketing with Content?</h2>
              <p>Get a free content audit and discover how strategic content can drive your growth.</p>
            </div>
            <CTATriggerButton
              text={
                <>
                  Get Free Content Audit <ArrowRight className={styles.arrowIcon} />
                </>
              }
              className={`${styles.ctaButton} rounded-4 border-0`}
            />
            {/* <button className={styles.ctaButton}>
              Get Free Content Audit
              <ArrowRight size={20} />
            </button> */}
          </div>
        </div>
      </section>

      <CTAModal />
    </main>
  )
}
