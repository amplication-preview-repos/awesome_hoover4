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

export const SocialLinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="platform" source="platform" />
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
