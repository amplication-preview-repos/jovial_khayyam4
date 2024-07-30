import { Services } from "../services/Services";
import { User } from "../user/User";

export type Bookings = {
  createdAt: Date;
  date: Date | null;
  id: string;
  service?: Services | null;
  specialistId: string | null;
  status: string | null;
  time: Date | null;
  updatedAt: Date;
  user?: User | null;
};
