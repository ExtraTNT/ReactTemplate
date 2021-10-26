import React from 'react'
import { memo } from 'react'
import { useHistory } from "react-router-dom"
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'

export const Footer = (props) => {
    const history = useHistory()
    const theme = useTheme()
    const classes = useControlStyles({...props, theme})

    return <div >
            footer
    </div>
}

export default memo(Footer)