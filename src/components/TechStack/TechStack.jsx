import style from "./style.module.css";

import { useTranslation } from "react-i18next";

export function TechStack() {
    const { t } = useTranslation();

    return <div className={style.wrapper}>
        {/*заменила 16 на 10, для плавной анимации и нам не нужно так много*/}
        <span className={style.tech_line}>{t("technologies").repeat(10)}</span>
        <span className={style.tech_line}>{t("technologies").repeat(10)}</span>
        <span className={style.tech_line}>{t("technologies").repeat(10)}</span>
        <span className={style.tech_line}>{t("technologies").repeat(10)}</span>
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
            <p className={style.text_down}>{t("and_much_more")}</p>
        </div>
       
    </div>
}

function TechCard({children, type}) {
    return <span className={style.tech_card + " " + style[type]}>
        #{children}
    </span>
}