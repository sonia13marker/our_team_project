import style from './style.module.css';
import black_arrow from '../../images/black_arrow.svg';
import MediaQuery from "react-responsive";

export function AboutComp() {
    return (
        <>
            <div className={style.divBlock}>
                <img className={style.arrow} src={black_arrow} alt="black arrow" />
                <p className={style.text}>
                Мы - команда амбициозных дизайнеров и разработчиков, которые любят создавать бренд и качественный продукт,
                которые полностью удовлетворяют требованиям заказчика.
                Наша команда поможет вам реализовать самые безумные идеи для ваших сайтов, а также создать современный и востребованный дизайн.
                Каждый сайт, созданный в нашей студии, находится на первой строчке в поисковой выдаче.
                </p>
                <MediaQuery minWidth={1260}>
                    <img className={style.arrow} src={black_arrow} alt="black arrow" />
                </MediaQuery>
            </div>
        </>
    )
}
