import { createSlice } from "@reduxjs/toolkit";

export const selectOnShowState = state => state.todoListShow;

const todoListShowSlice = createSlice({
    name: "todoListShow",
    initialState: {
        all: true,
        active: false,
        completed: false
    },
    reducers: {
        onAll: state => {
            state.all = true;
            state.active = false;
            state.completed = false;
        },
        onActive: state => {
            state.all = false;
            state.active = true;
            state.completed = false;
        },
        onCompleted: state => {
            state.all = false;
            state.active = false;
            state.completed = true;
        }
    }
})

export const { onAll, onActive, onCompleted }= todoListShowSlice.actions;
export default todoListShowSlice.reducer;