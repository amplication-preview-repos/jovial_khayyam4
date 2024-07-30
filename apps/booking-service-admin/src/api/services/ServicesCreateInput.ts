import { BookingsCreateNestedManyWithoutServicesItemsInput } from "./BookingsCreateNestedManyWithoutServicesItemsInput";

export type ServicesCreateInput = {
  bookingsItems?: BookingsCreateNestedManyWithoutServicesItemsInput;
  categoryId?: string | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
};
