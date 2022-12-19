import style from "./style.module.css";
import projects from "./projects";
import arrow from "./arrow.svg";
import {useEffect, useState} from "react";
import {Footer} from "../../components/Footer/Footer";

function parseAllTags() {
    let tags = {};
    projects.forEach(value => {
        value.tags.forEach(tag => {
            if (tags[tag] === undefined) {
                tags[tag] = 1;
            } else {
                tags[tag]++;
            }
        });
    });
    return tags;
}

function Tag({tag, active, onChange}) {
    const renderTag = typeof tag === "string" ? [tag, ""] : tag

    let cn = style.tag;

    if (active) {
        cn += " " + style.tag_active;
    }

    return <div className={cn} onClick={onChange}>
        <span>#{renderTag[0]}</span>
        <span>{renderTag[1] === 1 ? " 1" : " " + renderTag[1]}</span>
    </div>
}

function Project({project}) {
    return <div className={style.project}>
        <div className={style.project__header}>
            <span>{project.author}</span>
            <a href={project.link} target="_blank" rel="noreferrer">Смотреть<img src={arrow} alt="arrow"/></a>
        </div>
        <div className={style.project__tags}>
            {
                project.tags.map((t, idx) => <Tag key={idx} tag={t}/>)
            }
        </div>
        <h2 className={style.project__name}>{project.name}</h2>
        <span className={style.project__description}>{project.description}</span>
        <img className={style.project__image} src={require("./images/" + project.image)} alt="тут должна быть картинка, но ее украли"/>
    </div>
}

export function PortfolioPage() {
    const [tags, setTags] = useState({});
    const [activeTags, setActiveTags] = useState({});

    useEffect(() => {
        setTags(parseAllTags());
    }, []);

    return <>
        <div className={style.wrapper}>
        <h1 className={style.projects_header}>проекты</h1>
            <div className={style.projects_wrapper}>
                <aside className={style.tags}>
                    <span className={style.tags__header}>Теги:</span>
                    <div className={style.tags_container}>
                        {
                            Object.keys(tags).map((tag, idx) =>
                                <Tag
                                    key={idx}
                                    tag={[tag, Object.values(tags)[idx]]}
                                    onChange={() => setActiveTags({...activeTags, [Object.keys(tags)[idx]]: !activeTags[Object.keys(tags)[idx]]})}
                                    active={activeTags[Object.keys(tags)[idx]]}
                                />)
                        }
                    </div>
                </aside>
                <div className={style.projects_container}>
                    {
                        filterByTags(activeTags, projects).map((pr, idx) => <Project key={idx} project={pr}/> )
                    }
                </div>
            </div>
        </div>
        <Footer/>
    </>
}

function anyTagsActive(tags) {
    let active = false;
    Object.values(tags).forEach(e => {
        if (e) {
            active = true;
        }
    });

    return active;
}

function containTag(pr, tags) {
    let res = true;
    tags.forEach(t => {
        if (pr.tags.indexOf(t) === -1) {
            res = false;
        }
    });
    return res;
}

function filterByTags(tags, projects) {
    if (!anyTagsActive(tags)) {
        return projects;
    }

    let activeTags = [];
    Object.keys(tags).forEach(k => {
        if (tags[k]) {
            activeTags.push(k);
        }
    });
    let filtered = [];

    projects.forEach(p => {
        if (containTag(p, activeTags)) {
            filtered.push(p);
        }
    });

    return filtered;
}