import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

/**
 * Create a Material UI Theme
 */
let theme = createMuiTheme({
    palette: {
        primary: { main: '#FBC02D' },
        secondary: { main: '#2d67fb' }
    },        
    overrides: {
        MuiTypography: {
            root: {
                textAlign: 'inherit'
            }
        },
        MuiCardActions: {
            root: {
                justifyContent: 'center'
            }
        },
        MuiFormControl: {
            root: {
                width: '80%',
                margin: '0 auto',
                display: 'flex'
            }
        },
        MuiTabs: {
            flexContainer: {
                justifyContent: 'center'
            }
        }
    }
})

/**
 * Use responsive font sizes
 */
theme = responsiveFontSizes(theme);

export default theme