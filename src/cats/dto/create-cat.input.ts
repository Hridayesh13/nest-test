import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCatInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  title: string;
}
