import { createSlice } from "@reduxjs/toolkit";

export const selectOnShowState = state => state.todoListShow;

const todoListShowSlice = createSlice({
    name: "todoListShow",
    initialState: {
        mode: "all"
    },
    reducers: {
        onAll: state => {
            state.mode = "all";
        },
        onActive: state => {
            state.mode = "active";
        },
        onCompleted: state => {
            state.mode = "completed";
        }
    }
})

export const { onAll, onActive, onCompleted }= todoListShowSlice.actions;
export default todoListShowSlice.reducer;