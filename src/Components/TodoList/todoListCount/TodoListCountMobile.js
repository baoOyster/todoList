//This is a child of TodoList.js 
//which duty is counting the number of task left
//And show some filter to filter the task as the user want
//This is for mobile version

import { useDispatch, useSelector } from "react-redux";
import { selectAppColorChange } from "../../App/appColorChangeSlice";
import { onCompleted, onAll, onActive, selectOnShowState } from "./todoListShowSlice";

export const TodoListCountMobile = () => {
    const dispatch = useDispatch();
    const showState = useSelector(selectOnShowState);
    const showTodoMobile = document.getElementById("showTodoMobile");
    const backgroundState = useSelector(selectAppColorChange);
    const changeBackgroundState = async () => {
        if(backgroundState){
            showTodoMobile.style.backgroundColor = "#fff";
        }
        else{
            showTodoMobile.style.backgroundColor = "hsl(235, 24%, 19%)";
        }
    }
    changeBackgroundState();

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
        <div className="showTodoMobile" id="showTodoMobile">
                <p onClick={selectAll} className={showState.mode === "all" ? "gray selectBtn selected" : "gray selectBtn"}>All</p>
                <p onClick={selectActive} className={showState.mode === "active" ? "gray selectBtn selected" : "gray selectBtn"}>Active</p>
                <p onClick={selectCompleted} className={showState.mode === "completed" ? "gray selectBtn selected" : "gray selectBtn"}>Completed</p>
        </div>
    )
}