import './TodoHeader.css';
import Sun from '../../images/icon-sun.svg';
import Moon from '../../images/icon-moon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectAppColorChange, changeState } from '../App/appColorChangeSlice';

export function TodoHeader(){
    const dispatch = useDispatch();
    const buttonIconBool = useSelector(selectAppColorChange);
    function changeBackground () {
        dispatch(changeState());
    }
    return (
        <div className='todoHeader'>
            <h1>TODO</h1>
            <img className='changeColorButton' 
                src={buttonIconBool ? Sun : Moon} 
                onClick={changeBackground}
                alt='change_state_button'/>
        </div>
    )
}