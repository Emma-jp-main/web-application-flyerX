import {ReactNode, useState} from "react";
import {AppThemeContext, ThemeName} from "./AppThemeContext";
import {blueTheme, greenTheme, redTheme} from "../theme";
import {CssBaseline, ThemeProvider} from "@mui/material";


type Props = {
    children: React.ReactNode;
};

export function AppThemeProvider(props: Props) {
    // const [themeName, setThemeName] = useState<"green" | "blue">("green");

    const [themeName, setThemeName] = useState<ThemeName>(() => {
        const savedTheme = localStorage.getItem("themeName");
        if (savedTheme === "green" || savedTheme === "blue" || savedTheme === "red") {
            return savedTheme;
        }
        return "green";
    });

    function changeTheme(themeName: ThemeName) {
        setThemeName(themeName);
        localStorage.setItem("themeName", themeName);
    }

    let selectedTheme;
    if (themeName === "green") {
        selectedTheme = greenTheme;
    } else if (themeName === "blue") {
        selectedTheme = blueTheme;
    } else {
        selectedTheme = redTheme;
    }

    return (
        <AppThemeContext.Provider value={{themeName, changeThemeName: changeTheme}}>
            <ThemeProvider theme={selectedTheme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    );
}