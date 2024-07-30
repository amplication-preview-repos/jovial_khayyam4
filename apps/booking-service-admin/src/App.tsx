import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CategoriesList } from "./categories/CategoriesList";
import { CategoriesCreate } from "./categories/CategoriesCreate";
import { CategoriesEdit } from "./categories/CategoriesEdit";
import { CategoriesShow } from "./categories/CategoriesShow";
import { BookingsList } from "./bookings/BookingsList";
import { BookingsCreate } from "./bookings/BookingsCreate";
import { BookingsEdit } from "./bookings/BookingsEdit";
import { BookingsShow } from "./bookings/BookingsShow";
import { ServicesList } from "./services/ServicesList";
import { ServicesCreate } from "./services/ServicesCreate";
import { ServicesEdit } from "./services/ServicesEdit";
import { ServicesShow } from "./services/ServicesShow";
import { MessagesList } from "./messages/MessagesList";
import { MessagesCreate } from "./messages/MessagesCreate";
import { MessagesEdit } from "./messages/MessagesEdit";
import { MessagesShow } from "./messages/MessagesShow";
import { NotificationsList } from "./notifications/NotificationsList";
import { NotificationsCreate } from "./notifications/NotificationsCreate";
import { NotificationsEdit } from "./notifications/NotificationsEdit";
import { NotificationsShow } from "./notifications/NotificationsShow";
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
        title={"BookingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Categories"
          list={CategoriesList}
          edit={CategoriesEdit}
          create={CategoriesCreate}
          show={CategoriesShow}
        />
        <Resource
          name="Bookings"
          list={BookingsList}
          edit={BookingsEdit}
          create={BookingsCreate}
          show={BookingsShow}
        />
        <Resource
          name="Services"
          list={ServicesList}
          edit={ServicesEdit}
          create={ServicesCreate}
          show={ServicesShow}
        />
        <Resource
          name="Messages"
          list={MessagesList}
          edit={MessagesEdit}
          create={MessagesCreate}
          show={MessagesShow}
        />
        <Resource
          name="Notifications"
          list={NotificationsList}
          edit={NotificationsEdit}
          create={NotificationsCreate}
          show={NotificationsShow}
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
