import { Users, TrendingUp, Heart, Share2, BarChart3, Globe, ArrowRight, Sparkles, Target, Calendar, Image } from "lucide-react"
import styles from "./social-media-optimization.module.css"
import CTATriggerButton from "@/components/CTATriggerButton"
import CTAModal from "@/components/CTAmodal"

export default function SocialMediaOptimizationPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.tagline}>
                <Sparkles size={16} />
                <span>Social Media Excellence</span>
              </div>
              <h1 className={styles.title}>
                Dominate Social Media with
                <span className={styles.highlight}> Strategic SMO</span>
              </h1>
              <p className={styles.description}>
                Transform your social media presence into a powerful engagement engine. We optimize your profiles, 
                create viral-worthy content, and build communities that convert followers into loyal customers.
              </p>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>320%</div>
                  <div className={styles.metricLabel}>Engagement Boost</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>2.1M</div>
                  <div className={styles.metricLabel}>Total Reach</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>89%</div>
                  <div className={styles.metricLabel}>Follower Growth</div>
                </div>
              </div>
              <div className={styles.actions}>
                <CTATriggerButton
                  text={
                    <>
                      Start SMO Campaign <ArrowRight className={styles.arrowIcon} />
                    </>
                  }
                  className={`${styles.primaryBtn} rounded-3`}
                />
                {/* <button className={styles.primaryBtn}>
                  Start SMO Campaign
                  <ArrowRight size={18} />
                </button> */}
                <button className={styles.secondaryBtn}>View Portfolio</button>
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.chartContainer}>
                <div className={styles.chartCard}>
                  <div className={styles.chartHeader}>
                    <span>Social Engagement Growth</span>
                    <TrendingUp size={20} className={styles.trendIcon} />
                  </div>
                  <div className={styles.chartBars}>
                    <div className={styles.bar} style={{ height: "45%" }}></div>
                    <div className={styles.bar} style={{ height: "65%" }}></div>
                    <div className={styles.bar} style={{ height: "85%" }}></div>
                    <div className={styles.bar} style={{ height: "100%" }}></div>
                  </div>
                  <div className={styles.chartFooter}>
                    <span className={styles.growth}>+245% Engagement</span>
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
            <h2>Complete Social Media Optimization</h2>
            <p>End-to-end solutions that maximize your social media impact across all platforms</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Users size={28} />
              </div>
              <h3>Profile Optimization</h3>
              <p>Craft compelling bios, optimize visuals, and perfect your brand voice across all platforms.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Perfect Profiles</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Image size={28} />
              </div>
              <h3>Content Strategy</h3>
              <p>Develop engaging content calendars and strategies that resonate with your audience.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Viral Content</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <TrendingUp size={28} />
              </div>
              <h3>Growth Hacking</h3>
              <p>Accelerate follower growth with proven strategies and targeted engagement tactics.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Organic Growth</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <BarChart3 size={28} />
              </div>
              <h3>Analytics & Insights</h3>
              <p>Track performance with detailed analytics and actionable insights for optimization.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Data-Driven Growth</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Share2 size={28} />
              </div>
              <h3>Community Management</h3>
              <p>Build and nurture active communities with strategic engagement and relationship building.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Loyal Following</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Heart size={28} />
              </div>
              <h3>Engagement Boost</h3>
              <p>Maximize likes, shares, and comments with interactive content and engagement strategies.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Higher Engagement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className={styles.platforms}>
        <div className="container">
          <div className={styles.platformsHeader}>
            <h2>Platform Expertise</h2>
            <p>Optimized strategies for each unique social media platform</p>
          </div>

          <div className={styles.platformsGrid}>
            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>📘</div>
              <h3>Facebook Optimization</h3>
              <ul>
                <li>Page optimization</li>
                <li>Content scheduling</li>
                <li>Community building</li>
                <li>Facebook Groups management</li>
              </ul>
            </div>

            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>📷</div>
              <h3>Instagram Optimization</h3>
              <ul>
                <li>Visual storytelling</li>
                <li>Stories strategy</li>
                <li>Reels optimization</li>
                <li>IGTV content</li>
              </ul>
            </div>

            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>🐦</div>
              <h3>Twitter Optimization</h3>
              <ul>
                <li>Profile optimization</li>
                <li>Tweet scheduling</li>
                <li>Hashtag strategy</li>
                <li>Twitter Spaces</li>
              </ul>
            </div>

            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>💼</div>
              <h3>LinkedIn Optimization</h3>
              <ul>
                <li>Professional branding</li>
                <li>Company page optimization</li>
                <li>LinkedIn articles</li>
                <li>B2B networking</li>
              </ul>
            </div>

            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>🎵</div>
              <h3>TikTok Optimization</h3>
              <ul>
                <li>Trending content</li>
                <li>Hashtag research</li>
                <li>Creator collaborations</li>
                <li>Viral strategies</li>
              </ul>
            </div>

            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>📌</div>
              <h3>Pinterest Optimization</h3>
              <ul>
                <li>Pin optimization</li>
                <li>Board strategy</li>
                <li>SEO for pins</li>
                <li>Shop integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className="container">
          <div className={styles.processHeader}>
            <h2>Our SMO Process</h2>
            <p>A systematic approach that delivers consistent social media growth</p>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.step}>01</div>
              <div className={styles.stepContent}>
                <h3>Audit & Analysis</h3>
                <p>Analyze current profiles, content performance, and identify optimization opportunities.</p>
                <ul>
                  <li>Profile audit</li>
                  <li>Content analysis</li>
                  <li>Competitor research</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3>Strategy Development</h3>
                <p>Create tailored strategies and content calendars for each platform.</p>
                <ul>
                  <li>Content calendar</li>
                  <li>Posting schedule</li>
                  <li>Brand voice guidelines</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3>Optimization & Growth</h3>
                <p>Implement optimizations and growth strategies across all platforms.</p>
                <ul>
                  <li>Profile optimization</li>
                  <li>Content creation</li>
                  <li>Engagement tactics</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <div className={styles.stepContent}>
                <h3>Monitor & Optimize</h3>
                <p>,measure performance and continuously optimize for maximum results.</p>
                <ul>
                  <li>Performance tracking</li>
                  <li>Analytics reporting</li>
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
              <h2>Ready to Boost Your Social Media Presence?</h2>
              <p>Get a free social media audit and discover untapped opportunities for growth.</p>
            </div>
            <CTATriggerButton
              text={
                <>
                  Get Free Social Media Audit <ArrowRight className={styles.arrowIcon} />
                </>
              }
              className={`${styles.ctaButton} rounded-4`}
            />
            {/* <button className={styles.ctaButton}>
              Get Free Social Media Audit
              <ArrowRight size={20} />
            </button> */}
          </div>
        </div>
      </section>

      <CTAModal />
    </main>
  )
}
