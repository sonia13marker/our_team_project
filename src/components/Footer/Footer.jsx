import style from './style.module.css';
import lang_arr from '../../images/lang_arr.svg';
import classnames from 'classnames';
import logo from '../../images/logo1_white.svg';


export const Footer = () => {
    return (
        <footer className={style.footer}>
            <ul className={classnames(style.row)}>
                <li className={classnames(style.item_box_left, style.item, style.item_box)}>
                    <a className={style.style_link} href="/#"><img src={logo}/></a>
                    {/* <a className={style.style_link} href="/#">WebClick</a> */}
                </li>
                <li className={classnames(style.item_box_center, style.item, style.item_box)}>
                    <ul className={style.row}>
                        <li className={style.item}><a className={style.style_link} href="/#">О нас</a></li>
                        <li className={style.item}><a className={style.style_link} href="/#">Портфолио</a></li>
                        <li className={style.item}><a className={style.style_link} href="/#">Контакты</a></li>
                    </ul>
                </li>
                <li className={classnames(style.item_box_right, style.item, style.item_box)}>
                    <ul className={style.row}>
                        <li className={style.item}>
                            <div id="languages" className={style.languages_content}>
                                <button>Русский</button>
                                <button>Английский</button>
                            </div>
                            <button className={style.languages_btn}>Язык 
                            <span className={style.lang_arrow}>
                                <img src={lang_arr} alt=""/>
                                </span>
                            </button>
                        </li>
                        <li className={style.item}><a className={style.style_link} href="/#">Тема</a></li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}