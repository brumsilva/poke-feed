import { Coments } from './Coments'
import { ComentList } from './ComentList'

import styles from './Post.module.css'
import imgProfile from '../assets/images/perfil-img.jpg'
export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img src={imgProfile} className={styles.avatar} alt='avatar' />
          <div className={styles.authorInfo}>
            <strong>Bruno Silva</strong>
            <span>12 league points</span>
          </div>
        </div>

        <time dateTime=''>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates iusto repellendus odio ab quibusdam, et natus distinctio cupiditate deleniti suscipit fugiat iure earum eum omnis aspernatur sequi optio nulla quis.</p>

        <p><a href="#">#miraidon #melhorpokemon</a></p>
      </div>

      <Coments />
      <div className={styles.commentList}>
        <ComentList />
      </div>
    </article>
  )
}