/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExperienceWhereInput } from "./ExperienceWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ExperienceCountArgs {
  @ApiProperty({
    required: false,
    type: () => ExperienceWhereInput,
  })
  @Field(() => ExperienceWhereInput, { nullable: true })
  @Type(() => ExperienceWhereInput)
  where?: ExperienceWhereInput;
}

export { ExperienceCountArgs as ExperienceCountArgs };