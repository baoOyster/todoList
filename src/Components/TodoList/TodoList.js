import { useSelector, useDispatch } from "react-redux";
import { selectTodoList, stateChangeTodo } from "../Todo/todoSlice";
import Box from "../../images/circle-regular.svg";
import BoxDone from "../../images/circle-check-regular.svg";
import './TodoList.css';
import { TodoListCount } from "./todoListCount/TodoListCount";
import { selectOnShowState } from "./todoListCount/todoListShowSlice";

export function TodoList(){
    const todoList = useSelector(selectTodoList);
    const stateMode = useSelector(selectOnShowState)
    const dispatch = useDispatch();

    

    let key = 0
    return (
        <div className="todoList todoTask">
            <div className="taskList">
                {stateMode.mode === "all" && todoList.map(task => {
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
                {stateMode.mode === "active" && todoList.map(task => {
                    if(task.done === false){
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
                }
                )}
                {stateMode.mode === "completed" && todoList.map(task => {
                    if(task.done){
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
                }
                )}
            </div>
            <TodoListCount />
        </div>
    )
}