import style from "./style.module.css";

export function TechStack() {
    return <div className={style.wrapper}>
        <span className={style.tech_line}>{"технологии ".repeat(16)}</span>
        <span className={style.tech_line}>{"технологии ".repeat(16)}</span>
        <span className={style.tech_line}>{"технологии ".repeat(16)}</span>
        <span className={style.tech_line}>{"технологии ".repeat(16)}</span>
        <div className={style.tech_stack}>
            <TechCard type="f1">react</TechCard>
            <TechCard type="f1">html 5</TechCard>
            <TechCard type="o">css 3</TechCard>
            <TechCard type="f3">javascript</TechCard>
            <TechCard type="o">npm</TechCard>
            <TechCard type="f3">node js</TechCard>
            <TechCard type="f1">frameworks</TechCard>
            <TechCard type="f1">api</TechCard>
            <TechCard type="f1">redux</TechCard>
            <TechCard type="f2">babel</TechCard>
            <TechCard type="f3">bootstrap</TechCard>
            <TechCard type="o">scss</TechCard>
        </div>
    </div>
}

function TechCard({children, type}) {
    return <span className={style.tech_card + " " + style[type]}>
        #{children}
    </span>
}