import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import './global.css'
import styles from './App.module.css'

const posts = [{
  id: 1,
  author: {
    name: 'Bruno Silva',
    avatarUrl: 'https://avatars.githubusercontent.com/u/86797184?v=4',
    points: 12,
    role: 'admin'
  },
  content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates iusto repellendus odio ab quibusdam, et natus distinctio cupiditate deleniti suscipit fugiat iure earum eum omnis aspernatur sequi optio nulla quis.',
  publishedAt: new Date(),
},
{
  id: 2,
  author: {
    name: 'Bruno Silva',
    avatarUrl: 'https://avatars.githubusercontent.com/u/86797184?v=4',
    points: 12,
    role: 'admin'
  },
  content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates iusto repellendus odio ab quibusdam, et natus distinctio cupiditate deleniti suscipit fugiat iure earum eum omnis aspernatur sequi optio nulla quis.',
  publishedAt: new Date(),
}
]

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
