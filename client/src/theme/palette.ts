import {PaletteOptions} from "@mui/material";


declare module '@mui/material/styles' {
    interface Palette {
        accent: Palette['primary'];
    }
    interface PaletteOptions {
        accent?: PaletteOptions['primary'];
    }
}

export const palette: PaletteOptions = {
    mode: 'light',

    primary: {
        //main: '#ffb3bf',
        main: '#98D8C8',
        //dark: '#b37d8b',
        dark: '#65A79D',
        //light: '#ffd9e3',
        light: '#C7E9E3',
        contrastText: '#FFFFFF',
        //button: '#FFFFFF',
    },
    secondary: {
        main: '#4e8279',
        dark: '#E8FEDC',
        contrastText: '#537e76',
    },
    background: {
        default: '#F9FFF6',
        paper: '#F9FFF6',
    },
    text: {
        primary: '#111827',
        secondary: '#f2faf6',
    },
    grey: {
        50: '#f8f8f8',
        100: '#f4f4f5',
        200: '#404040',
    },
    divider: '#e4e4e7'
};

export const greenPalette: PaletteOptions = {
    mode: 'light',

    primary: {
        main: '#98D8C8',
        dark: '#65A79D',
        light: '#C7E9E3',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#4e8279',
        dark: '#E8FEDC',
        light: '#72c3b4',
        contrastText: '#537e76',
    },
    accent: {
      main: '#82bd9f',
      dark: '#025028',
      light: '#b7efe5',
      contrastText: '#5dc591',
    },
    background: {
        default: '#F9FFF6',
        paper: '#F9FFF6',
    },
    text: {
        primary: '#111827',
        secondary: '#f2faf6',
    },
    grey: {
        50: '#f8f8f8',
        100: '#f4f4f5',
        200: '#404040',
    },
    divider: '#e4e4e7'
};

export const bluePalette: PaletteOptions = {
    mode: 'light',

    primary: {
        main: '#5B74BF',
        dark: '#3A5199',
        light: '#E3EBFF',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#4660AE',
        dark: '#D3DEF9',
        light: '#6F91D1',
        contrastText: '#3A5199',
    },
    accent: {
        main: '#82a7d9',
        dark: '#233A7A',
        light: '#d6e2ff',
        contrastText: '#709be8',
    },
    background: {
        default: '#F8FAFF',
        paper: '#F9FDFF',
    },
    text: {
        primary: '#111827',
        secondary: '#f2faf6',
    },
    grey: {
        50: '#f8f8f8',
        100: '#f4f4f5',
        200: '#404040',
    },
    divider: '#e4e4e7'
};

export const redPalette: PaletteOptions = {
    mode: 'light',

    primary: {
        main: '#98D8C8',
        dark: '#65A79D',
        light: '#C7E9E3',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#4e8279',
        dark: '#E8FEDC',
        light: '#72c3b4',
        contrastText: '#537e76',
    },
    accent: {
        main: '#82bd9f',
        dark: '#025028',
        light: '#b7efe5',
        contrastText: '#5dc591',
    },
    background: {
        default: '#F9FFF6',
        paper: '#F9FFF6',
    },
    text: {
        primary: '#111827',
        secondary: '#f2faf6',
    },
    grey: {
        50: '#f8f8f8',
        100: '#f4f4f5',
        200: '#404040',
    },
    divider: '#e4e4e7'
};