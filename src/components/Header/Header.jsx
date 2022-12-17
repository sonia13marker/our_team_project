import style from './style.module.css';
import {Link} from "react-router-dom";

export const Header = () => {
    return <nav className={style.nav}>
        {/*нет нужды оборачивать текст в div, исправила
        на span*/}
        <Link to="/about" className={style.nav_elem}>О нас</Link>
        <Link to="/portfolio" className={style.nav_elem}>Портфолио</Link>
        <Link to="/#" className={style.nav_elem}>Контакты</Link>
    </nav>
}