import { createSlice } from '@reduxjs/toolkit';

const defaults = {
    user: {
        name: '',
        email: '',
        isLoggedIn: false,
    },
}


const userSlice = createSlice({
    name: 'user',
    initialState: defaults,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const userActions = userSlice.actions;


const userReducer = userSlice.reducer;
export default userReducer; 