/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExperienceWhereInput } from "./ExperienceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ExperienceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ExperienceWhereInput,
  })
  @ValidateNested()
  @Type(() => ExperienceWhereInput)
  @IsOptional()
  @Field(() => ExperienceWhereInput, {
    nullable: true,
  })
  every?: ExperienceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExperienceWhereInput,
  })
  @ValidateNested()
  @Type(() => ExperienceWhereInput)
  @IsOptional()
  @Field(() => ExperienceWhereInput, {
    nullable: true,
  })
  some?: ExperienceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExperienceWhereInput,
  })
  @ValidateNested()
  @Type(() => ExperienceWhereInput)
  @IsOptional()
  @Field(() => ExperienceWhereInput, {
    nullable: true,
  })
  none?: ExperienceWhereInput;
}
export { ExperienceListRelationFilter as ExperienceListRelationFilter };