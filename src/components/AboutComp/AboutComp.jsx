import style from './style.module.css';
import black_arrow from '../../images/black_arrow.svg';

import { useTranslation } from "react-i18next";

export function AboutComp() {
    const { t } = useTranslation();

    return <div className={style.divBlock}>
        <img className={style.arrow} src={black_arrow} alt="black arrow" />
        <p className={style.text}>{t("about_component_text")}</p>
        <img className={style.arrow1} src={black_arrow} alt="black arrow" />
    </div>
}
