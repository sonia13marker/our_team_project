import style from './style.module.css'
import React, {Component} from 'react';


export class SoftSkills extends Component {
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
        return (
            <div className={style.container}>
                <div className={style.background}>
                    наши качества
                </div>
                <div className={style.content}>
                    <ul className={style.ul}>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text1, this.arrowTip1, this.arrow1, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")} onMouseLeave={() => this.handleClick(this.text1, this.arrowTip1, this.arrow1, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")}>
                            <div ref={this.text1}>Ответственность</div>
                            <div ref={this.arrowTip1}></div>
                            <div ref={this.arrow1}></div>
                        </li>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text2, this.arrowTip2, this.arrow2, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")} onMouseLeave={() => this.handleClick(this.text2, this.arrowTip2, this.arrow2, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")}>
                            <div ref={this.text2}>Качество</div>
                            <div ref={this.arrowTip2}></div>
                            <div ref={this.arrow2}></div>
                        </li>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text3, this.arrowTip3, this.arrow3, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")} onMouseLeave={() => this.handleClick(this.text3, this.arrowTip3, this.arrow3, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")}>
                            <div ref={this.text3}>Инициативность</div>
                            <div ref={this.arrowTip3}></div>
                            <div ref={this.arrow3}></div>
                        </li>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text4, this.arrowTip4, this.arrow4, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")} onMouseLeave={() => this.handleClick(this.text4, this.arrowTip4, this.arrow4, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")}>
                            <div ref={this.text4}>Сплочённость</div>
                            <div ref={this.arrowTip4}></div>
                            <div ref={this.arrow4}></div>
                            <div>
                            </div>
                        </li>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text5, this.arrowTip5, this.arrow5, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")} onMouseLeave={() => this.handleClick(this.text5, this.arrowTip5, this.arrow5, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")}>
                            <div ref={this.text5}>Коммуникабельность</div>
                            <div ref={this.arrowTip5}></div>
                            <div ref={this.arrow5}></div>
                        </li>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text6, this.arrowTip6, this.arrow6, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")} onMouseLeave={() => this.handleClick(this.text6, this.arrowTip6, this.arrow6, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")}>
                            <div ref={this.text6}>Выполнение в срок</div>
                            <div ref={this.arrowTip6}></div>
                            <div ref={this.arrow6}></div>
                        </li>
                        <li className={style.item} onMouseEnter={() => this.handleClick(this.text7, this.arrowTip7, this.arrow7, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")} onMouseLeave={() => this.handleClick(this.text7, this.arrowTip7, this.arrow7, "style_active__OB3RR", "style_animated_arrow_tip__u-D1S", "style_animated_arrow__CirQM")}>
                            <div ref={this.text7}>Преданность работе</div>
                            <div ref={this.arrowTip7}></div>
                            <div ref={this.arrow7}></div>
                        </li>
                    </ul>
                </div>
            </div>
        )        
    }
}
