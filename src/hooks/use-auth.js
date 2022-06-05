import React from "react";
import MainContext from "../context/main-context";


export default function useAuth() {
    const mainCtx = React.useContext(MainContext);
  
    return mainCtx.user ? mainCtx.user : null;
}
