import style from './style.module.css';
import logo from '../../images/logo_black.svg';
import share_btn from '../../images/share_btn.png';

export const LeftPanel = () => {
    return (
        <div className={style.panelWrapper}>
            <div className={style.panelElem}>
                <img src={logo} alt="logo"/>
                {/* <img src="https://sun9-north.userapi.com/sun9-80/s/v1/ig2/lH33LQNF0fkz8rOieWtgmnfiQqpqvqP20iWEtjLwBQ8Uxg42SeFQrG3HfY8YPw5iq1JcoBaHud51XZ9nHD913PvL.jpg?size=51x218&quality=95&type=album" alt="arrow" /> */}
            </div>
            <div className={style.panelElem}>
                <img src={share_btn} alt="share" />
                {/* <img src="https://sun9-west.userapi.com/sun9-4/s/v1/ig2/MvguTNzoC0_13GhSerJ-ITBmxAA855QFBFt_N2BsEfEaPILwDvV7071RGu-1JdS6lQj7q-4Vknf3TYNnvFPd8bkb.jpg?size=55x333&quality=95&type=album" alt="share button" /> */}
            </div>
        </div>
    )
}                       