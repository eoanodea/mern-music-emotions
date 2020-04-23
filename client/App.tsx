/*
 * File: App.tsx
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 3:35:33 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Frontend Entrypoint for the Application
 * Last Modified: Thursday, 23rd April 2020 5:26:38 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */



import { hot } from 'react-hot-loader'
import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter as Router} from 'react-router-dom'
import {MuiThemeProvider} from '@material-ui/core/styles'
import theme from './assets/js/theme'

const App = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <MainRouter />
    </MuiThemeProvider>
  </Router>
)

export default hot(module)(App)
