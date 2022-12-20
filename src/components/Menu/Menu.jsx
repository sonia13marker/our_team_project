 import { ButtonShare } from '../ButtonShare/ButtonShare';
import './style.css';

export const Menu = ({active, setActive}) => {
    return (
        <div>
            <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}> 
                <div className="menu__content" onClick={e => e.stopPropagation()}>
                    <div className="menu__header">
                        WebClick
                    </div>
                    <ul className='one_ul'>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/about">О нас</a></li>
                        <li><a href="/portfolio">Портфолио</a></li>
                        <li><a href="/contacts">Контакты</a></li>
                    </ul>
                    <ul className='two_ul'>
                        <li><p className="changeBtn">Русский</p></li>
                        <li><p className="changeBtn">Тема</p></li>
                        <li className="deg"><ButtonShare/></li>
                        <p className="police"><a href="/#">Политика конфиденциальности</a></p>
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