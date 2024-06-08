import { SortOrder } from "../../util/SortOrder";

export type SocialLinkOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  platform?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  userProfileId?: SortOrder;
};
