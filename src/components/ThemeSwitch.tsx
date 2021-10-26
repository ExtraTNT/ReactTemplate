import * as React from 'react'
import { useState, useEffect } from 'react'
import { useThemeSwitch } from '../contexts/theme'
import { useTheme } from 'react-jss'
import useControlStyles from '../styles/controls'
import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'
import t77 from '../themes/t77'
import arcTheme from '../themes/arc'
import { Select } from 'grommet/components/Select'
import { clsj } from '../utils/joinClasses'
import Config from '../config'

export const ThemeSwitch = (props) => {

    const [, , setThemeContext] = useThemeSwitch()

    const themes = {
        'dark': darkTheme,
        'light': lightTheme,
        '77': t77,
        'arc': arcTheme
    }
    
    const [ selectedTheme, setSelectedTheme ] = useState<string>(localStorage.getItem('theme') || Config.defaultTheme)

    useEffect(() => {
        setThemeContext(themes[selectedTheme])
        localStorage.setItem('theme', selectedTheme)
    }, [selectedTheme])

    const theme = useTheme()
    const classes = useControlStyles({ ...props, theme })

    return <div className={clsj(classes.flexColumn, classes.nowrap, ...props.classNames)}>
        <Select options={['dark', 'light', '77', 'arc']} value={selectedTheme} onChange={({ option }) => setSelectedTheme(option)} />
    </div>
}