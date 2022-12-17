import {ThemeContext, themes} from "../../contexts/ThemeContext";

export const ColorImg = ({className = "", src_white, src_dark, alt}) => {
    return (
        <ThemeContext.Consumer>
            {({ theme, setTheme }) => (
                <img className={className} src={(theme === themes.light)?src_white:src_dark} alt={alt}/>
            )}
        </ThemeContext.Consumer>
    )
}