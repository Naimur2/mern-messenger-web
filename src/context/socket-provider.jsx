import React from "react";
import SocketContext from "./socket-context";
import { io } from "socket.io-client";
import config from "../config";

const defaultState = {
    socket: null,
    error: null,
};

const reducer = (state, { type, payload }) => {
    const sanType = type.toUpperCase();

    switch (sanType) {
        case "UPDATE_STATE":
            return { ...state, ...payload };
        case "error":
            return { ...state, error: payload };
        case "clear":
            return { ...defaultSocket };
        default:
            return state;
    }
};

const SocketContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, defaultState);

    const values = React.useMemo(() => {
        const setSocket = () => {
            const socket = io(config.API_ADDRESS, {
                transports: ["websocket"],
            });

            socket.on("connect", () => {
                console.log("connected");
            });

            dispatch({ type: "UPDATE_STATE", payload: { socket } });
        };

        return {
            socket: state.socket,
            updateState: (payload) =>
                dispatch({ type: "UPDATE_STATE", payload }),
            setSocket,
        };
    });

    return (
        <SocketContext.Provider value={values}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;
