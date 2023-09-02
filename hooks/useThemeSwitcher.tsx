import { useEffect, useState } from 'react'

const useThemeSwitcher = (): [
    string,
    React.Dispatch<React.SetStateAction<string>>,
] => {
    const [theme, setTheme] = useState<string>('')
    const activeTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme')
            setTheme(storedTheme || '')
        }
    }, [])

    useEffect(() => {
        const root = window.document.documentElement

        if (activeTheme && theme) {
            root.classList.remove(activeTheme)
            root.classList.add(theme)
            localStorage.setItem('theme', theme)
        }
    }, [theme, activeTheme])

    return [activeTheme, setTheme]
}

export default useThemeSwitcher
