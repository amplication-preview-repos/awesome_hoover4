import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SocialLinkCreateInput = {
  platform?: string | null;
  url?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
