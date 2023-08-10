import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoDocument } from './documents/todos.document';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async findAll() {
    return this.todosService.findAll();
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<TodoDocument> {
    return this.todosService.createTodo(createTodoDto);
  }
}
