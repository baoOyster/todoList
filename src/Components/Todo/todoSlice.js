//This file will store all the state of todo list
//Daily life mission or sth else you want to type in or include in

import { createSlice } from "@reduxjs/toolkit";


export const selectTodoList = state => state.todoCreator;
export const selectLengthCount = state => state.todoCreator.length;
// export const selectDoneChecking = state

const todoCreatorSlice = createSlice({
    name: "todoCreator",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        stateChangeTodo: (state, action) => {
            state = state.map(todo => {
                if(todo.id === action.payload) {
                    todo.done = todo.done ? false : true;
                }
            });
        },
        deleteAll: state => state = [],
    }
})

export const { addTodo, stateChangeTodo } = todoCreatorSlice.actions;
export default todoCreatorSlice.reducer;