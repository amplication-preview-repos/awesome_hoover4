import { SortOrder } from "../../util/SortOrder";

export type ExperienceOrderByInput = {
  company?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userProfileId?: SortOrder;
};
