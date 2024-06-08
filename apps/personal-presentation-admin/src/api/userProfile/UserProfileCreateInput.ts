import { ExperienceCreateNestedManyWithoutUserProfilesInput } from "./ExperienceCreateNestedManyWithoutUserProfilesInput";
import { InputJsonValue } from "../../types";
import { ProjectCreateNestedManyWithoutUserProfilesInput } from "./ProjectCreateNestedManyWithoutUserProfilesInput";
import { SocialLinkCreateNestedManyWithoutUserProfilesInput } from "./SocialLinkCreateNestedManyWithoutUserProfilesInput";

export type UserProfileCreateInput = {
  bio?: string | null;
  email?: string | null;
  experiences?: ExperienceCreateNestedManyWithoutUserProfilesInput;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  photo?: InputJsonValue;
  projects?: ProjectCreateNestedManyWithoutUserProfilesInput;
  socialLinks?: SocialLinkCreateNestedManyWithoutUserProfilesInput;
};
