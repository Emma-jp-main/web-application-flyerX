import {Components, Theme} from "@mui/material";


export const components: Components<Theme> = {
    MuiButton: {
        defaultProps: {
            disableElevation: true,
            variant: 'contained',
        },
        styleOverrides: {
            root: ({ theme, ownerState }) => ({
                textAlign: "center",
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
                padding: "8px 16px",
                transition: "all 0.2s ease-in-out",
                color: theme.palette.secondary.main,
                "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                    transform: "translateY(-1px)",
                    color: theme.palette.primary.dark
                },

                ...(ownerState.variant === "contained" &&
                    ownerState.color === "primary" && {
                        backgroundColor: theme.palette.primary.dark,
                        color: theme.palette.grey[100],

                        "&:hover": {
                            backgroundColor: theme.palette.secondary.contrastText,
                            color: theme.palette.grey[50],
                        },
                    }
                ),
            }),
        },
    },

    MuiPaper: {
        defaultProps: {
            elevation: 0,
        },
        styleOverrides: {
            root: ({ theme }) => ({
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: "14px",
                padding: "24px",
                backgroundColor: theme.palette.background.paper,
            }),
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: "10px",
                backgroundColor: theme.palette.grey[50],
                transition: "all 0.2s",
                "& fieldset": {
                    borderColor: theme.palette.divider,
                },
                "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                },
                "&.Mui-focused fieldset": {
                    borderWidth: "2px",
                },
            }),
        },
    },
    MuiAppBar: {
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(12px)",
                color: theme.palette.text.primary,
                borderBottom: `1px solid ${theme.palette.divider}`,
                boxShadow: "none",
            }),
        },
    },
    MuiListItemButton: {
        styleOverrides: {
            root: () => ({
                bordrRadius: "10px",
                margin: "2px 8px",
                "&.Mui-selected": {
                    backgroundColor: "accent.light",
                    color: "accent.contrastText",
                    "&.MuiListItemIcon-root": { color: "accent.main"},
                    "&:hover" : {backgroundColor: "primary.light"},
                },
            }),
        },
    },
    MuiTableCell: {
        styleOverrides: {
            head: ({theme}) => ({
                fontWeight: 600,
                backgroundColor: theme.palette.grey[50],
                color: theme.palette.text.secondary,
            }),
        },
    },
};