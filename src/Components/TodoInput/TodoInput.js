import Box from '../../images/circle-regular.svg';
import { addTodo } from '../Todo/todoSlice'; 
import { useDispatch, useSelector } from 'react-redux';
import { selectAppColorChange } from '../App/appColorChangeSlice';

export const TodoInput = () => {
    const dispatch = useDispatch();
    let idCounter = 0;

    const todoInput = document.getElementById('todoInput');
    const backgroundState = useSelector(selectAppColorChange);
    const missionInput = document.getElementById('missionInput');
    // if(backgroundState){
    //     todoInput.style.backgroundColor = '#fff';
    //     missionInput.style.backgroundColor = '#fff';
    //     missionInput.style.color = "black";
    //   }else{
    //     todoInput.style.backgroundColor = 'hsl(235, 24%, 19%)';
    //     missionInput.style.backgroundColor = 'hsl(235, 24%, 19%)';
    //     missionInput.style.color = "#fff";
    //   }

    const createTodo = (text) => { //sent todo to the store for rendering to mission later 
        dispatch(addTodo({
            text: text, 
            done: false,
            id: idCounter + 1
        }));
        idCounter += 1;
    }

    return (
        <div className="todo-input todo-check" id='todoInput'>
            <img className='button-check' src={Box} alt='box'/>
            <input className='mission' 
            id='missionInput'
            type="text" placeholder="Create a new todo..."            
            onKeyDown={e => {
                if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
                    createTodo(e.target.value);
                }
            }} />
        </div>
    )
}