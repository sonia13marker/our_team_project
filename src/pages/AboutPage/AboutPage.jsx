import {TechStack} from "../../components/TechStack/TechStack";
import { SoftSkills } from "../../components/SoftSkills/SoftSkills";
import {AboutComp} from '../../components/AboutComp/AboutComp';
import style from './style.module.css';
import {OurTeam} from '../../components/OurTeam/OurTeam';
import { Footer } from "../../components/Footer/Footer";

export function AboutPage() {
    return <div className={style.back}>
        <h1 className={style.about_header}>О нас</h1>
        <AboutComp/>
        <SoftSkills/>
        <TechStack/>
        <OurTeam />
        <Footer />
    </div>
}