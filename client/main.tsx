import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'


/**
 * Hydrate the root with React Dom
 */
hydrate(<App/>, document.getElementById('root'))
