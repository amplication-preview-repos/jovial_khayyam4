import { Bookings } from "../bookings/Bookings";

export type Services = {
  bookingsItems?: Array<Bookings>;
  categoryId: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
