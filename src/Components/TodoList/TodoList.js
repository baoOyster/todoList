import { useSelector, useDispatch } from "react-redux";
import { selectTodoList, stateChangeTodo } from "../Todo/todoSlice";

import Box from "../../images/circle-regular.svg";
import BoxDone from "../../images/circle-check-regular.svg";
import './TodoList.css';
import { TodoListCount } from "./todoListCount/TodoListCount";

export function TodoList(){
    const todoList = useSelector(selectTodoList);
    const dispatch = useDispatch();

    let key = 0
    return (
        <div className="todoList todoTask">
            {todoList.map(task => {
                key += 1;
                return(
                <div className="todo-check" 
                key={`task${key}`}
                onClick={() => {
                    dispatch(stateChangeTodo(task.id))
                }}>
                    <img src={task.done ? BoxDone : Box} alt="Tick Box"  
                    className="button-check"
                    />
                    <p className={task.done ? "mission missionDone" : "mission"}>{task.text}</p>
                </div>
                )
            }
            )}
            <TodoListCount />
        </div>
    )
}