import React from 'react'
import { memo } from 'react'
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'

export const Home = (props) => {
    const theme = useTheme()
    const classes = useControlStyles({...props, theme})

    return <div className={classes.middle}>
            <h1>Home</h1>
        </div>
}

export default memo(Home)