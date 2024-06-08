import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="url" source="url" />
        <ReferenceInput
          source="userProfile.id"
          reference="UserProfile"
          label="UserProfile"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
