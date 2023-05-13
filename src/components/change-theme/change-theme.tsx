import React, { useState } from 'react';
import './change-theme.scss'

const ChangeTheme: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark-mode');

    const handleClick = () => {
        const newTheme = isDarkMode ? 'light-mode' : 'dark-mode';
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`change-theme ${isDarkMode ? "left" : "right"}`} onClick={handleClick}>
            <div className={`theme-button`}></div>
        </div>
    );
};

export default ChangeTheme;
