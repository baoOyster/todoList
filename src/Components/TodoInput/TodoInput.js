import Box from '../../images/circle-regular.svg';
import { addTodo } from '../Todo/todoSlice'; 
import { useDispatch } from 'react-redux';

export const TodoInput = () => {
    const dispatch = useDispatch();
    let idCounter = 0;

    const createTodo = (text) => { //sent todo to the store for rendering to mission later 
        dispatch(addTodo({
            text: text, 
            done: false,
            id: idCounter + 1
        }));
        idCounter += 1;
    }


    return (
        <div className="todo-input todo-check">
            <img className='button-check' src={Box} alt='box'/>
            <input className='mission' 
            type="text" placeholder="Create a new todo..."            
            onKeyDown={e => {
                if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
                    createTodo(e.target.value);
                }
            }} />
        </div>
    )
}