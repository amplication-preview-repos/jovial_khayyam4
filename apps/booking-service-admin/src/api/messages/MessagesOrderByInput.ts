import { SortOrder } from "../../util/SortOrder";

export type MessagesOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  receiverId?: SortOrder;
  senderId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
