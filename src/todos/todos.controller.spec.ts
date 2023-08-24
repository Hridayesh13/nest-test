import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { CollectionReference, Firestore } from '@google-cloud/firestore';
import { TodoDocument } from './documents/todos.document';

describe('TodosController', () => {
  let todosController: TodosController;
  let todosService: TodosService;
  let todosCollection: CollectionReference<TodoDocument>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosService],
    }).compile();

    todosService = moduleRef.get<TodosService>(TodosService);
    todosController = moduleRef.get<TodosController>(TodosController);
  });

  describe('findAll', () => {
    it('should return an array of todos', async () => {
      const result = [
        {
          dueDate: {
            _seconds: 1548381600,
            _nanoseconds: 0,
          },
          name: 'create test',
        },
        {
          name: 'test',
          dueDate: {
            _seconds: 1691766000,
            _nanoseconds: 410000000,
          },
        },
      ];

      expect(await todosController.findAll()).toBe(result);
    });
  });
});
