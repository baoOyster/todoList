import { useSelector, useDispatch } from "react-redux";
import { selectTodoList, stateChangeTodo } from "../Todo/todoSlice";
import Box from "../../images/circle-regular.svg";
import BoxDone from "../../images/circle-check-regular.svg";
import './TodoList.css';
import { TodoListCount } from "./todoListCount/TodoListCountDesktop";
import { selectOnShowState } from "./todoListCount/todoListShowSlice";
import { selectAppColorChange } from "../App/appColorChangeSlice";

export function TodoList(){
    const todoList = useSelector(selectTodoList);
    const stateMode = useSelector(selectOnShowState)
    const dispatch = useDispatch();
    const backgroundState = useSelector(selectAppColorChange);
    let key = 0
    return (
        <div className="todoList todoTask">
            <div className={!backgroundState ? "taskList dark-mode" : "taskList"}>
                {stateMode.mode === "all" && todoList.map(task => {
                    key += 1;
                    return(
                    <div className={!backgroundState ? "todo-check fixBorder dark-mode" : "todo-check fixBorder"}
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
                        <div className={!backgroundState ? "todo-check fixBorder dark-mode" : "todo-check fixBorder"} 
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
                        <div className={!backgroundState ? "todo-check fixBorder dark-mode" : "todo-check fixBorder"}
                        key={`task${key}`}
                        onClick={() => {
                            dispatch(stateChangeTodo(task.id))
                        }}>
                            <img src={task.done ? BoxDone : Box} alt="Tick Box"  
                            className="button-check"
                            />
                            <p className={task.done ? "mission missionDone" : "mission "}>{task.text}</p>
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