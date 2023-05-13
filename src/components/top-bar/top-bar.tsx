import './top-bar.scss'
import React from "react";
import ChangeTheme from "../change-theme/change-theme";

const TopBar: React.FC = () => {
    function setTheme(theme: 'light-mode' | 'dark-mode') {
        localStorage.setItem('theme', theme);
    }
    return (
        <div className={"top-bar"}>
            <ChangeTheme />
        </div>
    )
}

export default TopBar;