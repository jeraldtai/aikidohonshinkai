import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          香港合氣道本心会<br />
          Hong Kong Aikido Honshinkai
        </Link>
      </div>
      <div className={styles.links}>
        <div className={styles.dropdown}>
          <span>Main</span>
          <div className={styles.dropdownContent}>
            <Link href="/what-is-aikido">What is Aikido?</Link>
            <Link href="/ethic-charter">Ethic Charter of Aikido</Link>
            <Link href="https://www.aikikai.or.jp/eng/" target="_blank">Aikikai Foundation</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <span>Training Schedule</span>
          <div className={styles.dropdownContent}>
            <Link href="/dojo">Dojo / Activity Room</Link>
            <Link href="/etiquette">Dojo Etiquette</Link>
            <Link href="/weather">Weather Arrangement</Link>
            <Link href="/grading">Grading System</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <span>News</span>
          <div className={styles.dropdownContent}>
            <Link href="/gallery">Gallery</Link>
            <Link href="/videos">Videos</Link>
            <Link href="https://www.facebook.com/aikidohonshinkai" target="_blank">Facebook</Link>
            <Link href="https://www.instagram.com/aikidohonshinkai" target="_blank">Instagram</Link>
          </div>
        </div>
        <Link href="/join-us" className={styles.joinButton}>Join Us Now!</Link>
      </div>
    </nav>
  )
} 