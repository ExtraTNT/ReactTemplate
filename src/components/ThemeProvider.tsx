import React, { useState } from 'react'
import { ThemeProvider as ThemeProviderJSS } from 'react-jss'
import ThemeContext from '../contexts/theme'
import { Grommet } from 'grommet'
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState<any>({})
    const getTheme = () => theme
    return <ThemeContext.Provider value={[getTheme, theme, setTheme]}>
        <ThemeProviderJSS theme={theme}>
            <Grommet full cssVars={false} theme={theme}>
                {children}
            </Grommet>
        </ThemeProviderJSS>
    </ThemeContext.Provider>
}