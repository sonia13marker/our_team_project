import { LeftPanel } from "../LeftPanel/LeftPanel"
import { Button } from "../Button/Button"
import { Nav } from '../Nav/Nav'

import style from './style.module.css'

export const Header = () => {
    return (
        <div>
            <LeftPanel />
            <div className={style.wrapper}>
                <div className={style.contentSide}>
                    <Nav />
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