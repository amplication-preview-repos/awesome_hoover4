import { UserProfile } from "../userProfile/UserProfile";

export type Experience = {
  company: string | null;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
  userProfile?: UserProfile | null;
};
