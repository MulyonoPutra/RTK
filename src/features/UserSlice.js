import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        name: '',
        email: '',
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
    },
});

export const { update } = userSlice.actions;

export default userSlice.reducer;
