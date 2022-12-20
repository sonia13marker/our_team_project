import style from './style.module.css';

import { useTranslation } from "react-i18next";

export const Map = () => {
    const { t } = useTranslation();

    return <div className={style.wrapper__map}>
    <span className={style.wrapper__h3}>
        <h3>{t("where_are_we")}</h3>
    </span>
    <div className={style.wrapper__block}>
        <span className={style.container}>
            <h4 className={style.block__header}>
                {t("adress")}
            </h4>
            <p className={style.block__text}>
                {t("adress_of_place")}
            </p>

            <h4 className={style.block__header}>
                {t("phone")}
            </h4>
            <p className={style.block__text}>
                +7 495 739-70-006  
            </p>

            <h4 className={style.block__header}>
                {t("fax")}
            </h4>
            <p className={style.block__text}>
                +7 495 739-70-70
            </p>

            <h4 className={style.block__header}>
                E-mail:
            </h4>
            <p className={style.block__text}>
                pr@yandex-team.ru
            </p>
        </span>
    </div>


{/* место для карты */}
    <div className={style.map}>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3da11bccdaa85b899703f1be928cdcc17ac97abc9cdbd60b22255626711b6cfb&amp;source=constructor" width="100%" height="630" frameborder="0"></iframe>
    </div>
    
</div>
}