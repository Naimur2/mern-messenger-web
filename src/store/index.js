import { configureStore } from "@reduxjs/toolkit";
import socketReducer from "./slice/socket-slice";
import userReducer from "./slice/user-slice";


const store = configureStore({
    reducer: {
        user: userReducer,
        socket: socketReducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // // Ignore these action types
        // ignoredActions: ['your/action/type'],
        // // Ignore these field paths in all actions
        // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['action.payload.soc'],
      },
    }),
    
});

export default store;