import style from "./style.module.css";
import {Button} from "../../components/Button/Button";
import {LeftPanel} from "../../components/LeftPanel/LeftPanel";
import {ColorImg} from "../../components/ColorImg/ColorImg";

import img_white from "../../images/imgwhite.png";
import img_dark from "../../images/imgblack.png";
import { HeaderMain } from "../../components/HeaderMain/HeaderMain";
import { useTranslation } from "react-i18next";

export const MainPage = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <>
            <HeaderMain />
            <div className={style.main_page}>
                <LeftPanel />
                <div className={style.wrapper}>
                    <div className={style.contentSide}>
                        <div className={style.infoBlock}>
                            <p><span className={style.headingTitle1}>WebClick — </span><span className={style.headingTitle1Stroke1}>WebClick — </span><br />{t("mainpage_description")}</p>
                            <Button />
                        </div>
                    </div>
                    <div className={style.changeBtns}>
                            <p className={style.changeBtn} onClick={() => changeLanguage('ru')}>RU</p>
                            <p className={style.changeBtn} onClick={() => changeLanguage('en')}>EN</p>
                            <p className={style.changeBtn}>{t("theme_btn")}</p>
                    </div>
                    {/* <div className={style.image}></div> */}
                    <ColorImg className={style.image} src_white={img_white} src_dark={img_dark} alt="main img"/>
                </div>
            </div>
        </>
    )
}
