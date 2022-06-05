import React from "react";
import { Route, Routes } from "react-router-dom";
import SocketContext from "./context/socket-context";
import { Login } from "./screens";
import NotFound from "./screens/404";
import Register from "./screens/register/register";

export default function App() {
    const [user, setUser] = React.useState(null);
    const socketCtx = React.useContext(SocketContext);

    React.useEffect(() => {
        socketCtx.setSocket();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
