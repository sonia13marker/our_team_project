import style from "./style.module.css";
import {Button} from "../../components/Button/Button";
import {LeftPanel} from "../../components/LeftPanel/LeftPanel";

import { ThemeContext, themes } from '../../contexts/ThemeContext'
import {ColorImg} from "../../components/ColorImg/ColorImg";
import { HeaderMain } from "../../components/HeaderMain/HeaderMain";

import MediaQuery from "react-responsive";

import img_white from "../../images/imgwhite.png";
import img_dark from "../../images/imgblack.png";
import {MenuHamburger} from "../../components/MenuHamburger/MenuHamburger";
import { useTranslation } from "react-i18next";

export const MainPage = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <>
            <MediaQuery minWidth={720}>
                <HeaderMain/>
            </MediaQuery>
            <MediaQuery maxWidth={720}>
                <MenuHamburger/>
            </MediaQuery>
            <div className={style.main_page}>
                <MediaQuery minWidth={780}>
                    <LeftPanel/>
                </MediaQuery>
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

                            <ThemeContext.Consumer>
                                {({ theme, setTheme }) => (
                                    <button
                                        className={style.btn}
                                        onClick={() => {
                                            if (theme === themes.light) setTheme(themes.dark)
                                            if (theme === themes.dark) setTheme(themes.light)
                                        }}
                                        value={theme === themes.dark}
                                    >{t("theme_btn")}</button>
                                )}
                            </ThemeContext.Consumer>

                    </div>

                    {/* <div className={style.image}></div> */}
                    <MediaQuery minWidth={870}>
                        <ColorImg className={style.image} src_white={img_dark} src_dark={img_white} alt="main img"/>
                    </MediaQuery>
                </div>
            </div>
        </>
    )
}
