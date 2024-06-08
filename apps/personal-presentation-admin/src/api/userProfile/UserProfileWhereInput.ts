import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExperienceListRelationFilter } from "../experience/ExperienceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { SocialLinkListRelationFilter } from "../socialLink/SocialLinkListRelationFilter";

export type UserProfileWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  experiences?: ExperienceListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  photo?: JsonFilter;
  projects?: ProjectListRelationFilter;
  socialLinks?: SocialLinkListRelationFilter;
};
