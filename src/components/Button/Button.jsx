import style from './style.module.css'

export const Button = () => {
    return (
        <div className={style.btnWrapper}>
            <div className={style.btnInner}>
                Посмотреть <span>→</span>
            </div>
        </div>
    )
}