import style from './style.module.css';
import logo_black from '../../images/logo_black.svg';
import logo_white from '../../images/logo_white.svg';
import { ColorImg } from '../ColorImg/ColorImg';
// import share_btn from '../../pr/share_btn.png';
import {ButtonShare} from '../../components/ButtonShare/ButtonShare';

export const LeftPanel = () => {
    return (
        <div className={style.panelWrapper}>
            <div className={style.panelElem}>
            <ColorImg src_white={logo_black} src_dark={logo_white} alt="logo_main"/>
                
            </div>
            <div className={style.panelElem}>
                <ButtonShare />
               
            </div>
        </div>
    )
}                       