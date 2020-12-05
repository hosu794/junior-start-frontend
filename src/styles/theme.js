import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {colors} from "./colors";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#90CAF9'
        },
        background: {
            paper: '#424242'
        },
        divider: 'rgba(255, 255, 255, 0.12)',
    },
    typography: {
        fontFamily: "Montserrat",
    },
    props: {
        MuiSvgIcon: {
            htmlColor: 'rgba(255, 255, 255)',
        }
    },
    overrides: {
        MuiPaper: {
            root: {
                color: 'white',
                padding: '1em'
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
        }
    }
});