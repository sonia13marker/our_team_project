import style from './style.module.css'
import React, {Component} from 'react';

import "./style.css";

import { withTranslation } from "react-i18next";
import MediaQuery from "react-responsive";

class SoftSkills extends Component {
    constructor(props){
        super(props);
        this.text1 = React.createRef();
        this.arrowTip1 = React.createRef();
        this.arrow1 = React.createRef();

        this.text2 = React.createRef();
        this.arrowTip2 = React.createRef();
        this.arrow2 = React.createRef();

        this.text3 = React.createRef();
        this.arrowTip3 = React.createRef();
        this.arrow3 = React.createRef();

        this.text4 = React.createRef();
        this.arrowTip4 = React.createRef();
        this.arrow4 = React.createRef();

        this.text5 = React.createRef();
        this.arrowTip5 = React.createRef();
        this.arrow5 = React.createRef();

        this.text6 = React.createRef();
        this.arrowTip6 = React.createRef();
        this.arrow6 = React.createRef();

        this.text7 = React.createRef();
        this.arrowTip7 = React.createRef();
        this.arrow7 = React.createRef();
    }

    handleClick(text, arrowTip, arrow, clText, clArrowTip, clArrow) {
        text["current"].classList.toggle(clText)
        arrowTip["current"].classList.toggle(clArrowTip)
        arrow["current"].classList.toggle(clArrow)
    }

    render() {
        const { t } = this.props;
        return (
            <div className={style.container}>
                <div className={style.background}>
                    {t("our_qualities")}
                </div>
                <div className={style.content}>
                    <ul className={style.ul}>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text1, this.arrowTip1, this.arrow1, "active", "animated_arrow_tip", "animated_arrow")} onMouseLeave={() => this.handleClick(this.text1, this.arrowTip1, this.arrow1, "active", "animated_arrow_tip", "animated_arrow")}>
                            <div ref={this.text1}>{t("responsibility")}</div>
                            <MediaQuery minWidth={760}>
                                <div ref={this.arrowTip1}></div>
                                <div ref={this.arrow1}></div>
                            </MediaQuery>
                        </li>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text2, this.arrowTip2, this.arrow2, "active", "animated_arrow_tip", "animated_arrow")} onMouseLeave={() => this.handleClick(this.text2, this.arrowTip2, this.arrow2, "active", "animated_arrow_tip", "animated_arrow")}>
                            <div ref={this.text2}>{t("quality")}</div>
                            <MediaQuery minWidth={760}>
                                <div ref={this.arrowTip2}></div>
                                <div ref={this.arrow2}></div>
                            </MediaQuery>
                        </li>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text3, this.arrowTip3, this.arrow3, "active", "animated_arrow_tip", "animated_arrow")} onMouseLeave={() => this.handleClick(this.text3, this.arrowTip3, this.arrow3, "active", "animated_arrow_tip", "animated_arrow")}>
                            <div ref={this.text3}>{t("initiative")}</div>
                            <MediaQuery minWidth={760}>
                                <div ref={this.arrowTip3}></div>
                                <div ref={this.arrow3}></div>
                            </MediaQuery>
                        </li>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text4, this.arrowTip4, this.arrow4, "active", "animated_arrow_tip", "animated_arrow")} onMouseLeave={() => this.handleClick(this.text4, this.arrowTip4, this.arrow4, "active", "animated_arrow_tip", "animated_arrow")}>
                            <div ref={this.text4}>{t("cohesion")}</div>
                            <MediaQuery minWidth={760}>
                                <div ref={this.arrowTip4}></div>
                                <div ref={this.arrow4}></div>
                            </MediaQuery>
                            <div>
                            </div>
                        </li>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text5, this.arrowTip5, this.arrow5, "active", "animated_arrow_tip", "animated_arrow")} onMouseLeave={() => this.handleClick(this.text5, this.arrowTip5, this.arrow5, "active", "animated_arrow_tip", "animated_arrow")}>
                            <div ref={this.text5}>{t("sociability")}</div>
                            <MediaQuery minWidth={760}>
                                <div ref={this.arrowTip5}></div>
                                <div ref={this.arrow5}></div>
                            </MediaQuery>
                        </li>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text6, this.arrowTip6, this.arrow6, "active", "animated_arrow_tip", "animated_arrow")} onMouseLeave={() => this.handleClick(this.text6, this.arrowTip6, this.arrow6, "active", "animated_arrow_tip", "animated_arrow")}>
                            <div ref={this.text6}>{t("completion_on_time")}</div>
                            <MediaQuery minWidth={760}>
                                <div ref={this.arrowTip6}></div>
                                <div ref={this.arrow6}></div>
                            </MediaQuery>
                        </li>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text7, this.arrowTip7, this.arrow7, "active", "animated_arrow_tip", "animated_arrow")} onMouseLeave={() => this.handleClick(this.text7, this.arrowTip7, this.arrow7, "active", "animated_arrow_tip", "animated_arrow")}>
                            <div ref={this.text7}>{t("dedication_to_work")}</div>
                            <MediaQuery minWidth={760}>
                                <div ref={this.arrowTip7}></div>
                                <div ref={this.arrow7}></div>
                            </MediaQuery>
                        </li>
                    </ul>
                </div>
            </div>
        )        
    }
}

export default withTranslation()(SoftSkills)