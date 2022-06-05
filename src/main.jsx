import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SocketContextProvider from "./context/socket-provider";
import MainProvider from "./context/MainProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <MainProvider>
        <SocketContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SocketContextProvider>
    </MainProvider>
    // </React.StrictMode>
);
