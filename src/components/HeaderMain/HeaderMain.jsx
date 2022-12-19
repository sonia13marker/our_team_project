import style from './style.module.css';
import {Link} from "react-router-dom";

export const HeaderMain = () => {
    return (
        <nav className={style.nav}>
            <Link to="/about" className={style.nav_elem}>О нас</Link>
            <Link to="/portfolio" className={style.nav_elem}>Портфолио</Link>
            <Link to="/contacts" className={style.nav_elem}>Контакты</Link>
        </nav>
    )
}