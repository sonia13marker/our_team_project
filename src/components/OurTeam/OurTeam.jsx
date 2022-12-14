import style from './style.module.css';
import arrow_down from '../../images/arrow_down.svg';
import arrow_top from '../../images/arrow_top.svg';
import classNames from 'classnames';
import { classes } from 'istanbul-lib-coverage';

export function  OurTeam() {
    return <div className={style.all_wrapper}>
        <h3 className={style.head_text}>
            <span className={style.lineHead}>по</span>знакомьтесь с командой
        </h3>
        <span className={style.wrapper}>
            <div className={style.card_down}>
                <div className={style.card}>
                    <p className={style.card__name}>Антон, 15 лет</p>
                    <p className={style.card__post}>Вёрстка</p>
                    <span className={style.card__photo}></span>
                    <span className={style.card__block}>
                        <img src={arrow_down} className={style.arr_down} alt=""/>
                    </span>
                </div>
            </div>
            <div className={style.card}>
            <p className={style.card__name}>Наиль, 16 лет</p>
                <p className={style.card__post}>Вёрстка, анимации</p>
                <span className={style.card__photo}></span>
                <span className={style.card__block}>
                    <img src={arrow_top} className={style.arr_top} alt=""/> 
                </span>
            </div>
            <div className={style.card_down}>
                <div className={style.card}>
                <p className={style.card__name}>Руслан, 18 лет</p>
                    <p className={style.card__post}>Вёрстка, адаптация</p>
                    <span className={style.card__photo}></span>
                    <span className={style.card__block}>
                        <img src={arrow_down} className={style.arr_down} alt=""/>
                    </span>
                </div>
            </div>
            <div className={style.card}>
            <p className={style.card__name}>Софья, 18 лет</p>
                <p className={style.card__post}>Лидер, дизайн</p>
                <span className={style.card__photo}></span>
                <span className={style.card__block}>
                    <img src={arrow_top} className={style.arr_top} alt=""/>
                </span>
            </div>
        </span>
    </div>
}