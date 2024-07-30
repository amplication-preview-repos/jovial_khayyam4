import { BookingsCreateNestedManyWithoutUsersInput } from "./BookingsCreateNestedManyWithoutUsersInput";
import { NotificationsCreateNestedManyWithoutUsersInput } from "./NotificationsCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bookingsItems?: BookingsCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  notificationsItems?: NotificationsCreateNestedManyWithoutUsersInput;
  password: string;
  phone?: string | null;
  roles: InputJsonValue;
  username: string;
};
