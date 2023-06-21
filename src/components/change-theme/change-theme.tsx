import React from 'react';
import './change-theme.scss'
import useTheme from "../../hooks/useTheme";

const ChangeTheme: React.FC = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`change-theme ${theme === "dark-mode" ? "left" : "right"}`} onClick={toggleTheme}>
            <div className={`theme-button`}></div>
        </div>
    );
};

export default ChangeTheme;
