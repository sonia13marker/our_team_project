import style from './style.module.css';
import classnames from 'classnames';
import logo_white from '../../images/logo_foo_white.svg';
import logo_black from '../../images/logo_foo_black.svg';
import { ColorImg } from '../ColorImg/ColorImg';

import { ThemeContext, themes } from '../../contexts/ThemeContext';

import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <footer className={style.footer}>
            <ul className={style.row}>
                <li className={classnames(style.item_box_left, style.item, style.item_box)}>
                    <a className={style.style_link} href="/">
                        {/* <img src={logo} alt="logo"/> */}
                    <ColorImg src_white={logo_white} src_dark={logo_black} alt="logo"/>
                    </a>
                    {/* <a className={style.style_link} href="/#">WebClick</a> */}
                </li>
                <li className={classnames(style.item_box_center, style.item, style.item_box)}>
                    <ul className={style.row}>
                        <li className={style.item}><a className={style.style_link} href="/about">{t("nav_about")}</a></li>
                        <li className={style.item}><a className={style.style_link} href="/portfolio">{t("nav_portfolion")}</a></li>
                        <li className={style.item}><a className={style.style_link} href="/contacts">{t("nav_contacts")}</a></li>
                    </ul>
                </li>
                <li className={classnames(style.item_box_right, style.item, style.item_box)}>
                    <ul className={style.row}>
                        <li className={style.item}>
                            <button className={style.btn} onClick={() => changeLanguage('ru')}>RU</button>
                        </li>
                        <li className={style.item}>
                            <button className={style.btn} onClick={() => changeLanguage('en')}>EN</button>
                        </li>
                        <li className={style.item}>
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
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}