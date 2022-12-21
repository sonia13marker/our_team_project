 import { ButtonShare } from '../ButtonShare/ButtonShare';
import style from './style.module.css';
import classnames from "classnames";

import { useTranslation } from "react-i18next";

export const Menu = ({active, setActive}) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className={classnames(style.menu, active?style.active:'')} onClick={() => setActive(false)}>
            <div className={style.menu__content} onClick={e => e.stopPropagation()}>
                <div className={style.menu__header}>
                    WebClick
                </div>
                <ul className={style.one_ul}>
                    <li><a href="/">{t("nav_main")}</a></li>
                    <li><a href="/about">{t("nav_about")}</a></li>
                    <li><a href="/portfolio">{t("nav_portfolion")}</a></li>
                    <li><a href="/contacts">{t("nav_contacts")}</a></li>
                    <li><a href="/rules">{t("rules")}</a></li>
                </ul>
                <ul className={style.two_ul}>
                    <li><p className={style.changeBtn} onClick={() => changeLanguage('ru')}>RU</p></li>
                    <li><p className={style.changeBtn} onClick={() => changeLanguage('en')}>EN</p></li>
                    <li><p className={style.changeBtn}>{t('theme_btn')}</p></li>
                    <li className={style.deg}><ButtonShare/></li>
                </ul>
            </div>

        </div>
    )
}
// export const Menu = ({active, setActive}) => {
//     return (
//     <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}> 
//         <div className="blur"/>
//         <div className="menu__content" onClick={e => e.stopPropagation()}>
//             <div className="menu__header">
//                 WebClick
//             </div>
//             <ul>
//                 <li><a href="/">Главная</a></li>
//                 <li><a href="/about">О нас</a></li>
//                 <li><a href="/portfolio">Портфолио</a></li>
//                 <li><a href="/contacts">Контакты</a></li>
//             </ul>
//         </div>
//     </div>
//     )
// }