import style from './style.module.css';
import classnames from 'classnames';
import logo from '../../images/logo1_white.svg';

import { ThemeContext, themes } from '../../contexts/ThemeContext'


export const Footer = () => {
    return (
        <footer className={style.footer}>
            <ul className={style.row}>
                <li className={classnames(style.item_box_left, style.item, style.item_box)}>
                    <a className={style.style_link} href="/"><img src={logo} alt="logo"/></a>
                    {/* <a className={style.style_link} href="/#">WebClick</a> */}
                </li>
                <li className={classnames(style.item_box_center, style.item, style.item_box)}>
                    <ul className={style.row}>
                        <li className={style.item}><a className={style.style_link} href="/about">О нас</a></li>
                        <li className={style.item}><a className={style.style_link} href="/portfolio">Портфолио</a></li>
                        <li className={style.item}><a className={style.style_link} href="/contacts">Контакты</a></li>
                    </ul>
                </li>
                <li className={classnames(style.item_box_right, style.item, style.item_box)}>
                    <ul className={style.row}>
                        <li className={style.item}>
                            <button className={style.btn}>Язык</button>
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
                                    >Тема</button>
                                )}
                            </ThemeContext.Consumer>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}