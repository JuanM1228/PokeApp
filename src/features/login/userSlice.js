import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    username: '',
}

const userSlice = createSlice({
    name: 'username',
    initialState,
    reducers: {
        changeUsername: (state,action) => {
            state.username = action.payload
        }
    }
});

export const {changeUsername} = userSlice.actions;
export default userSlice.reducer