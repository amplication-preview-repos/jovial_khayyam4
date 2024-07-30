import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ServicesTitle } from "../services/ServicesTitle";
import { UserTitle } from "../user/UserTitle";

export const BookingsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <ReferenceInput
          source="service.id"
          reference="Services"
          label="service_"
        >
          <SelectInput optionText={ServicesTitle} />
        </ReferenceInput>
        <TextInput label="specialist_id" source="specialistId" />
        <TextInput label="status" source="status" />
        <DateTimeInput label="time" source="time" />
        <ReferenceInput source="user.id" reference="User" label="user_">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
