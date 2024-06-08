import { ExperienceUpdateManyWithoutUserProfilesInput } from "./ExperienceUpdateManyWithoutUserProfilesInput";
import { InputJsonValue } from "../../types";
import { ProjectUpdateManyWithoutUserProfilesInput } from "./ProjectUpdateManyWithoutUserProfilesInput";
import { SocialLinkUpdateManyWithoutUserProfilesInput } from "./SocialLinkUpdateManyWithoutUserProfilesInput";

export type UserProfileUpdateInput = {
  bio?: string | null;
  email?: string | null;
  experiences?: ExperienceUpdateManyWithoutUserProfilesInput;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  photo?: InputJsonValue;
  projects?: ProjectUpdateManyWithoutUserProfilesInput;
  socialLinks?: SocialLinkUpdateManyWithoutUserProfilesInput;
};
