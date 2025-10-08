export const metadata = {
  title: "Influencer Marketing Services – MetaSense",
  description:
    "Amplify your brand reach with MetaSense Influencer Marketing services. Connect with top influencers to drive engagement and sales.",
  keywords:
    "influencer marketing, brand promotion, social media influencers, influencer campaigns, MetaSense services, digital marketing, online brand promotion, influencer strategy, influencer outreach",
  alternates: {
    canonical: "https://metasense.in/services/influencer-marketing",
  },
  openGraph: {
    title: "Influencer Marketing Services – MetaSense",
    description:
      "MetaSense connects your brand with the right influencers to enhance engagement, reach, and conversions across social media platforms.",
    url: "https://metasense.in/services/influencer-marketing",
    siteName: "MetaSense",
    images: [
      {
        url: "https://metasense.in/og-influencer-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "MetaSense Influencer Marketing",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Services – MetaSense",
    description:
      "Drive engagement and sales with MetaSense Influencer Marketing. Partner with top influencers for maximum brand impact.",
    images: ["https://metasense.in/og-influencer-marketing.jpg"],
    creator: "@MetaSense",
  },
};




import { Users, Target, TrendingUp, BarChart3, Heart, Star, ArrowRight, Sparkles, Camera, Globe, Megaphone, Award } from "lucide-react"
import styles from "./influencer-marketing.module.css"
import CTATriggerButton from "@/components/CTATriggerButton"
import CTAModal from "@/components/CTAmodal"
            
export default function InfluencerMarketingPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.tagline}>
                <Sparkles size={16} />
                <span>Authentic Influence</span>
              </div>
              <h1 className={styles.title}>
                Amplify Your Brand with
                <span className={styles.highlight}> Strategic Influencer Marketing</span>
              </h1>
              <p className={styles.description}>
                Connect with authentic influencers who resonate with your audience. 
                Our data-driven approach ensures genuine partnerships that drive engagement, trust, and measurable business results.
              </p>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>5.2M</div>
                  <div className={styles.metricLabel}>Total Reach</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>8.5%</div>
                  <div className={styles.metricLabel}>Engagement Rate</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>340%</div>
                  <div className={styles.metricLabel}>ROI Growth</div>
                </div>
              </div>
              <div className={styles.actions}>
                <CTATriggerButton
                  text={
                    <>
                      Start Influencer Campaign <ArrowRight className={styles.arrowIcon} />
                    </>
                  }
                  className={`${styles.primaryBtn} rounded-3`}
                />
                {/* <button className={styles.primaryBtn}>
                  Start Influencer Campaign
                  <ArrowRight size={18} />
                </button> */}
                <button className={styles.secondaryBtn}>View Case Studies</button>
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
                    <div className={styles.bar} style={{ height: "70%" }}></div>
                    <div className={styles.bar} style={{ height: "85%" }}></div>
                    <div className={styles.bar} style={{ height: "95%" }}></div>
                    <div className={styles.bar} style={{ height: "100%" }}></div>
                  </div>
                  <div className={styles.chartFooter}>
                    <span className={styles.growth}>+340% ROI</span>
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
            <h2>Complete Influencer Marketing Solutions</h2>
            <p>End-to-end influencer campaigns that build authentic connections and drive results</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Users size={28} />
              </div>
              <h3>Influencer Discovery</h3>
              <p>Find the perfect influencers who align with your brand values and target audience.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>500+ Verified Influencers</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Target size={28} />
              </div>
              <h3>Campaign Strategy</h3>
              <p>Develop comprehensive influencer marketing strategies tailored to your business goals.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Custom Strategies</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Camera size={28} />
              </div>
              <h3>Content Creation</h3>
              <p>Collaborate with influencers to create authentic, engaging content that resonates.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>High-Quality Content</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Megaphone size={28} />
              </div>
              <h3>Campaign Management</h3>
              <p>End-to-end campaign management from planning to execution and optimization.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Full Management</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <BarChart3 size={28} />
              </div>
              <h3>Performance Analytics</h3>
              <p>Comprehensive tracking and reporting to measure campaign success and ROI.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Real-time Insights</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <Globe size={28} />
              </div>
              <h3>Multi-Platform Reach</h3>
              <p>Amplify your message across Instagram, TikTok, YouTube, and other social platforms.</p>
              <div className={styles.cardFooter}>
                <span className={styles.result}>Cross-Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Influencer Types */}
      <section className={styles.influencerTypes}>
        <div className="container">
          <div className={styles.typesHeader}>
            <h2>Influencer Categories We Work With</h2>
            <p>Diverse influencer partnerships for every brand and budget</p>
          </div>

          <div className={styles.typesGrid}>
            <div className={styles.typeCard}>
              <div className={styles.typeIcon}>🌟</div>
              <h3>Mega Influencers</h3>
              <p>1M+ followers</p>
              <ul>
                <li>Massive reach & visibility</li>
                <li>Celebrity-level impact</li>
                <li>Premium brand awareness</li>
                <li>High-profile partnerships</li>
              </ul>
            </div>

            <div className={styles.typeCard}>
              <div className={styles.typeIcon}>⭐</div>
              <h3>Macro Influencers</h3>
              <p>100K - 1M followers</p>
              <ul>
                <li>Strong engagement rates</li>
                <li>Industry expertise</li>
                <li>Balanced reach & authenticity</li>
                <li>Professional content quality</li>
              </ul>
            </div>

            <div className={styles.typeCard}>
              <div className={styles.typeIcon}>💫</div>
              <h3>Micro Influencers</h3>
              <p>10K - 100K followers</p>
              <ul>
                <li>High engagement rates</li>
                <li>Niche audience targeting</li>
                <li>Authentic recommendations</li>
                <li>Cost-effective campaigns</li>
              </ul>
            </div>

            <div className={styles.typeCard}>
              <div className={styles.typeIcon}>✨</div>
              <h3>Nano Influencers</h3>
              <p>1K - 10K followers</p>
              <ul>
                <li>Highest engagement rates</li>
                <li>Local community influence</li>
                <li>Authentic peer recommendations</li>
                <li>Budget-friendly options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Process */}
      <section className={styles.process}>
        <div className="container">
          <div className={styles.processHeader}>
            <h2>Our Influencer Marketing Process</h2>
            <p>A systematic approach that ensures successful influencer partnerships</p>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3>Strategy & Research</h3>
                <p>Develop comprehensive influencer marketing strategy based on your brand goals and target audience.</p>
                <ul>
                  <li>Audience analysis & profiling</li>
                  <li>Platform selection</li>
                  <li>Budget allocation</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3>Influencer Discovery</h3>
                <p>Identify and vet influencers who align with your brand values and have authentic engagement.</p>
                <ul>
                  <li>Influencer database search</li>
                  <li>Audience overlap analysis</li>
                  <li>Engagement quality assessment</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3>Campaign Execution</h3>
                <p>Manage the entire campaign lifecycle from content creation to publication and monitoring.</p>
                <ul>
                  <li>Content brief development</li>
                  <li>Campaign coordination</li>
                  <li>Real-time monitoring</li>
                </ul>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <div className={styles.stepContent}>
                <h3>Analysis & Optimization</h3>
                <p>Track performance metrics and optimize campaigns for maximum ROI and engagement.</p>
                <ul>
                  <li>Performance tracking</li>
                  <li>ROI analysis</li>
                  <li>Campaign optimization</li>
                </ul>
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
            <p>Strategic influencer marketing across all major social platforms</p>
          </div>

          <div className={styles.platformsGrid}>
            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>📸</div>
              <h3>Instagram</h3>
              <ul>
                <li>Feed posts & stories</li>
                <li>Reels & IGTV content</li>
                <li>Shopping integrations</li>
                <li>Story highlights</li>
              </ul>
            </div>

            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>🎵</div>
              <h3>TikTok</h3>
              <ul>
                <li>Trending challenges</li>
                <li>Branded hashtags</li>
                <li>Duet collaborations</li>
                <li>Live streaming</li>
              </ul>
            </div>

            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>📺</div>
              <h3>YouTube</h3>
              <ul>
                <li>Product reviews</li>
                <li>Unboxing videos</li>
                <li>Sponsored content</li>
                <li>Channel partnerships</li>
              </ul>
            </div>

            <div className={styles.platformCard}>
              <div className={styles.platformIcon}>💼</div>
              <h3>LinkedIn</h3>
              <ul>
                <li>Professional content</li>
                <li>Industry insights</li>
                <li>B2B partnerships</li>
                <li>Thought leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className={styles.successStories}>
        <div className="container">
          <div className={styles.storiesHeader}>
            <h2>Influencer Marketing Success Stories</h2>
            <p>Real results from our strategic influencer partnerships</p>
          </div>

          <div className={styles.storiesGrid}>
            <div className={styles.storyCard}>
              <div className={styles.storyIcon}>
                <Award size={24} />
              </div>
              <h3>Fashion Brand Campaign</h3>
              <p>Partnered with 15 micro-influencers to launch a new clothing line, resulting in 340% ROI and 2.3M impressions.</p>
              <div className={styles.storyMetrics}>
                <span>340% ROI</span>
                <span>2.3M Reach</span>
              </div>
            </div>

            <div className={styles.storyCard}>
              <div className={styles.storyIcon}>
                <TrendingUp size={24} />
              </div>
              <h3>Tech Product Launch</h3>
              <p>Collaborated with tech influencers to promote a new gadget, achieving 89% engagement rate and 150K+ sales.</p>
              <div className={styles.storyMetrics}>
                <span>89% Engagement</span>
                <span>150K+ Sales</span>
              </div>
            </div>

            <div className={styles.storyCard}>
              <div className={styles.storyIcon}>
                <Heart size={24} />
              </div>
              <h3>Beauty Brand Growth</h3>
              <p>Worked with beauty influencers across multiple platforms to increase brand awareness by 280% in 6 months.</p>
              <div className={styles.storyMetrics}>
                <span>280% Growth</span>
                <span>Multi-Platform</span>
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
              <h2>Ready to Amplify Your Brand?</h2>
              <p>Start your influencer marketing journey with authentic partnerships that drive real results.</p>
            </div>
            <CTATriggerButton
              text={
                <>
                  Launch Your Campaign <ArrowRight className={styles.arrowIcon} />
                </>
              }
              className={`${styles.ctaButton} rounded-4`}
            />
            {/* <button className={styles.ctaButton}>
              Launch Your Campaign
              <ArrowRight size={20} />
            </button> */}
          </div>
        </div>
      </section>

      <CTAModal />
    </main>
  )
}