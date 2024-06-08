import { UserProfile } from "../userProfile/UserProfile";

export type SocialLink = {
  createdAt: Date;
  id: string;
  platform: string | null;
  updatedAt: Date;
  url: string | null;
  userProfile?: UserProfile | null;
};
