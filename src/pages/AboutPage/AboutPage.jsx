import {TechStack} from "../../components/TechStack/TechStack";
import { SoftSkills } from "../../components/SoftSkills/SoftSkills";
import { AboutComp } from '../../components/AboutComp/AboutComp';
import style from './style.module.css';
import { OurTeam } from '../../components/OurTeam/OurTeam';
import { Footer } from "../../components/Footer/Footer";
import { FavoritePlace } from "../../components/FavoritePlace/FavoritePlace";
import { MenuHamburger } from "../../components/MenuHamburger/MenuHamburger";

export function AboutPage() {
    return <div className={style.back}>
        <h1 className={style.about_header}>О нас</h1>
        <AboutComp/>
        <SoftSkills/>
        <TechStack/>
        <OurTeam/>
        <FavoritePlace/>
        <Footer/>
    </div>
}