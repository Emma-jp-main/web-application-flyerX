import {createContext} from "react";


export type ThemeName = "green" | "blue" | "red";

export type AppThemeContextValue = {
    themeName: ThemeName;
    changeThemeName: (themeName: ThemeName) => void;
}

export const AppThemeContext
    = createContext<AppThemeContextValue | null>(null);