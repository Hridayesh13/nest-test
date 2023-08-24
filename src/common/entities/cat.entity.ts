import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Post } from 'src/common/entities/post.entity';

@ObjectType()
export class Cat {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  title: string;

  @Field(() => [Post], { nullable: 'items' })
  post?: [Post] | null;
}
