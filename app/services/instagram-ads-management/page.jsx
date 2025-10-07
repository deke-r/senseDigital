import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Heart, MessageCircle, Send, Bookmark, TrendingUp, Eye, Target, Sparkles, ArrowRight } from "lucide-react"
import styles from "./instagram-ads.module.css"
import CTATriggerButton from "@/components/CTATriggerButton"
import CTAModal from "@/components/CTAmodal"

const InstagramAdsManagement = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <Instagram className="w-4 h-4" />
              Meta Business Partner
            </div>
            <h1 className={styles.heroTitle}>
              Captivate Your Audience on
              <span className={styles.highlight}> Instagram</span>
            </h1>
            <p className={styles.heroDescription}>
              Connect with over 2 billion active users through visually stunning ads that stop the scroll and drive
              action. We create Instagram campaigns that convert.
            </p>
            <div className={styles.heroButtons}>
              <CTATriggerButton
                text={
                  <>
                    Launch Campaign <ArrowRight className={styles.arrowIcon} />
                  </>
                }
                className={`${styles.primaryButton} rounded-4 border-0`}
              />            
              {/* <Button className={styles.primaryButton}>
                <Sparkles className="w-5 h-5 mr-2" />
                Launch Campaign
              </Button> */}
              <Button className={`${styles.secondaryButton} rounded-4 border-0`}>View Portfolio</Button> 
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneScreen}>
                <div className={styles.instagramPost}>
                  <div className={styles.postHeader}>
                    <div className={styles.avatar}></div>
                    <div className={styles.postInfo}>
                      <div className={styles.username}>yourbrand</div>
                      <div className={styles.sponsored}>Sponsored</div>
                    </div>
                  </div>
                  <div className={styles.postImage}>
                    <div className={styles.adLabel}>Your Ad Here</div>
                  </div>
                  <div className={styles.postActions}>
                    <div className={styles.actionIcons}>
                      <Heart className="w-6 h-6" />
                      <MessageCircle className="w-6 h-6" />
                      <Send className="w-6 h-6" />
                      <Bookmark className="w-6 h-6 ml-auto" />
                    </div>
                    <div className={styles.likes}>12,847 likes</div>
                  </div>
                  <div className={styles.ctaButton}>Shop Now</div>
                </div>
              </div>
            </div>
            <div className={styles.floatingMetrics}>
              <div className={styles.metricCard}>
                <Eye className="w-6 h-6" />
                <div>
                  <div className={styles.metricValue}>2.5M</div>
                  <div className={styles.metricLabel}>Impressions</div>
                </div>
              </div>
              <div className={styles.metricCard}>
                <TrendingUp className="w-6 h-6" />
                <div>
                  <div className={styles.metricValue}>8.5%</div>
                  <div className={styles.metricLabel}>Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Formats Section */}
      <section className={styles.formats}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Master Every Instagram Ad Format</h2>
          <p className={styles.sectionDescription}>
            From Stories to Reels, we create thumb-stopping content for every placement
          </p>
        </div>
        <div className={styles.formatsGrid}>
          <Card className={styles.formatCard}>
            <div className={styles.formatIcon}>📱</div>
            <h3 className={styles.formatTitle}>Stories Ads</h3>
            <p className={styles.formatDescription}>
              Full-screen vertical ads that blend seamlessly into the Stories experience with interactive elements.
            </p>
          </Card>
          <Card className={styles.formatCard}>
            <div className={styles.formatIcon}>🎬</div>
            <h3 className={styles.formatTitle}>Reels Ads</h3>
            <p className={styles.formatDescription}>
              Short-form video ads that capture attention in the fastest-growing content format on Instagram.
            </p>
          </Card>
          <Card className={styles.formatCard}>
            <div className={styles.formatIcon}>🖼️</div>
            <h3 className={styles.formatTitle}>Feed Ads</h3>
            <p className={styles.formatDescription}>
              Eye-catching photo and video ads that appear naturally in users' main Instagram feeds.
            </p>
          </Card>
          <Card className={styles.formatCard}>
            <div className={styles.formatIcon}>🎯</div>
            <h3 className={styles.formatTitle}>Carousel Ads</h3>
            <p className={styles.formatDescription}>
              Swipeable multi-image ads perfect for showcasing product collections or telling brand stories.
            </p>
          </Card>
          <Card className={styles.formatCard}>
            <div className={styles.formatIcon}>🛍️</div>
            <h3 className={styles.formatTitle}>Shopping Ads</h3>
            <p className={styles.formatDescription}>
              Shoppable posts that let users purchase directly from Instagram with seamless checkout.
            </p>
          </Card>
          <Card className={styles.formatCard}>
            <div className={styles.formatIcon}>🔍</div>
            <h3 className={styles.formatTitle}>Explore Ads</h3>
            <p className={styles.formatDescription}>
              Reach users discovering new content in the Explore tab with targeted, relevant ads.
            </p>
          </Card>
        </div>
      </section>

      {/* Strategy Section */}
      <section className={styles.strategy}>
        <div className={styles.strategyContent}>
          <div>
            <h2 className={styles.strategyTitle}>Creative That Converts</h2>
            <p className={styles.strategyDescription}>
              Instagram is a visual platform. We combine stunning design with strategic messaging to create ads that
              don't just look good - they perform.
            </p>
            <div className={styles.strategyFeatures}>
              <div className={styles.feature}>
                <Target className={styles.featureIcon} />
                <div>
                  <h3 className={styles.featureTitle}>Precision Targeting</h3>
                  <p className={styles.featureDescription}>
                    Reach your ideal customers with advanced audience targeting based on interests, behaviors, and
                    demographics.
                  </p>
                </div>
              </div>
              <div className={styles.feature}>
                <Sparkles className={styles.featureIcon} />
                <div>
                  <h3 className={styles.featureTitle}>Creative Excellence</h3>
                  <p className={styles.featureDescription}>
                    Our design team creates scroll-stopping visuals optimized for mobile and aligned with Instagram's
                    aesthetic.
                  </p>
                </div>
              </div>
              <div className={styles.feature}>
                <TrendingUp className={styles.featureIcon} />
                <div>
                  <h3 className={styles.featureTitle}>Performance Optimization</h3>
                  <p className={styles.featureDescription}>
                    Continuous A/B testing and optimization to improve engagement rates and lower cost per acquisition.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.creativeShowcase}>
            <div className={styles.showcaseItem}>
              <div className={styles.showcaseImage}></div>
              <div className={styles.showcaseMetric}>+425% Engagement</div>
            </div>
            <div className={styles.showcaseItem}>
              <div className={styles.showcaseImage}></div>
              <div className={styles.showcaseMetric}>$1.20 CPA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className={styles.results}>
        <h2 className={styles.resultsTitle}>Real Results for Real Businesses</h2>
        <div className={styles.resultsGrid}>
          <div className={styles.resultCard}>
            <div className={styles.resultValue}>520%</div>
            <div className={styles.resultLabel}>ROI Increase</div>
            <p className={styles.resultDescription}>E-commerce Fashion Brand</p>
          </div>
          <div className={styles.resultCard}>
            <div className={styles.resultValue}>2.8M</div>
            <div className={styles.resultLabel}>Reach</div>
            <p className={styles.resultDescription}>Local Restaurant Chain</p>
          </div>
          <div className={styles.resultCard}>
            <div className={styles.resultValue}>12.5%</div>
            <div className={styles.resultLabel}>Engagement Rate</div>
            <p className={styles.resultDescription}>Beauty & Wellness</p>
          </div>
          <div className={styles.resultCard}>
            <div className={styles.resultValue}>$0.85</div>
            <div className={styles.resultLabel}>Cost Per Click</div>
            <p className={styles.resultDescription}>Tech Startup</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaGradient}></div>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Go Viral?</h2>
          <p className={styles.ctaDescription}>
            Let's create Instagram ads that capture attention and drive real business results
          </p>
          <CTATriggerButton
            text={
              <>
                Start Your Campaign <ArrowRight className={styles.arrowIcon} />
              </>
            }
            className={`${styles.ctaButton} rounded-4 border-0`}
          />
          {/* <Button className={styles.ctaButton}>
            <Instagram className="w-5 h-5 mr-2" />
            Start Your Campaign
          </Button> */}
        </div>
      </section>

      <CTAModal />
    </div>
  )
}

export default InstagramAdsManagement
