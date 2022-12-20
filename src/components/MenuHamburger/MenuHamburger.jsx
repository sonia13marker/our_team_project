import style from './style.module.css';
import React, { useState } from 'react';
import { Menu } from '../Menu/Menu';

export const MenuHamburger = () => {
    const [menuActive, setMenuActive] = useState(false);
    return <div className={style.container}> 
            <div className={style.button_menu} onClick={() => setMenuActive(!menuActive)}>
                <span/>
            </div>
        <Menu active={menuActive} setActive={setMenuActive}/>
    </div>
}