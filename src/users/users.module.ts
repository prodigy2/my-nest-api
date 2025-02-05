import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { Post } from '../posts/post.entity'; // Aggiungi l'importazione dell'entità Post

@Module({
  imports: [TypeOrmModule.forFeature([User,Post])], // Assicurati che il repository sia registrato
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Esporta il servizio se serve in altri moduli
})
export class UsersModule {}
