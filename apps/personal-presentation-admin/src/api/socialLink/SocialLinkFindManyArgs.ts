import { SocialLinkWhereInput } from "./SocialLinkWhereInput";
import { SocialLinkOrderByInput } from "./SocialLinkOrderByInput";

export type SocialLinkFindManyArgs = {
  where?: SocialLinkWhereInput;
  orderBy?: Array<SocialLinkOrderByInput>;
  skip?: number;
  take?: number;
};
