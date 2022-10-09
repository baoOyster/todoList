import './Header.css';
import { useSelector } from 'react-redux';
import { selectAppColorChange } from '../App/appColorChangeSlice';
import DarkDesktop from '../../images/bg-desktop-dark.jpg';
import LightDesktop from '../../images/bg-desktop-light.jpg';

export function Header() {
    const backgroundImage = useSelector(selectAppColorChange); 

    return (
        <div className="header" style={backgroundImage ? {backgroundImage: `url(${LightDesktop})`} : {backgroundImage: `url(${DarkDesktop}`}}></div>
    )
}