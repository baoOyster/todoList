import './Todo.css';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoInput } from '../TodoInput/TodoInput';
import { TodoList } from '../TodoList/TodoList';

export function Todo(){

    
    return (
        <div id='todoDiv'>
            <TodoHeader />
            <TodoInput />
            <TodoList />
        </div>
    )
}