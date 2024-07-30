import { User } from "../user/User";

export type Notifications = {
  content: string | null;
  createdAt: Date;
  id: string;
  status: string | null;
  typeField: string | null;
  updatedAt: Date;
  user?: User | null;
};
