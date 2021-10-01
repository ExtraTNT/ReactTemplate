import * as React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import {ThemeProvider} from './components/ThemeProvider'
import '@fontsource/roboto'

render(
    <ThemeProvider>
            <App/>
    </ThemeProvider>
, document.getElementById('app'))