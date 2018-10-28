import React from "react";
import { Provider } from "react-redux";
import getStore from "./store";
import AppNavigator from './routers';

export default function Root() {
    return (
        <Provider store={getStore}>
            <AppNavigator />
        </Provider>
    );
}
