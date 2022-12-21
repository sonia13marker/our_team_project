import style from './style.module.css';
import {Link} from "react-router-dom";

import { useTranslation } from "react-i18next";

export const HeaderMain = () => {
    const { t } = useTranslation();

    return (
        <nav className={style.nav}>
            <Link to="/about" className={style.nav_elem}>{t("nav_about")}</Link>
            <Link to="/portfolio" className={style.nav_elem}>{t("nav_portfolion")}</Link>
            <Link to="/contacts" className={style.nav_elem}>{t("nav_contacts")}</Link>
        </nav>
    )
}