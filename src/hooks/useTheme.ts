import { useState, useEffect } from 'react';

function useTheme() {
    const defaultTheme = localStorage.getItem('theme') === 'light-mode' ? 'light-mode' : 'dark-mode';
    const [theme, setTheme] = useState<'light-mode' | 'dark-mode'>(defaultTheme);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const body = document.getElementsByTagName('body')[0];
        body.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
    };

    return { theme, toggleTheme };
}

export default useTheme;
