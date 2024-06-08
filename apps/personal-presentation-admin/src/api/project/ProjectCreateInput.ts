import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ProjectCreateInput = {
  description?: string | null;
  name?: string | null;
  url?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
