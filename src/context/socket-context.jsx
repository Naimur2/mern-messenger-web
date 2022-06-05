import React from "react";

const SocketContext = React.createContext({
    socket: null,
    updateState: () => {},
    error: null,
    clear: () => {},
    setError: () => {},
    setSocket: () => {},
});

export default SocketContext;
