import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/reducer";
import { PersistGate } from "redux-persist/integration/react";

require("dotenv").config();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
