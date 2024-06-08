import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserProfileList } from "./userProfile/UserProfileList";
import { UserProfileCreate } from "./userProfile/UserProfileCreate";
import { UserProfileEdit } from "./userProfile/UserProfileEdit";
import { UserProfileShow } from "./userProfile/UserProfileShow";
import { SocialLinkList } from "./socialLink/SocialLinkList";
import { SocialLinkCreate } from "./socialLink/SocialLinkCreate";
import { SocialLinkEdit } from "./socialLink/SocialLinkEdit";
import { SocialLinkShow } from "./socialLink/SocialLinkShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { ExperienceList } from "./experience/ExperienceList";
import { ExperienceCreate } from "./experience/ExperienceCreate";
import { ExperienceEdit } from "./experience/ExperienceEdit";
import { ExperienceShow } from "./experience/ExperienceShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PersonalPresentation"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserProfile"
          list={UserProfileList}
          edit={UserProfileEdit}
          create={UserProfileCreate}
          show={UserProfileShow}
        />
        <Resource
          name="SocialLink"
          list={SocialLinkList}
          edit={SocialLinkEdit}
          create={SocialLinkCreate}
          show={SocialLinkShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Experience"
          list={ExperienceList}
          edit={ExperienceEdit}
          create={ExperienceCreate}
          show={ExperienceShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
