import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import coverImg from '../assets/images/cover-image.jpg'
import profileImg from '../assets/images/perfil-img.jpg'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverImg} alt="Logo" />

      <div className={styles.profile}>
        <img className={styles.avatar} src={profileImg} alt='LOGO' />
        <strong>Bruno Silva</strong>
        <span>12 league points</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20}/>
          Editar Perfil
        </a>
      </footer>
    </aside>
  )
}