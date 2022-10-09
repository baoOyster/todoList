import { configureStore } from '@reduxjs/toolkit';
import appColorChangeReducer from '../Components/App/appColorChangeSlice';
import todoCreatorReducer from '../Components/Todo/todoSlice'; 
import todoListShowReducer from '../Components/TodoList/todoListCount/todoListShowSlice';

export const store = configureStore({
  reducer: {
    appColorChange: appColorChangeReducer,
    todoCreator: todoCreatorReducer,
    todoListShow: todoListShowReducer
  },
});
