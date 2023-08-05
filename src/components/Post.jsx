import { Coments } from './Coments'
import { ComentList } from './ComentList'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
export function Post({ author, content, publishedAt }) {
  const publishedDateFormated = format(publishedAt, "dd LLLL 'às' HH:mm'h'", {
    locale: ptBr
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img src={author.avatarUrl} className={styles.avatar} alt='avatar' />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.points} league points</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>Publicado {publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        <p>{content}</p>

        <p><a href="#">#miraidon #melhorpokemon</a></p>
      </div>

      <Coments />
      <div className={styles.commentList}>
        <ComentList />
      </div>
    </article>
  )
}