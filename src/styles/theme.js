import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {colors} from "./colors";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.primary
        },
        background: {
            paper: colors.navbar
        },
        divider: 'rgba(255, 255, 255, 0.12)',
    },
    typography: {
        fontFamily: "Montserrat",
    },
    props: {
        MuiSvgIcon: {
            htmlColor: 'inherit',
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                color: "white"
            }
        },
        MuiPaper: {
            root: {
                color: 'white',
                display: "flex",
                outline: "none"
            },
        },
        MuiInputBase: {
            input: {
                "&::placeholder": {
                    color: "white"
                },
                color: "white"
            }
        },
        MuiFormLabel: {
            root: {
                color: '#c4c4c4'
            }
        },
        MuiAppBar: {
            colorPrimary: {
                color: 'white',
                backgroundColor: colors.navbar
            }
        },
        MuiLink: {
            button: {
                font: "inherit",
                verticalAlign: "inherit"
            }
        },
        MuiOutlinedInput: {
            input: {
                padding: "0.9em 0.6em"
            }
        },
        MuiInputLabel: {
            outlined: {
                transform: "translate(15px, 17px) scale(1)"
            }
        },
        MuiButton: {
            containedPrimary: {
                color: "white",
                backgroundColor: `${colors.darkgray}`,
                "&:hover": {
                    backgroundColor: "rgba(0,0,0, 0.4)"
                }
            }
        },
        MuiAlert: {
            standardSuccess: {
                color: "rgb(183, 223, 185)",
                backgroundColor: "rgb(7, 17, 7)"
            },
            icon: {
                color: "#4caf50"
            }
        },
        MuiIcon: {
            root: {
                color: "inherit"
            }
        },
        MuiIconButton: {
            root: {
                color: "inherit"
            }
        },
        MuiListItemIcon: {
            root: {
                color: "inherit"
            }
        }
    }
});