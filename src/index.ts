import { Posts } from './api/posts';
import { Users } from './api/user';

export class Library {
  posts: Posts;
  users: Users;

  constructor(config: { apiKey: string; baseUrl?: string }) {
    this.posts = new Posts(config);
    this.users = new Users(config);
  }
}