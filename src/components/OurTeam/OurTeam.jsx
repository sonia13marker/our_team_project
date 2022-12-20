import style from './style.module.css';
import arrow_down from '../../images/arrow_down.svg';
import arrow_top from '../../images/arrow_top.svg';
import classnames from 'classnames';
import React, {Component} from 'react';
import "./style.css";

import { withTranslation } from "react-i18next";

//icons
import tel from '../../images/telegram.svg';
import git from '../../images/github.svg';
import vk from '../../images/vk.svg';


class OurTeam extends Component {
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
        const { t } = this.props;
        return <div className={style.all_wrapper}>
            <h3 className={style.head_text}>
                <span className={style.lineHead}>{t("po")}</span>{t("meet_the_team")}
            </h3>
            <span className={style.wrapper}>
                <div className={style.card_down}>
                    <div className={style.card} onMouseEnter={() => this.handleClick(this.card1, "showed")} onMouseLeave={() => this.handleClick(this.card1, "showed")}>
                        <p className={style.card__name}>{t("anton")}</p>
                        <p className={style.card__post}>{t("anton_skills")}</p>
                        <span className={classnames(style.card__photo, style.ant)}>
                        </span>
                        <span ref={this.card1} className={classnames(style.card__block)}>
                            <img src={arrow_down} className={style.arr_down} alt=""/>
                        </span>
                        <span className={classnames(style.card__info_block)}>
                            <p className={style.card_info}><span className={style.weight}>{t("tech")}</span> HTML, CSS,  JavaScript, Python, React, Flask, Bootstrap</p>
                            <span className={style.social}>
                            <a href="https://t.me/x64penguin" target="blank"><img src={tel} alt="telegram"></img></a>
                            <a href="https://github.com/x64penguin" target="blank"><img src={git} alt="github"></img></a> 
                            <a href="https://vk.com/x64penguin" target="blank"><img src={vk} alt="vk" /></a>
                            </span>
                        </span>
                    </div>
                </div>
                <div className={style.card} onMouseEnter={() => this.handleClick(this.card2, "showed")} onMouseLeave={() => this.handleClick(this.card2, "showed")}>
                    <p className={style.card__name}>{t("nail")}</p>
                    <p className={style.card__post}>{t("nail_skills")}</p>
                    <span className={classnames(style.card__photo, style.nail)}></span>
                    <span ref={this.card2} className={classnames(style.card__block)}>
                        <img src={arrow_top} className={style.arr_top} alt=""/>
                    </span>
                    <span className={classnames(style.card__info_block)}>
                        <p className={style.card_info}><span className={style.weight}>{t("tech")}</span> Html5, Css3, React, Redux, Bootstrap, Python3, Flask, MongoDB, Sqlite3</p>
                        <span className={style.social}>
                            <a href="https://t.me/mdaamn" target="blank"> <img src={tel} alt="telegram"></img></a>
                            <a href="https://github.com/NailGilmanov" target="blank"><img src={git} alt="github"></img></a> 
                            <a href="https://vk.com/iglobglogabgalab" target="blank"><img src={vk} alt="vk"/></a>
                    </span>
                    </span>
                    
                </div>
                <div className={style.card_down}>
                    <div className={style.card} onMouseEnter={() => this.handleClick(this.card3, "showed")} onMouseLeave={() => this.handleClick(this.card3, "showed")}>
                    <p className={style.card__name}>{t("ruslan")}</p>
                        <p className={style.card__post}>{t("ruslan_skills")}</p>
                        <span className={classnames(style.card__photo, style.rus)}></span>
                        <span ref={this.card3} className={classnames(style.card__block)}>
                            <img src={arrow_down} className={style.arr_down} alt=""/>
                        </span>
                        <span className={classnames(style.card__info_block)}>
                            <p className={style.card_info}><span className={style.weight}>{t("tech")}</span> Python3, Django, AIOHttp, FastAPI, Flask, JavaScript, PyScript, Bootstrap, Tortoise ORM</p>
                            <span className={style.social}>
                            <a href="https://t.me/Gruslans" target="blank"> <img src={tel} alt="telegram"></img></a>
                            <a href="https://github.com/GRusl" target="blank"><img src={git} alt="github"></img></a> 
                            <a href="https://vk.com/galeev.ruslan" target="blank"><img src={vk} alt="vk"/></a>
                        </span>
                        </span>
                       

                    </div>
                </div>
                <div className={style.card} onMouseEnter={() => this.handleClick(this.card4, "showed")} onMouseLeave={() => this.handleClick(this.card4, "showed")}>
                <p className={style.card__name}>{t("sofia")}</p>
                    <p className={style.card__post}>{t("sofia_skills")}</p>
                    <span className={classnames(style.card__photo, style.son)}></span>
                    <span ref={this.card4} className={classnames(style.card__block)}>
                        <img src={arrow_top} className={style.arr_top} alt=""/>
                    </span>
                    <span className={classnames(style.card__info_block)}>
                        <p className={style.card_info}><span className={style.weight}>{t("tech")}</span> HTML5, CSS3, React, JavaScript, SCSS, Figma, WordPress</p>
                        <span className={style.social}>
                            <a href="https://t.me/username_marker" target="blank"> <img src={tel} alt="telegram"></img></a>
                            <a href="https://github.com/sonia13marker?tab=repositories" target="blank"><img src={git} alt="github"></img></a> 
                            <a href="https://vk.com/mmarkerr" target="blank"><img src={vk} alt="vk"/></a>
                        </span>
                    </span>
                    
                </div>
            </span>
        </div>
    }
}

export default withTranslation()(OurTeam)