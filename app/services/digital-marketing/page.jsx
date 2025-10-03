import { TrendingUp, Search, Users, Target, BarChart3, Globe, ArrowRight, Sparkles } from "lucide-react"
import styles from "./digital-marketing.module.css"

export default function DigitalMarketingPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section - Split design */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.tagline}>
                <Sparkles size={16} />
                <span>Data-Driven Marketing</span>
              </div>
              <h1 className={styles.title}>
                Grow Your Brand with
                <span className={styles.highlight}> Strategic Digital Marketing</span>
              </h1>
              <p className={styles.description}>
                We craft data-driven marketing strategies that amplify your online presence, engage your target
                audience, and drive measurable business growth across all digital channels.
              </p>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>3.5x</div>
                  <div className={styles.metricLabel}>Average ROI</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>250%</div>
                  <div className={styles.metricLabel}>Traffic Increase</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>89%</div>
                  <div className={styles.metricLabel}>Lead Growth</div>
                </div>
              </div>
              <div className={styles.actions}>
                <button className={styles.primaryBtn}>
                  Get Free Audit
                  <ArrowRight size={18} />
                </button>
                <button className={styles.secondaryBtn}>View Success Stories</button>
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.chartContainer}>
                <div className={styles.chartCard}>
                  <div className={styles.chartHeader}>
                    <span>Campaign Performance</span>
                    <TrendingUp size={20} className={styles.trendIcon} />
                  </div>
                  <div className={styles.chartBars}>
                    <div className={styles.bar} style={{ height: "60%" }}></div>
                    <div className={styles.bar} style={{ height: "75%" }}></div>
                    <div className={styles.bar} style={{ height: "90%" }}></div>
                    <div className={styles.bar} style={{ height: "100%" }}></div>
                  </div>
                  <div className={styles.chartFooter}>
                    <span className={styles.growth}>+127% Growth</span>
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
            <h2>Complete Digital Marketing Solutions</h2>
            <p>Integrated strategies that work together to maximize your online impact</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Search size={28} />
              </div>
              <h3>SEO Optimization</h3>
              <p>Dominate search rankings with technical SEO, content optimization, and strategic link building.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>+180% organic traffic</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <TrendingUp size={28} />
              </div>
              <h3>Social Media Marketing</h3>
              <p>Build engaged communities and drive conversions through strategic social campaigns.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>3.2M+ reach</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Target size={28} />
              </div>
              <h3>PPC Advertising</h3>
              <p>Maximize ROI with targeted ad campaigns across Google, Facebook, and LinkedIn.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>4.5x ROAS</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <BarChart3 size={28} />
              </div>
              <h3>Analytics & Insights</h3>
              <p>Make informed decisions with comprehensive tracking, reporting, and data analysis.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Real-time dashboards</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Users size={28} />
              </div>
              <h3>Content Marketing</h3>
              <p>Attract and engage your audience with compelling content that drives action.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>500K+ engagements</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Globe size={28} />
              </div>
              <h3>Email Marketing</h3>
              <p>Nurture leads and retain customers with personalized email campaigns.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>42% open rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className="container">
          <div className={styles.processHeader}>
            <h2>Our Marketing Methodology</h2>
            <p>A proven framework that delivers consistent, measurable results</p>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3>Strategy & Research</h3>
                <p>Deep dive into your market, competitors, and audience to craft a winning strategy.</p>
                <ul>
                  <li>Market analysis</li>
                  <li>Competitor research</li>
                  <li>Audience profiling</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3>Campaign Launch</h3>
                <p>Execute multi-channel campaigns with precision targeting and compelling creative.</p>
                <ul>
                  <li>Channel setup</li>
                  <li>Creative development</li>
                  <li>Campaign deployment</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3>Optimization</h3>
                <p>Continuously monitor, test, and refine campaigns for maximum performance.</p>
                <ul>
                  <li>A/B testing</li>
                  <li>Performance tracking</li>
                  <li>Budget optimization</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <div className={styles.stepContent}>
                <h3>Scale & Grow</h3>
                <p>Expand successful campaigns and explore new opportunities for growth.</p>
                <ul>
                  <li>Scaling strategies</li>
                  <li>New channel testing</li>
                  <li>ROI maximization</li>
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
              <h2>Ready to Accelerate Your Growth?</h2>
              <p>Get a free marketing audit and discover untapped opportunities for your business.</p>
            </div>
            <button className={styles.ctaButton}>
              Claim Your Free Audit
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
