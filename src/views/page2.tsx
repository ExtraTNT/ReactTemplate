import React from 'react'
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'

export const Page2 = (props) => {
    const theme = useTheme()
    const classes = useControlStyles({...props, theme})

    return <div className={classes.middle}>
            <h1>Page 2</h1>
        </div>
}

export default Page2