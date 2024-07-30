import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingsWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  service?: ServicesWhereUniqueInput;
  specialistId?: StringNullableFilter;
  status?: StringNullableFilter;
  time?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
