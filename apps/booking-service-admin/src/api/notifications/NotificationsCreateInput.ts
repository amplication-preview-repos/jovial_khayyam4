import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationsCreateInput = {
  content?: string | null;
  status?: string | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
