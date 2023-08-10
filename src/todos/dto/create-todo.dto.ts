import { Timestamp } from '@google-cloud/firestore';

export class CreateTodoDto {
  name: string;
  dueDate: string;
}
