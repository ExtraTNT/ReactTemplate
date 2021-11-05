import React from 'react'
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'
import config from '../config'
import { clsj } from '../utils/joinClasses'

export const Empty = (props) => {
    const theme = useTheme()
    const classes = useControlStyles({...props, theme})
    return <div>
        <h1 className={clsj(classes.middle, classes.title)}>{config.notFoundTitle}</h1>
        <h2 className={classes.middle}>{config.notFoundMessage}</h2>
        {props.children}
        <p className={classes.middle}>{config.notFoundFunnyMessage}</p>
    </div>
}

export default Empty
