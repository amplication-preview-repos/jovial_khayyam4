import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ServicesTitle } from "../services/ServicesTitle";
import { UserTitle } from "../user/UserTitle";

export const BookingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
