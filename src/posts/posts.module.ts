import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])], // Assicura che il repository sia registrato
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService], // Esporta il servizio se serve in altri moduli
})
export class PostsModule {}
