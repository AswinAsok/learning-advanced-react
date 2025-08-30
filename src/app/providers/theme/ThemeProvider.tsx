import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeType } from "@/shared/config";
import { useEffect, useState } from "react";

interface ThemeProviderProps {
    children: React.ReactNode;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) || Theme.BLUE;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeType>(defaultTheme);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
