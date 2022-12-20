import { Link } from 'react-router-dom'
import style from './style.module.css'

import { useTranslation } from "react-i18next";

export const Button = () => {
    const { t } = useTranslation();
    return (
        <div className={style.btnWrapper}>
            <Link to="/about" className={style.noDec}>
                <div className={style.btnInner}>
                    {t("show_btn")} <span>→</span>
                </div>
            </Link>
        </div>
    )
}