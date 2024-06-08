import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ExperienceWhereInput = {
  company?: StringNullableFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  userProfile?: UserProfileWhereUniqueInput;
};
