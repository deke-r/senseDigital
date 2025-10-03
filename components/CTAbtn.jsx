import Link from "next/link"
import styles from "../styles/components/cta-btn.module.css"

export default function CTAbtn() {
  return (
    <Link href="/contact" className={styles.ctaBtn}>
      Get Started
    </Link>
  )
}
