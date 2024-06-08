import { Experience } from "../experience/Experience";
import { JsonValue } from "type-fest";
import { Project } from "../project/Project";
import { SocialLink } from "../socialLink/SocialLink";

export type UserProfile = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  experiences?: Array<Experience>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  photo: JsonValue;
  projects?: Array<Project>;
  socialLinks?: Array<SocialLink>;
  updatedAt: Date;
};
