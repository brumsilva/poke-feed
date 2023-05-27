import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import { v4 as UUID } from 'uuid';
import styles from './App.module.css'
import './global.css'
// creating posts
const posts = [
    {
        id: UUID(),
        title: 'Post 1',
        author: {
            name: 'John Doe',
            avatarUrl: '',
            points: 1
        },
        content: [
            {
                type: 'paragraph',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.'

            },
            {
                type: 'link',
                content: 'https://www.google.com'
            }
        ],
        publicAt: new Date('2023-05-07 20:00:00')
    },
    {
        id: UUID(),
        title: 'Post 2',
        author: {
            name: 'John Doe',
            avatarUrl: '',
            points: 15
        },
        content: [
            {
                type: 'paragraph',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.'

            },
            {
                type: 'link',
                content: 'https://www.google.com'
            }
        ],
        publicAt: new Date('2023-05-10 20:00:00')
    },
    {
        id: UUID(),
        title: 'Post 3',
        author: {
            name: 'John Doe',
            avatarUrl: '',
            points: 16
        },
        content: [
            {
                type: 'paragraph',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.'

            },
            {
                type: 'link',
                content: 'https://www.google.com'
            }, {
                type: 'hastag',
                content: 'tecnology'
            }

        ],
        publicAt: new Date('2023-05-11 20:00:00')
    }];

export function App() {

  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
        <Sidebar />
        <main>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </main>
        </div>
    </div>
  )
}
