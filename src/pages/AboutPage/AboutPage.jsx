import {TechStack} from "../../components/TechStack/TechStack";
import { SoftSkills } from "../../components/SoftSkills/SoftSkills";
import { Footer } from "../../components/Footer/Footer";
import {AboutComp} from '../../components/AboutComp/AboutComp';
import style from './style.module.css';
import {OurTeam} from '../../components/OurTeam/OurTeam';

export function AboutPage() {
    return <div className={style.back}>
        {/* <Header/> */}
        <AboutComp/>
        <TechStack/>
        
        <SoftSkills/>
        <OurTeam />
        <Footer />

    </div>
}