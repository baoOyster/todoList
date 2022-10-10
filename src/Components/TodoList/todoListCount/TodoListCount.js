//This is a child of TodoList.js 
//which duty is counting the number of task left
//And show some filter to filter the task as the user want
import { selectLengthCount, deleteCompleted, selectTodoList } from "../../Todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { onCompleted, onAll, onActive, selectOnShowState } from "./todoListShowSlice";

export const TodoListCount = () => {
    const dispatch = useDispatch();
    const showState = useSelector(selectOnShowState);
    const remainTask = useSelector(selectLengthCount);
    const allTodo = useSelector(selectTodoList); 

    const deleteCompletedTask = () => {
        dispatch(deleteCompleted());
        console.log(allTodo);
    }

    const selectAll = () => {
        dispatch(onAll());
    }

    const selectActive = () => {
        dispatch(onActive());
    }

    const selectCompleted = () => {
        dispatch(onCompleted());
    }

    return (
        <div className="todoListCount">
            <p className="gray">{remainTask} items left</p>
            <div className="showTodo">
                <p onClick={selectAll} className={showState.mode === "all" ? "gray selectBtn selected" : "gray selectBtn"}>All</p>
                <p onClick={selectActive} className={showState.mode === "active" ? "gray selectBtn selected" : "gray selectBtn"}>Active</p>
                <p onClick={selectCompleted} className={showState.mode === "completed" ? "gray selectBtn selected" : "gray selectBtn"}>Completed</p>
            </div>
            <p className="gray selectBtn" onClick={deleteCompletedTask}>Clear Completed</p>
        </div>
    )
}