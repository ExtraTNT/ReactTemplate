import React from 'react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'
import { StyledButton } from './StyledButton'

export const NavButton = (props) => {

    const theme = useTheme()
    const classes = useControlStyles({...props, theme})

    return <Link to={props.to}>
        <div className={classes.navButtonContainer}>
            <StyledButton onClick={() => null} text={props.text} fill/>
        </div>
    </Link>
}

export default memo(NavButton)