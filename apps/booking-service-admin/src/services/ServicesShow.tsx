import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SERVICES_TITLE_FIELD } from "./ServicesTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ServicesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="category_id" source="categoryId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Bookings"
          target="serviceId"
          label="BookingsItems"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
