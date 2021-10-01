import React from 'react'
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'

export const Empty = (props) => {
    const theme = useTheme()
    const classes = useControlStyles({...props, theme})
    return <div>
        <h1 className={classes.middle}>404</h1>
        <h2 className={classes.middle}>Path not found</h2>
        {props.children}
        <p className={classes.middle}>⛾</p>
    </div>
}

export default Empty
