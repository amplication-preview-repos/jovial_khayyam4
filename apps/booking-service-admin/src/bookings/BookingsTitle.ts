import { Bookings as TBookings } from "../api/bookings/Bookings";

export const BOOKINGS_TITLE_FIELD = "specialistId";

export const BookingsTitle = (record: TBookings): string => {
  return record.specialistId?.toString() || String(record.id);
};
