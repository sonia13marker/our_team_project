import {TechStack} from "../../components/TechStack/TechStack";
import { SoftSkills } from "../../components/SoftSkills/SoftSkills";
import {AboutComp} from '../../components/AboutComp/AboutComp';
import style from './style.module.css';
import {OurTeam} from '../../components/OurTeam/OurTeam';

export function AboutPage() {
    return <div className={style.back}>
        <h1 className={style.about_header}>О нас</h1>
        <AboutComp/>
        <TechStack/>
        
        <SoftSkills/>
        <OurTeam />
    </div>
}