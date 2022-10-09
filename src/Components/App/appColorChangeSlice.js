import { createSlice } from "@reduxjs/toolkit";

export const selectAppColorChange = state => state.appColorChange.lightMode;

const appColorChangeSlice = createSlice({
    name: 'appColorChange',
    initialState: {lightMode: true},
    reducers: {
        changeState: state => {
            state.lightMode = state.lightMode ? false : true;
        }
    }
});

export const { changeState } = appColorChangeSlice.actions;
export default appColorChangeSlice.reducer;