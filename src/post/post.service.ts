import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import axios from 'axios';
import { Post } from './post.model';

@Injectable()
export class PostService implements OnModuleInit {
  constructor(@InjectModel(Post) private postsRepository: typeof Post) {}

  public async seed() {
    const count = await this.postsRepository.count();
    console.log('Posts count: ', count);
    if (count > 0) {
      return;
    }
    console.log('Seeding posts...');
    const posts = await this.fetchPosts();
    console.log('Posts fetched: ', posts.length);
    return await this.postsRepository.bulkCreate(posts);
  }

  private async fetchPosts() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      return response.data;
    } catch (e) {
      console.log('Error fetching posts: ', e);
      console.log(e);
    }
  }

  onModuleInit() {
    this.seed().then(() => {
      console.log('The posts have been seeded.');
    });
    console.log('The module has been initialized.');
  }
}
