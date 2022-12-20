import {TechStack} from "../../components/TechStack/TechStack";
import SoftSkills from "../../components/SoftSkills/SoftSkills";
import { AboutComp } from '../../components/AboutComp/AboutComp';
import style from './style.module.css';
import OurTeam from '../../components/OurTeam/OurTeam';
import { Footer } from "../../components/Footer/Footer";
import { FavoritePlace } from "../../components/FavoritePlace/FavoritePlace";
import { MenuHamburger } from "../../components/MenuHamburger/MenuHamburger";

import { useTranslation } from "react-i18next";

export function AboutPage() {
    const { t } = useTranslation();

    return (
        <>
        <MenuHamburger/>
        <div className={style.back}>
        <h1 className={style.about_header}>{t("nav_about")}</h1>
        <AboutComp/>
        <SoftSkills/>
        <TechStack/>
        <OurTeam/>
        <FavoritePlace/>
        <Footer/>
    </div>
    </>)
}