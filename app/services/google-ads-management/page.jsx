import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Target,
  TrendingUp,
  Users,
  Zap,
  Search,
  BarChart3,
  CheckCircle2,
  Rocket,
  DollarSign,
  MousePointerClick,
} from "lucide-react"
import styles from "./google-ads.module.css"

const GoogleAdsManagement = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <Target className="w-4 h-4" />
              Google Premier Partner
            </div>
            <h1 className={styles.heroTitle}>
              Drive Results with
              <span className={styles.highlight}> Google Ads</span>
            </h1>
            <p className={styles.heroDescription}>
              Reach customers at the exact moment they're searching for your products or services. Our certified Google
              Ads experts maximize your ROI with data-driven campaigns.
            </p>
            <div className={styles.heroButtons}>
              <Button className={styles.primaryButton}>
                <Rocket className="w-5 h-5 mr-2" />
                Start Campaign
              </Button>
              <Button className={styles.secondaryButton}>View Case Studies</Button>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statValue}>350%</div>
                <div className={styles.statLabel}>Avg. ROI Increase</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>$2M+</div>
                <div className={styles.statLabel}>Ad Spend Managed</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>98%</div>
                <div className={styles.statLabel}>Client Retention</div>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.adCard}>
              <div className={styles.adHeader}>
                <div className={styles.googleLogo}>G</div>
                <span>Sponsored</span>
              </div>
              <div className={styles.adContent}>
                <h3>Your Business Name - Official Site</h3>
                <p>Get 50% Off Your First Order. Limited Time Offer. Shop Now!</p>
                <div className={styles.adUrl}>www.yourbusiness.com</div>
                <div className={styles.adMetrics}>
                  <div className={styles.metric}>
                    <TrendingUp className="w-4 h-4" />
                    <span>+245% CTR</span>
                  </div>
                  <div className={styles.metric}>
                    <DollarSign className="w-4 h-4" />
                    <span>$2.50 CPC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Complete Google Ads Solutions</h2>
          <p className={styles.sectionDescription}>
            From search to display, shopping to video - we manage every aspect of your Google Ads campaigns
          </p>
        </div>
        <div className={styles.servicesGrid}>
          <Card className={styles.serviceCard}>
            <Search className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>Search Ads</h3>
            <p className={styles.serviceDescription}>
              Capture high-intent customers actively searching for your products with optimized search campaigns.
            </p>
          </Card>
          <Card className={styles.serviceCard}>
            <Target className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>Display Ads</h3>
            <p className={styles.serviceDescription}>
              Build brand awareness across 2 million+ websites with visually compelling display advertising.
            </p>
          </Card>
          <Card className={styles.serviceCard}>
            <BarChart3 className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>Shopping Ads</h3>
            <p className={styles.serviceDescription}>
              Showcase your products directly in search results with optimized shopping campaigns that drive sales.
            </p>
          </Card>
          <Card className={styles.serviceCard}>
            <Zap className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>Performance Max</h3>
            <p className={styles.serviceDescription}>
              Leverage Google's AI to maximize conversions across all Google channels with automated campaigns.
            </p>
          </Card>
          <Card className={styles.serviceCard}>
            <MousePointerClick className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>Remarketing</h3>
            <p className={styles.serviceDescription}>
              Re-engage visitors who didn't convert with strategic remarketing campaigns across the web.
            </p>
          </Card>
          <Card className={styles.serviceCard}>
            <Users className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>Local Campaigns</h3>
            <p className={styles.serviceDescription}>
              Drive foot traffic to your physical locations with location-based advertising strategies.
            </p>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <h2 className={styles.processTitle}>Our Proven Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Research & Strategy</h3>
            <p className={styles.stepDescription}>
              Deep dive into your business, competitors, and target audience to build a winning strategy.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Campaign Setup</h3>
            <p className={styles.stepDescription}>
              Create optimized campaigns with compelling ad copy, strategic bidding, and precise targeting.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Launch & Monitor</h3>
            <p className={styles.stepDescription}>
              Launch campaigns and continuously monitor performance with real-time tracking and alerts.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Optimize & Scale</h3>
            <p className={styles.stepDescription}>
              Test, refine, and scale successful campaigns to maximize ROI and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.benefitsContent}>
          <h2 className={styles.benefitsTitle}>Why Choose Our Google Ads Management</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefit}>
              <CheckCircle2 className={styles.benefitIcon} />
              <div>
                <h3 className={styles.benefitTitle}>Certified Google Partners</h3>
                <p className={styles.benefitDescription}>
                  Our team holds Google Ads certifications and stays updated with the latest platform features and best
                  practices.
                </p>
              </div>
            </div>
            <div className={styles.benefit}>
              <CheckCircle2 className={styles.benefitIcon} />
              <div>
                <h3 className={styles.benefitTitle}>Data-Driven Optimization</h3>
                <p className={styles.benefitDescription}>
                  We use advanced analytics and A/B testing to continuously improve campaign performance and lower
                  costs.
                </p>
              </div>
            </div>
            <div className={styles.benefit}>
              <CheckCircle2 className={styles.benefitIcon} />
              <div>
                <h3 className={styles.benefitTitle}>Transparent Reporting</h3>
                <p className={styles.benefitDescription}>
                  Get detailed monthly reports with clear metrics, insights, and recommendations for improvement.
                </p>
              </div>
            </div>
            <div className={styles.benefit}>
              <CheckCircle2 className={styles.benefitIcon} />
              <div>
                <h3 className={styles.benefitTitle}>Dedicated Account Manager</h3>
                <p className={styles.benefitDescription}>
                  Work directly with an experienced account manager who understands your business and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <Rocket className={styles.ctaIcon} />
          <h2 className={styles.ctaTitle}>Ready to Dominate Google Search?</h2>
          <p className={styles.ctaDescription}>
            Let's create a Google Ads strategy that drives real results for your business
          </p>
          <Button className={styles.ctaButton}>Get Free Campaign Audit</Button>
        </div>
      </section>
    </div>
  )
}

export default GoogleAdsManagement
