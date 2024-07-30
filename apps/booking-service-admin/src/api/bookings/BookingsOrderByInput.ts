import { SortOrder } from "../../util/SortOrder";

export type BookingsOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  serviceId?: SortOrder;
  specialistId?: SortOrder;
  status?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
