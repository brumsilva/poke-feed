import { Coments } from './Coments'
import { ComentList } from './ComentList'
import {format, formatDistanceToNow} from 'date-fns'

import styles from './Post.module.css'
import imgDefault from '../assets/images/logo.png'
import { Avatar } from './Avatar'
import ptBR from "date-fns/locale/pt-BR";
export function Post({post: {author, content, publicAt}}) {
    const formattedDate = format(publicAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })
    const publishedDateRelativeToNow = formatDistanceToNow(publicAt, {
        locale: ptBR,
        addSuffix: true
    })
  return <article className={styles.post}>
    <header className={styles.header}>
      <div className={styles.author}>
        <Avatar src={author.avatarUrl !== '' ? author.avatarUrl : imgDefault }/>
        <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.points} league points</span>
        </div>
      </div>

      <time title={formattedDate} dateTime='{publicAt.toISOString()}'>
          {publishedDateRelativeToNow}
      </time>
    </header>

    <div className={styles.content}>
        {
            content.map(line => {
                switch (line.type) {
                    case 'paragraph':
                        return <p>{line.content}</p>
                    case 'link':
                        return <p><a href={line.content}>{line.content}</a></p>
                    case 'hastag':
                        return <a href={`https://www.google.com/search?q=${line.content}`}>#{line.content}</a>
                }
            })
        }
    </div>

    <Coments />
    <div className={styles.commentList}>
      <ComentList />
    </div>
  </article>
}