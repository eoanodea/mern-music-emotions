import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

/**
 * Create a Material UI Theme
 */
let theme = createMuiTheme({
    primary: { main: '#FBC02D' },
    secondary: { main: '#2d67fb' }
})

/**
 * Use responsive font sizes
 */
theme = responsiveFontSizes(theme);

export default theme