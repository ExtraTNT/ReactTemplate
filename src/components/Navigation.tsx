import React, { useState, useEffect } from 'react'
import { memo } from 'react'
import { useTheme } from 'react-jss'
import useControlStyles from '../styles/controls'
import { clsj } from '../utils/joinClasses'

import { NavButton } from './NavButton'

export const Navigation = (props) => {
    const theme = useTheme()
    const classes = useControlStyles({...props, theme})

    return <nav className={clsj(classes.flexColumn, classes.nowrap)}>
            <NavButton text={"Home"} to={`/`}></NavButton>
            <NavButton text={"Page 1"} to={`/page1`}></NavButton>
            <NavButton text={"Page 2"} to={`/page2`}></NavButton>
            <NavButton text={"Page 3"} to={`/page3`}></NavButton>
        </nav>
}

export default memo(Navigation)