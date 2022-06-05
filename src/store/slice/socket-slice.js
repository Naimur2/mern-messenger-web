import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";


const defaults = {
    socket: null,
}

const socketSlice = createSlice({
    name: 'socket',
    initialState: defaults,
    reducers: {
        setSocket: (state, action) => {
            state.socket = action.payload;
        }
    }
});

export const socketAction = socketSlice.actions;

const socketReducer = socketSlice.reducer;
export default socketReducer;

export const setSocket = () => {
    return (dispatch) => {
        const socket = io('http://localhost:7000', {
            withCredentials: true,
        });



        socket.on('connect', () => {
            console.log('connected');
        });

        console.log('socket', socket);



        dispatch(socketAction.setSocket({ soc: socket }));
    }
}
