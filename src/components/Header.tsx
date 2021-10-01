import React from 'react'
import { useHistory } from "react-router-dom"
import { useTheme } from 'react-jss'
import useControlStyles from '../styles/controls'
import { clsj } from '../utils/joinClasses'

export const Header = (props) => {
    const history = useHistory()
    const theme = useTheme()
    const classes = useControlStyles({ ...props, theme })
    return <div className={clsj(classes.flexRow, classes.justifySpageBetween)}>
        <h1 className={clsj(classes.title)} onClick={() => {history.push("/")}}>
            Website Title
        </h1>
        <div className={clsj(classes.flexColumn)}>
            <div className={clsj(classes.alignEnd)}>
                login section if needed
            </div>
        </div>
    </div>
}

export default Header