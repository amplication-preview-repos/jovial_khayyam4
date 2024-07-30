import { Messages as TMessages } from "../api/messages/Messages";

export const MESSAGES_TITLE_FIELD = "receiverId";

export const MessagesTitle = (record: TMessages): string => {
  return record.receiverId?.toString() || String(record.id);
};
