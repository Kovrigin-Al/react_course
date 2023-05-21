import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNameFromLocalStorage } from "../localStorage/localStorageAPI";


export interface authState {
    isAuth: boolean;
    name: string;
}

const initialState: authState = {
    isAuth: !!(getNameFromLocalStorage() ?? false),
    name: getNameFromLocalStorage() || ''
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
            state.isAuth = true;
        },
    },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
