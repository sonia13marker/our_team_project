import {TechStack} from "../../components/TechStack/TechStack";
import { AboutComp } from '../../components/AboutComp/AboutComp';
import style from './style.module.css';
import { Footer } from "../../components/Footer/Footer";
import { FavoritePlace } from "../../components/FavoritePlace/FavoritePlace";
import { MenuHamburger } from "../../components/MenuHamburger/MenuHamburger";

import { useTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import SoftSkills from "../../components/SoftSkills/SoftSkills";
import OurTeam from "../../components/OurTeam/OurTeam";

export function AboutPage() {
    const { t } = useTranslation();

    return (
        <>
            <MenuHamburger/>
            <div className={style.back}>
                <h1 className={style.about_header}>{t("nav_about")}</h1>
                <AboutComp/>
                <SoftSkills/>

                <MediaQuery minWidth={760}>
                    <TechStack/>
                </MediaQuery>

                <OurTeam/>
                <FavoritePlace/>
                <Footer/>
            </div>
        </>
    )
}