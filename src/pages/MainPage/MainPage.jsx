import style from "./style.module.css";
import {Button} from "../../components/Button/Button";
import {LeftPanel} from "../../components/LeftPanel/LeftPanel";

export const MainPage = () => {
    return (
        <div className={style.main_page}>
            <LeftPanel />
            <div className={style.wrapper}>
                <div className={style.contentSide}>
                    <div className={style.infoBlock}>
                        <p><span className={style.headingTitle1}>WebClick - </span><span className={style.headingTitle1Stroke1}>WebClick - </span><br />креативное агенство <br />по созданию веб-сайтов</p>
                        <Button />
                    </div>
                </div>
                <div className={style.image}></div>
            </div>
        </div>
    )
}