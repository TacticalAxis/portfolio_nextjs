import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState('');
	const activeTheme = theme === 'dark' ? 'light' : 'dark';

	useEffect(() => {
		if (typeof window !== 'undefined') {
		  setTheme(localStorage.theme || '');
		}
	}, []);

	useEffect(() => {
		const root = window.document.documentElement;

		if (activeTheme && theme) {
			root.classList.remove(activeTheme);
			root.classList.add(theme);
			localStorage.setItem('theme', theme);
		}
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
};

export default useThemeSwitcher;
