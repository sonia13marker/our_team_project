import style from './style.module.css';
import React, { useState } from 'react';
import { Menu } from '../Menu/Menu';
import classnames from "classnames";

export const MenuHamburger = () => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <div className={style.container}>
            <div
                className={
                    classnames({[style.button_menu]: true, [style.button_menu_active]: menuActive})
                }
                onClick={() => setMenuActive(!menuActive)}>
                <span/>
            </div>
            <Menu active={menuActive} setActive={setMenuActive}/>
        </div>
    )
}