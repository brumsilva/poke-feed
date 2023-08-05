export class Post {
    id: number;
    author: {
      avatarUrl: string,
      points: number,
      name: string,
      role: string
    };
    content: string;
    publishedAt: Date;
}