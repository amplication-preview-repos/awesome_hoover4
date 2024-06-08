import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SocialLinkUpdateInput = {
  platform?: string | null;
  url?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
