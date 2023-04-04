import styles from './header.module.css'
import igniteLogo from '../assets/images/logo.png'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo" className={styles.logo} />
      <strong>LIGA POKEMON CE</strong>
    </header>
  )
}