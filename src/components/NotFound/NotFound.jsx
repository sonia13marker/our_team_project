import style from './style.module.css';

export const NotFound = () => {
    return <div className={style.wrapper}>
        <div className={style.left_container}>
        {/* <p className={style.text1}>404</p> */}
        <p className={style.text2}>error</p>
        
        </div>
        <div className={style.right_container}>
        <h2 className={style.h2}>Кажется, что-то сломалось</h2>
        <p className={style.text}>К сожалению, такая страница не найдена </p>
        </div>
    </div>
}