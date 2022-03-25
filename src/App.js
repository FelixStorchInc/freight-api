import * as React from "react";
import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import MyLayout from "./MyLayout";
import customRoutes from "./customRoutes";
import authProvider from "./authProvider";
import configData from "./config.json";

//const dataProvider = simpleRestProvider('http://10.30.30.13:8000/');
const dataProvider = simpleRestProvider(configData.apiUrl);
const App = () => (
    <Admin authProvider={authProvider} customRoutes={customRoutes} layout={MyLayout} dataProvider={dataProvider}
           disableTelemetry>
    </Admin>
);

export default App;

/*
        <Resource name="scan_confirm" list={ListGuesser} edit={EditGuesser} options={{ label: "Scan Confirm" }} />
 */