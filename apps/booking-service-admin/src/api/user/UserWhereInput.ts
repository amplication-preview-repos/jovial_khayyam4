import { BookingsListRelationFilter } from "../bookings/BookingsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationsListRelationFilter } from "../notifications/NotificationsListRelationFilter";

export type UserWhereInput = {
  bookingsItems?: BookingsListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  notificationsItems?: NotificationsListRelationFilter;
  phone?: StringNullableFilter;
  username?: StringFilter;
};
