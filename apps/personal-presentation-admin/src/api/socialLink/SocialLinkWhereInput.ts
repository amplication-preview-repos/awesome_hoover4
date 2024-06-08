import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SocialLinkWhereInput = {
  id?: StringFilter;
  platform?: StringNullableFilter;
  url?: StringNullableFilter;
  userProfile?: UserProfileWhereUniqueInput;
};
