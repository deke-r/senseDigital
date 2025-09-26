import Head from "next/head"
import Layout from "../../components/Layout"
import styles from "../../styles/pages/blog.module.css"
import Link from "next/link"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Transformation in 2025",
    excerpt: "Explore the upcoming trends and innovations shaping the digital landscape and how businesses can prepare for the future.",
    date: "December 15, 2024",
    author: "Sense Digital Team",
    category: "Technology",
    readTime: "5 min read",
    link: "#",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 2,
    title: "AI in Web Development: Enhancing User Experience",
    excerpt: "Discover how artificial intelligence is revolutionizing web development and improving user interactions across digital platforms.",
    date: "December 10, 2024",
    author: "Sarah Johnson",
    category: "Development",
    readTime: "7 min read",
    link: "#",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 3,
    title: "Top 5 Digital Marketing Strategies for Startups",
    excerpt: "Learn essential digital marketing tactics to help your startup gain visibility, attract customers, and scale your business effectively.",
    date: "December 5, 2024",
    author: "Mike Chen",
    category: "Marketing",
    readTime: "6 min read",
    link: "#",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 4,
    title: "Building Scalable Web Applications with Modern Frameworks",
    excerpt: "A comprehensive guide to choosing the right frameworks and architecture patterns for building scalable web applications.",
    date: "November 28, 2024",
    author: "Emily Rodriguez",
    category: "Development",
    readTime: "8 min read",
    link: "#",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 5,
    title: "The Importance of User Experience in E-commerce",
    excerpt: "How exceptional UX design can significantly impact conversion rates and customer satisfaction in online retail.",
    date: "November 20, 2024",
    author: "David Kim",
    category: "Design",
    readTime: "4 min read",
    link: "#",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 6,
    title: "Cybersecurity Best Practices for Modern Businesses",
    excerpt: "Essential cybersecurity measures every business should implement to protect their digital assets and customer data.",
    date: "November 15, 2024",
    author: "Lisa Wang",
    category: "Security",
    readTime: "9 min read",
    link: "#",
    image: "/placeholder.svg?height=250&width=400",
  },
]

const categories = ["All", "Technology", "Development", "Marketing", "Design", "Security"]

export default function BlogPage() {
  return (
    <Layout>
      <Head>
        <title>Sense Digital - Blog</title>
        <meta name="description" content="Stay updated with our latest insights, trends, and news in digital technology." />
        <meta property="og:title" content="Sense Digital - Blog" />
        <meta property="og:description" content="Stay updated with our latest insights, trends, and news in digital technology." />
        <meta property="og:image" content="/placeholder.svg?height=630&width=1200" />
      </Head>
      
      <main className="container my-5">
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="row">
            <div className="col-12 text-center">
              <h1 className={styles.pageTitle}>Our Blog</h1>
              <p className={styles.heroSubtitle}>
                Stay updated with the latest insights, trends, and innovations in digital technology, 
                web development, and business growth strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className={styles.categoriesSection}>
          <div className="row">
            <div className="col-12">
              <div className={styles.categoriesContainer}>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`${styles.categoryBtn} ${index === 0 ? styles.activeCategory : ''}`}
                  >
                    <Tag size={16} />
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className={styles.featuredSection}>
          <div className="row">
            <div className="col-12">
              <div className={styles.featuredPost}>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className={`img-fluid ${styles.featuredImage}`}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className={styles.featuredContent}>
                      <span className={styles.featuredBadge}>Featured</span>
                      <h2 className={styles.featuredTitle}>{blogPosts[0].title}</h2>
                      <p className={styles.featuredExcerpt}>{blogPosts[0].excerpt}</p>
                      <div className={styles.postMeta}>
                        <span className={styles.metaItem}>
                          <Calendar size={16} />
                          {blogPosts[0].date}
                        </span>
                        <span className={styles.metaItem}>
                          <User size={16} />
                          {blogPosts[0].author}
                        </span>
                        <span className={styles.metaItem}>
                          {blogPosts[0].readTime}
                        </span>
                      </div>
                      <Link href={blogPosts[0].link} className={styles.readMoreBtn}>
                        Read Full Article <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className={styles.postsSection}>
          <div className="row g-4">
            {blogPosts.slice(1).map((post) => (
              <div className="col-lg-4 col-md-6" key={post.id}>
                <div className={styles.blogCard}>
                  <div className={styles.cardImageContainer}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className={styles.blogImage}
                    />
                    <div className={styles.categoryTag}>{post.category}</div>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <div className={styles.cardMeta}>
                      <span className={styles.metaItem}>
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className={styles.metaItem}>
                        <User size={14} />
                        {post.author}
                      </span>
                    </div>
                    <div className={styles.cardFooter}>
                      <span className={styles.readTime}>{post.readTime}</span>
                      <Link href={post.link} className={styles.readMoreLink}>
                        Read More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className={styles.newsletterSection}>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 text-center">
              <div className={styles.newsletterCard}>
                <h3 className={styles.newsletterTitle}>Stay Updated</h3>
                <p className={styles.newsletterSubtitle}>
                  Subscribe to our newsletter and never miss the latest insights and updates from our blog.
                </p>
                <div className={styles.newsletterForm}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className={styles.emailInput}
                  />
                  <button className={styles.subscribeBtn}>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
