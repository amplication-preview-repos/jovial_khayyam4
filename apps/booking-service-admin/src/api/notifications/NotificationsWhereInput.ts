import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationsWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  typeField?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
