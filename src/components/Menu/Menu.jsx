 import { ButtonShare } from '../ButtonShare/ButtonShare';
import style from './style.module.css';
import classnames from "classnames";

export const Menu = ({active, setActive}) => {
    return (
        <div>
            <div className={classnames(style.menu, active?style.active:'')} onClick={() => setActive(false)}>
                <div className={style.menu__content} onClick={e => e.stopPropagation()}>
                    <div className={style.menu__header}>
                        WebClick
                    </div>
                    <ul className={style.one_ul}>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/about">О нас</a></li>
                        <li><a href="/portfolio">Портфолио</a></li>
                        <li><a href="/contacts">Контакты</a></li>
                        <li><a href="/#">Политика конфиденциальности</a></li>
                    </ul>
                    <ul className={style.two_ul}>
                        <li><p className={style.changeBtn}>Русский</p></li>
                        <li><p className={style.changeBtn}>Тема</p></li>
                        <li className={style.deg}><ButtonShare/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
// export const Menu = ({active, setActive}) => {
//     return (
//     <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}> 
//         <div className="blur"/>
//         <div className="menu__content" onClick={e => e.stopPropagation()}>
//             <div className="menu__header">
//                 WebClick
//             </div>
//             <ul>
//                 <li><a href="/">Главная</a></li>
//                 <li><a href="/about">О нас</a></li>
//                 <li><a href="/portfolio">Портфолио</a></li>
//                 <li><a href="/contacts">Контакты</a></li>
//             </ul>
//         </div>
//     </div>
//     )
// }