import { HiCodeBracket } from 'react-icons/hi2'
import styles from './SoftwareTag.module.css'

export default function SoftwareTag() {
  return (
    <div className={styles.tag}>
      <HiCodeBracket className={styles.icon} />
      <span className={styles.text}>SOFTWARE ENTHUSIAST</span>
    </div>
  )
}