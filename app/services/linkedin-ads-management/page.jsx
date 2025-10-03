import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Linkedin,
  Briefcase,
  Users,
  Target,
  TrendingUp,
  Award,
  Building2,
  UserCheck,
  BarChart3,
  Rocket,
} from "lucide-react"
import styles from "./linkedin-ads.module.css"

const LinkedInAdsManagement = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <Linkedin className="w-4 h-4" />
              LinkedIn Marketing Partner
            </div>
            <h1 className={styles.heroTitle}>
              Connect with Decision Makers on
              <span className={styles.highlight}> LinkedIn</span>
            </h1>
            <p className={styles.heroDescription}>
              Reach 900M+ professionals and decision-makers where they're most engaged. Our LinkedIn advertising
              strategies generate high-quality B2B leads that convert.
            </p>
            <div className={styles.heroButtons}>
              <Button className={styles.primaryButton}>
                <Rocket className="w-5 h-5 mr-2" />
                Generate Leads
              </Button>
              <Button className={styles.secondaryButton}>View Success Stories</Button>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statValue}>4x</div>
                <div className={styles.statLabel}>Higher Conversion Rate</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>65%</div>
                <div className={styles.statLabel}>B2B Marketers Use It</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>$150+</div>
                <div className={styles.statLabel}>Avg. Lead Value</div>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.linkedinCard}>
              <div className={styles.cardHeader}>
                <div className={styles.companyLogo}>
                  <Building2 className="w-6 h-6" />
                </div>
                <div className={styles.cardInfo}>
                  <div className={styles.companyName}>Your Company</div>
                  <div className={styles.promoted}>Promoted</div>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3>Transform Your B2B Marketing Strategy</h3>
                <p>Download our free guide to generating high-quality leads on LinkedIn</p>
                <div className={styles.cardImage}></div>
                <Button className={styles.cardCta}>Download Now</Button>
              </div>
              <div className={styles.cardMetrics}>
                <div className={styles.metricItem}>
                  <Users className="w-4 h-4" />
                  <span>1,247 leads</span>
                </div>
                <div className={styles.metricItem}>
                  <TrendingUp className="w-4 h-4" />
                  <span>8.5% CTR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Types Section */}
      <section className={styles.adTypes}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Comprehensive LinkedIn Advertising Solutions</h2>
          <p className={styles.sectionDescription}>
            From sponsored content to InMail campaigns - we leverage every LinkedIn ad format to reach your target
            audience
          </p>
        </div>
        <div className={styles.adTypesGrid}>
          <Card className={styles.adTypeCard}>
            <Briefcase className={styles.adTypeIcon} />
            <h3 className={styles.adTypeTitle}>Sponsored Content</h3>
            <p className={styles.adTypeDescription}>
              Native ads that appear directly in the LinkedIn feed, perfect for building brand awareness and driving
              engagement.
            </p>
          </Card>
          <Card className={styles.adTypeCard}>
            <UserCheck className={styles.adTypeIcon} />
            <h3 className={styles.adTypeTitle}>Sponsored InMail</h3>
            <p className={styles.adTypeDescription}>
              Personalized messages delivered directly to prospects' LinkedIn inboxes with high open and response rates.
            </p>
          </Card>
          <Card className={styles.adTypeCard}>
            <Target className={styles.adTypeIcon} />
            <h3 className={styles.adTypeTitle}>Text Ads</h3>
            <p className={styles.adTypeDescription}>
              Cost-effective PPC and CPM ads that appear in the sidebar, ideal for driving traffic and conversions.
            </p>
          </Card>
          <Card className={styles.adTypeCard}>
            <Award className={styles.adTypeIcon} />
            <h3 className={styles.adTypeTitle}>Dynamic Ads</h3>
            <p className={styles.adTypeDescription}>
              Personalized ads that automatically customize content based on LinkedIn profile data for higher relevance.
            </p>
          </Card>
          <Card className={styles.adTypeCard}>
            <BarChart3 className={styles.adTypeIcon} />
            <h3 className={styles.adTypeTitle}>Lead Gen Forms</h3>
            <p className={styles.adTypeDescription}>
              Pre-filled forms that make it easy for prospects to share their information without leaving LinkedIn.
            </p>
          </Card>
          <Card className={styles.adTypeCard}>
            <Building2 className={styles.adTypeIcon} />
            <h3 className={styles.adTypeTitle}>Account-Based Marketing</h3>
            <p className={styles.adTypeDescription}>
              Target specific companies and decision-makers with precision ABM campaigns for enterprise sales.
            </p>
          </Card>
        </div>
      </section>

      {/* Targeting Section */}
      <section className={styles.targeting}>
        <div className={styles.targetingContent}>
          <div className={styles.targetingVisual}>
            <div className={styles.targetingCard}>
              <h3 className={styles.targetingCardTitle}>Precision Targeting</h3>
              <div className={styles.targetingOptions}>
                <div className={styles.targetingOption}>
                  <div className={styles.optionIcon}>👔</div>
                  <div>
                    <div className={styles.optionTitle}>Job Title</div>
                    <div className={styles.optionValue}>CEO, CMO, Director</div>
                  </div>
                </div>
                <div className={styles.targetingOption}>
                  <div className={styles.optionIcon}>🏢</div>
                  <div>
                    <div className={styles.optionTitle}>Company Size</div>
                    <div className={styles.optionValue}>1000-5000 employees</div>
                  </div>
                </div>
                <div className={styles.targetingOption}>
                  <div className={styles.optionIcon}>🎯</div>
                  <div>
                    <div className={styles.optionTitle}>Industry</div>
                    <div className={styles.optionValue}>Technology, SaaS</div>
                  </div>
                </div>
                <div className={styles.targetingOption}>
                  <div className={styles.optionIcon}>🎓</div>
                  <div>
                    <div className={styles.optionTitle}>Seniority</div>
                    <div className={styles.optionValue}>VP-level & above</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className={styles.targetingTitle}>Reach the Right Professionals</h2>
            <p className={styles.targetingDescription}>
              LinkedIn's unmatched professional data lets us target your ideal customers with precision impossible on
              other platforms.
            </p>
            <div className={styles.targetingFeatures}>
              <div className={styles.targetingFeature}>
                <div className={styles.featureNumber}>20+</div>
                <div className={styles.featureLabel}>Targeting Criteria</div>
              </div>
              <div className={styles.targetingFeature}>
                <div className={styles.featureNumber}>900M</div>
                <div className={styles.featureLabel}>Professionals</div>
              </div>
              <div className={styles.targetingFeature}>
                <div className={styles.featureNumber}>90%</div>
                <div className={styles.featureLabel}>Data Accuracy</div>
              </div>
            </div>
            <ul className={styles.targetingList}>
              <li>Target by job title, function, and seniority level</li>
              <li>Reach specific companies or industries</li>
              <li>Filter by company size and growth rate</li>
              <li>Target based on skills and interests</li>
              <li>Leverage LinkedIn Groups and connections</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <h2 className={styles.processTitle}>Our B2B Lead Generation Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepIcon}>
              <Target className="w-8 h-8" />
            </div>
            <h3 className={styles.stepTitle}>Audience Research</h3>
            <p className={styles.stepDescription}>
              Identify your ideal customer profile and build detailed targeting strategies.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepIcon}>
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className={styles.stepTitle}>Campaign Creation</h3>
            <p className={styles.stepDescription}>
              Develop compelling ad creative and messaging that resonates with professionals.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepIcon}>
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className={styles.stepTitle}>Performance Tracking</h3>
            <p className={styles.stepDescription}>
              Monitor key metrics and optimize campaigns for maximum lead quality and ROI.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepIcon}>
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className={styles.stepTitle}>Scale & Optimize</h3>
            <p className={styles.stepDescription}>
              Scale winning campaigns and continuously improve targeting and messaging.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <Linkedin className={styles.ctaIcon} />
          <h2 className={styles.ctaTitle}>Ready to Generate Quality B2B Leads?</h2>
          <p className={styles.ctaDescription}>
            Let's create a LinkedIn advertising strategy that connects you with decision-makers
          </p>
          <Button className={styles.ctaButton}>Start Generating Leads</Button>
        </div>
      </section>
    </div>
  )
}

export default LinkedInAdsManagement
