import { UserProfile } from "../userProfile/UserProfile";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  url: string | null;
  userProfile?: UserProfile | null;
};
