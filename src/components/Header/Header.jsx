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
                        <p><span>WebClick - </span><br />креативное агенство <br />по созданию веб-сайтов</p>
                        <Button />
                    </div>
                </div>
                <div className={style.image}></div> 
            </div>
            
            <h1>hello</h1>
        </div>
    )
}