import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#90CAF9'
        },
        background: {
            paper: '#424242'
        },
        divider: 'rgba(255, 255, 255, 0.12)'
    },
    props: {
        MuiSvgIcon: {
            htmlColor: 'rgba(255, 255, 255, 0.50)',
        }
    },
    overrides: {
        MuiInputBase: {
            input: {
                "&::placeholder": {
                    color: "white"
                },
                color: "white"
            }
        }
    }
});