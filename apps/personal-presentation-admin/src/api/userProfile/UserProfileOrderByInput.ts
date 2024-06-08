import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  photo?: SortOrder;
  updatedAt?: SortOrder;
};
