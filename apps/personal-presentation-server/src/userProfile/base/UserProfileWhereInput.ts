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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ExperienceListRelationFilter } from "../../experience/base/ExperienceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProjectListRelationFilter } from "../../project/base/ProjectListRelationFilter";
import { SocialLinkListRelationFilter } from "../../socialLink/base/SocialLinkListRelationFilter";

@InputType()
class UserProfileWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  bio?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ExperienceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ExperienceListRelationFilter)
  @IsOptional()
  @Field(() => ExperienceListRelationFilter, {
    nullable: true,
  })
  experiences?: ExperienceListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phone?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  photo?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => ProjectListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProjectListRelationFilter)
  @IsOptional()
  @Field(() => ProjectListRelationFilter, {
    nullable: true,
  })
  projects?: ProjectListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SocialLinkListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SocialLinkListRelationFilter)
  @IsOptional()
  @Field(() => SocialLinkListRelationFilter, {
    nullable: true,
  })
  socialLinks?: SocialLinkListRelationFilter;
}

export { UserProfileWhereInput as UserProfileWhereInput };
