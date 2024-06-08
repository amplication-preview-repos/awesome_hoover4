import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ExperienceCreateInput = {
  company?: string | null;
  description?: string | null;
  endDate?: Date | null;
  startDate?: Date | null;
  title?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
