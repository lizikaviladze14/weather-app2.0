import './top-bar.scss'
import React from "react";
import ChangeTheme from "../change-theme/change-theme";

const TopBar: React.FC = () => {

    return (
        <div className={"top-bar"}>
            <ChangeTheme />
        </div>
    )
}

export default TopBar;