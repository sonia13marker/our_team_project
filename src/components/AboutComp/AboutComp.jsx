import style from './style.module.css';
import black_arrow from '../../images/black_arrow.svg';
import MediaQuery from "react-responsive";
import white_arrow from '../../images/white_arrow.svg';
import { ColorImg } from '../ColorImg/ColorImg';

import { useTranslation } from "react-i18next";


export function AboutComp() {
    const { t } = useTranslation();

    return (
        <>
            <div className={style.divBlock}>
                <ColorImg className={style.arrow} src_white={black_arrow} src_dark={white_arrow} alt="black arrow" />
                <p className={style.text}>{t("about_component_text")}</p>
                <MediaQuery minWidth={1260}>
                    <ColorImg className={style.arrow1} src_white={black_arrow} src_dark={white_arrow} alt="black arrow"/>
                </MediaQuery>
            </div>
        </>
    )
}
