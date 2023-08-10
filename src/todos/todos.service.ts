import { Injectable, Inject } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { CollectionReference, Timestamp } from '@google-cloud/firestore';
import { TodoDocument } from './documents/todos.document';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @Inject(TodoDocument.collectionName)
    private todosCollection: CollectionReference<TodoDocument>,
  ) {}

  async createTodo(createTodoDto: CreateTodoDto): Promise<TodoDocument> {
    const docRef = this.todosCollection.doc(createTodoDto.name);
    const dueDateMillis = dayjs(createTodoDto.dueDate).valueOf();
    await docRef.set({
      name: createTodoDto.name,
      dueDate: Timestamp.fromMillis(dueDateMillis),
    });
    const todoDoc = await docRef.get();
    const todo = todoDoc.data();
    return todo;
  }

  async findAll(): Promise<TodoDocument[]> {
    const snapshot = await this.todosCollection.get();
    const todos: TodoDocument[] = [];
    snapshot.forEach((doc) => todos.push(doc.data()));
    return todos;
  }
}
