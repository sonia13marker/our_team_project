import style from './style.module.css'

// import classnames from 'classnames';


export const Ф = () => {
    return (
        <div className={style.container}>
            <div className={style.background}>
                наши качества
            </div>
            <div className={style.content}>
                <ul className={style.ul}>
                    <li className={style.item}>Ответственность</li>
                    <li className={style.item}>Качество</li>
                    <li className={style.item}>Инициативность</li>
                    <li className={style.item}>
                        Сплочённость
                        <div>
                        </div>
                    </li>
                    <li className={style.item}>Коммуникабельность</li>
                    <li className={style.item}>Выполнение в срок</li>
                    <li className={style.item}>Преданность работе</li>
                </ul>
            </div>
        </div>
    )
}
