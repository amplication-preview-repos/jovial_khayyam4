import { Notifications as TNotifications } from "../api/notifications/Notifications";

export const NOTIFICATIONS_TITLE_FIELD = "status";

export const NotificationsTitle = (record: TNotifications): string => {
  return record.status?.toString() || String(record.id);
};
