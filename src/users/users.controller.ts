import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { User } from './user.entity';

@ApiTags('users') // Raggruppa le API sotto "users" in Swagger
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @ApiOperation({ summary: 'Registra un nuovo utente' })
  @ApiResponse({ status: 201, description: 'Utente creato con successo', type: User })
  @ApiResponse({ status: 400, description: 'Dati non validi' })
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Ottieni tutti gli utenti' })
  @ApiResponse({ status: 200, description: 'Lista degli utenti', type: [User] })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Ottieni un utente per ID' })
  @ApiResponse({ status: 200, description: 'Utente trovato', type: User })
  @ApiResponse({ status: 404, description: 'Utente non trovato' })
  @ApiParam({ name: 'id', type: Number, description: 'ID dell\'utente' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOneById(+id);
  }
}
