import { BookingsUpdateManyWithoutUsersInput } from "./BookingsUpdateManyWithoutUsersInput";
import { NotificationsUpdateManyWithoutUsersInput } from "./NotificationsUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bookingsItems?: BookingsUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  notificationsItems?: NotificationsUpdateManyWithoutUsersInput;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
