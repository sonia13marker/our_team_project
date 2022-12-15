import { Link } from 'react-router-dom'
import style from './style.module.css'

export const Button = () => {
    return (
        <div className={style.btnWrapper}>
            <Link to="/about" className={style.noDec}>
                <div className={style.btnInner}>
                    Посмотреть <span>→</span>
                </div>
            </Link>
        </div>
    )
}