import style from "./style.module.css";
import {Button} from "../../components/Button/Button";
import {LeftPanel} from "../../components/LeftPanel/LeftPanel";
import {ColorImg} from "../../components/ColorImg/ColorImg";
import { HeaderMain } from "../../components/HeaderMain/HeaderMain";

import MediaQuery from "react-responsive";

import img_white from "../../images/imgwhite.png";
import img_dark from "../../images/imgblack.png";
import {MenuHamburger} from "../../components/MenuHamburger/MenuHamburger";

export const MainPage = () => {
    return (
        <>
            <MediaQuery minWidth={720}>
                <HeaderMain/>
            </MediaQuery>
            <MediaQuery maxWidth={720}>
                <MenuHamburger/>
            </MediaQuery>
            <div className={style.main_page}>
                <MediaQuery minWidth={720}>
                    <LeftPanel/>
                </MediaQuery>
                <div className={style.wrapper}>
                    <div className={style.contentSide}>
                        <div className={style.infoBlock}>
                            <p><span className={style.headingTitle1}>WebClick - </span><span className={style.headingTitle1Stroke1}>WebClick - </span><br />креативное агенство <br />по созданию веб-сайтов</p>
                            <Button />
                        </div>
                    </div>
                    <div className={style.changeBtns}>
                            {/* Что я предлагаю сделать: менять содержимое кнопки "Язык" в зависимости от языка
                                т.е если стоит русский язык, то в самой кнопке надпись "Русский"
                                При клике содержимое кнопки менялось бы на "English"*/}
                            <p className={style.changeBtn}>Русский</p>
                            <p className={style.changeBtn}>Тема</p>
                    </div>

                    {/* <div className={style.image}></div> */}
                    <MediaQuery minWidth={1190}>
                        <ColorImg className={style.image} src_white={img_dark} src_dark={img_white} alt="main img"/>
                    </MediaQuery>
                </div>
            </div>
        </>
    )
}
