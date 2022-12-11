import style from './style.module.css'

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.navElem}>
                О нас
            </div>
            <div className={style.navElem}>
                Портфолио
            </div>
            <div className={style.navElem}>
                Контакты
            </div>
        </nav>
    )
}