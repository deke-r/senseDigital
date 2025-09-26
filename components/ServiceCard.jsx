import Link from "next/link"
import { ArrowRight } from "lucide-react" // Using lucide-react for icons
import styles from "../styles/components/service-card.module.css"

export default function ServiceCard({ title, description, icon, link }) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.iconContainer}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <Link href={link} className={styles.learnMoreLink}>
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  )
}
