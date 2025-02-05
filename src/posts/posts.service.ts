import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from '../users/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postsRepository.find({ relations: ['user'] });
  }

  async createPost(createPostDto: CreatePostDto, user: User): Promise<Post> {
    const post = this.postsRepository.create({ ...createPostDto, user });
    return this.postsRepository.save(post);
  }

  async updatePost(id: number, text: string, user: User): Promise<Post> {
    const post = await this.postsRepository.findOne({ where: { id }, relations: ['user'] });
    if (!post) throw new NotFoundException('Post not found');
    if (post.user.id !== user.id) throw new ForbiddenException('Not authorized');

    post.text = text;
    return this.postsRepository.save(post);
  }

  async deletePost(id: number, user: User): Promise<void> {
    const post = await this.postsRepository.findOne({ where: { id }, relations: ['user'] });
    if (!post) throw new NotFoundException('Post not found');
    if (post.user.id !== user.id) throw new ForbiddenException('Not authorized');

    await this.postsRepository.delete(id);
  }
}
