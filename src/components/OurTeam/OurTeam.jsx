import style from './style.module.css';
import arrow_down from '../../images/arrow_down.svg';
import arrow_top from '../../images/arrow_top.svg';
import classnames from 'classnames';
import React, {Component} from 'react';

export class OurTeam extends Component {
    constructor(props){
        super(props);
        this.card1 = React.createRef();
        this.card2 = React.createRef();
        this.card3 = React.createRef();
        this.card4 = React.createRef();
    }

    handleClick(elem, cl) {
        elem["current"].classList.toggle(cl)
    }

    render() {
        return <div className={style.all_wrapper}>
            <h3 className={style.head_text}>
                <span className={style.lineHead}>по</span>знакомьтесь с командой
            </h3>
            <span className={style.wrapper}>
                <div className={style.card_down}>
                    <div className={style.card} onMouseEnter={() => this.handleClick(this.card1, "style_showed__T8XZj")} onMouseLeave={() => this.handleClick(this.card1, "style_showed__T8XZj")}>
                        <p className={style.card__name}>Антон, 15 лет</p>
                        <p className={style.card__post}>Вёрстка</p>
                        <span className={style.card__photo}></span>
                        <span ref={this.card1} className={classnames(style.card__block)}>
                            <img src={arrow_down} className={style.arr_down} alt=""/>
                        </span>
                        <span className={classnames(style.card__info_block)}>
                            <p className={style.card_info}>Технологии: Html5, Css3, React, Redux, Bootstrap, Python3, Flask, MongoDB, Sqlite3</p>
                        </span>
                    </div>
                </div>
                <div className={style.card} onMouseEnter={() => this.handleClick(this.card2, "style_showed__T8XZj")} onMouseLeave={() => this.handleClick(this.card2, "style_showed__T8XZj")}>
                    <p className={style.card__name}>Наиль, 16 лет</p>
                    <p className={style.card__post}>Вёрстка, анимации</p>
                    <span className={style.card__photo}></span>
                    <span ref={this.card2} className={classnames(style.card__block)}>
                        <img src={arrow_top} className={style.arr_top} alt=""/>
                    </span>
                    <span className={classnames(style.card__info_block)}>
                        <p className={style.card_info}>Технологии: Html5, Css3, React, Redux, Bootstrap, Python3, Flask, MongoDB, Sqlite3</p>
                    </span>
                </div>
                <div className={style.card_down}>
                    <div className={style.card} onMouseEnter={() => this.handleClick(this.card3, "style_showed__T8XZj")} onMouseLeave={() => this.handleClick(this.card3, "style_showed__T8XZj")}>
                    <p className={style.card__name}>Руслан, 18 лет</p>
                        <p className={style.card__post}>Вёрстка, адаптация</p>
                        <span className={style.card__photo}></span>
                        <span ref={this.card3} className={classnames(style.card__block)}>
                            <img src={arrow_down} className={style.arr_down} alt=""/>
                        </span>
                        <span className={classnames(style.card__info_block)}>
                            <p className={style.card_info}>Технологии: Html5, Css3, React, Redux, Bootstrap, Python3, Flask, MongoDB, Sqlite3</p>
                        </span>
                    </div>
                </div>
                <div className={style.card} onMouseEnter={() => this.handleClick(this.card4, "style_showed__T8XZj")} onMouseLeave={() => this.handleClick(this.card4, "style_showed__T8XZj")}>
                <p className={style.card__name}>Софья, 18 лет</p>
                    <p className={style.card__post}>Лидер, дизайн</p>
                    <span className={style.card__photo}></span>
                    <span ref={this.card4} className={classnames(style.card__block)}>
                        <img src={arrow_top} className={style.arr_top} alt=""/>
                    </span>
                    <span className={classnames(style.card__info_block)}>
                        <p className={style.card_info}>Технологии: Html5, Css3, React, Redux, Bootstrap, Python3, Flask, MongoDB, Sqlite3</p>
                    </span>
                </div>
            </span>
        </div>
    }
}