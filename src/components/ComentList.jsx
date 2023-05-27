import styles from './ComentList.module.css'

import imgProfile from '../assets/images/perfil-img.jpg'
import { Trash } from 'phosphor-react'
import { HandsClapping } from 'phosphor-react'
import { Avatar } from './Avatar'

export function ComentList() {

  return (
    <div className={styles.comentList}>
      <div className={styles.author}>
        <Avatar hasBorder={false} src={imgProfile}/>
      </div>
      <div className={styles.comentBox}>
      <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruno Silva</strong>
              <time dateTime=''>Publicado há 1h</time>
            </div>

            <button title='Deletar Comentário' className={styles.delBtn}>
            <Trash size={20} />
            </button>
          </header>

          <p>Muito Bom, parabens!</p>
      </div>
      <footer>
          <button>
          <HandsClapping size={24} />
            Aplaudir <span>20</span>
          </button>
      </footer>
      </div>
    </div>
  )
}