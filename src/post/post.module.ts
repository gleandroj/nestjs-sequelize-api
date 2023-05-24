import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './post.model';
import { PostService } from './post.service';

@Module({
  imports: [SequelizeModule.forFeature([Post])],
  providers: [PostService],
})
export class PostModule {}
