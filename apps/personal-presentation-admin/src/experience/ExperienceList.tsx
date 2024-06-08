import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const ExperienceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Experiences"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="startDate" source="startDate" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="UserProfile"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
