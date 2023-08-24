import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Cat } from 'src/common/entities/cat.entity';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  content: string;

  @Field(() => Cat)
  author: Cat;

  @Field(() => Int)
  authorId: number;
}
