import { Bookings } from "../bookings/Bookings";
import { Notifications } from "../notifications/Notifications";
import { JsonValue } from "type-fest";

export type User = {
  bookingsItems?: Array<Bookings>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  notificationsItems?: Array<Notifications>;
  phone: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
