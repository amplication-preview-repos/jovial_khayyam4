import { BookingsUpdateManyWithoutServicesItemsInput } from "./BookingsUpdateManyWithoutServicesItemsInput";

export type ServicesUpdateInput = {
  bookingsItems?: BookingsUpdateManyWithoutServicesItemsInput;
  categoryId?: string | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
};
