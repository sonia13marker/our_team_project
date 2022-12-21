import style from './style.module.css';

import { useTranslation } from "react-i18next";

export const FavoritePlace = () => {
    const { t } = useTranslation();

    return <div className={style.wrapper}>
        <div className={style.stroke_container}>
            <hr className={style.stroke}/>
        <h2 className={style.wrapper__h2}>{t("our_favorite_places")}</h2>
        </div>
        <div className={style.wrapper__place}>
            <span className={style.place__city}>
                <h3 className={style.place__h3}>{t('krasnodar')}</h3>
                <ul className={style.place__ul}>
                    <li><a href="https://yandex.ru/maps/org/gorodskoy_sad/1047001189/?ll=39.012985%2C45.038440&z=12.73" target="blank">{t("adress1")}<br />{t("gorky")}</a></li>
                    <li><a href="https://yandex.ru/maps/org/botanicheskiy_sad_im_i_s_kosenko/1752979417/?ll=38.927684%2C45.052785&z=15" target="blank">{t("adress2")} <br />{t("adress3")}</a></li>
                </ul>
            </span>

            <span className={style.place__city}>
                <h3 className={style.place__h3}>{t("bugulma")}</h3>
                <ul className={style.place__ul}>
                    <li><a href="https://yandex.ru/maps/org/dvorets_molodyozhi/160750110958/?ll=52.819923%2C54.533389&z=16" target="blank">{t("adress4")}<br />{t("adress5")}</a></li>
                    <li><a href="https://yandex.ru/maps/11122/bugulma/house/ulitsa_musy_dzhalilya_31/YUsYcQ5jT0cGQFtufXlydH5mZw==/?ll=52.793621%2C54.535253&z=16" target="blank">{t("adress6")}<br />{t("adress7")}</a></li>
                </ul>
            </span>

            <span className={style.place__city}>
                <h3 className={style.place__h3}>{t("moscow")}</h3>
                <ul className={style.place__ul}>
                    <li><a href="https://yandex.ru/maps/213/moscow/house/khodynskiy_bulvar_10b/Z04YcwVpQUIOQFtvfXt5d3VlZQ==/?ll=37.529879%2C55.786961&z=16" target="blank">{t("adress8")}<br />{t("adress9")}</a></li>
                    <li><a href="https://yandex.ru/maps/213/moscow/house/prospekt_mira_119s228/Z04YcARoTkMDQFtvfXRzd3prYQ==/?ll=37.638763%2C55.826685&z=16" target="blank">{t("adress10")}<br />{t("adress11")}</a></li>
                    <li><a href="https://yandex.ru/maps/213/moscow/house/presnenskaya_naberezhnaya_2/Z04YcwRpTkEFQFtvfXt1eH1lZg==/?ll=37.539743%2C55.749162&z=16" target="blank">{t("adress12")}<br />{t("adress13")}</a></li>
                </ul>
            </span>

            <span className={style.place__city}>
                <h3 className={style.place__h3}>{t("chelny")}</h3>
                <ul className={style.place__ul}>
                    <li><a href="https://yandex.ru/maps/org/koltso/1002974978/?ll=49.124336%2C55.786430&z=16" target="blank">{t("adress14")}<br />{t("adress15")}</a></li>
                </ul>
            </span>
        </div>
    <span className={style.wrapper__map}>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ade489f737386677b78e869b07e3317c3cbf4f1a9263fb53c3ab0f7a59383a459&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
    </span>
    </div>
}