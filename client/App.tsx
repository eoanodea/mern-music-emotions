import { hot } from 'react-hot-loader'
import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter as Router} from 'react-router-dom'
import {MuiThemeProvider} from '@material-ui/core/styles'
import theme from './assets/js/theme'

/**
 * Frontend Entrypoint for the Application
 */
const App = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <MainRouter />
    </MuiThemeProvider>
  </Router>
)

export default hot(module)(App)
