import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const SocialLinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
