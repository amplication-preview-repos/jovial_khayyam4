import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SERVICES_TITLE_FIELD } from "../services/ServicesTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BookingsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="service_"
          source="services.id"
          reference="Services"
        >
          <TextField source={SERVICES_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="specialist_id" source="specialistId" />
        <TextField label="status" source="status" />
        <TextField label="time" source="time" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user_" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
