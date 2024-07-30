import { Services as TServices } from "../api/services/Services";

export const SERVICES_TITLE_FIELD = "name";

export const ServicesTitle = (record: TServices): string => {
  return record.name?.toString() || String(record.id);
};
