import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingsCreateInput = {
  date?: Date | null;
  service?: ServicesWhereUniqueInput | null;
  specialistId?: string | null;
  status?: string | null;
  time?: Date | null;
  user?: UserWhereUniqueInput | null;
};
