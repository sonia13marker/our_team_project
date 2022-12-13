import style from './style.module.css'
import {Link} from "react-router-dom";

export const Header = () => {
    return <nav className={style.nav}>
        <Link to="/about" className={style.nav_elem}>
            О нас
        </Link>
        <div className={style.nav_elem}>
            Портфолио
        </div>
        <div className={style.nav_elem}>
            Контакты
        </div>
    </nav>
}