import {createTheme} from "@mui/material";
import {greenPalette, palette} from "./palette";
import {components} from "./components";
import {blue, red} from "@mui/material/colors";


export const theme = createTheme({
    palette,
    components,
    shape: {borderRadius: 12},
    typography: {
        fontFamily: '"Inter", "Noto Sans JP", sans-serif',
        h1: {fontWeight: 800, letterSpacing: '-0.02em'},
        h4: {fontWeight: 700, letterSpacing: '-0.02em'},
        h6: {fontSize: '1rem', fontWeight: 600},
        body1: {fontSize: '0.9375rem', lineHeight: 1.6},
        button: {textTransform: 'none'},
    },
});

export const greenTheme = createTheme({
    palette: greenPalette,
    components,
});

export const blueTheme = createTheme({
    palette: bluePalette,
    components,
});

export const redTheme = createTheme({
    palette: redPalette,
    components,
});