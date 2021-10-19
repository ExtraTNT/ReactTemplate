import React from 'react'
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'
import { PopupError } from '../components/PopupError'

export const Page1 = (props) => {
    const theme = useTheme()
    const classes = useControlStyles({...props, theme})

    const [errorPopupActive, setErrorPopupActive] = React.useState(false)
    const [errorPopupText, setErrorPopupText] = React.useState('')
    const [errorPopupTitle, setErrorPopupTitle] = React.useState('')
    
    const handleClick = () => {
        // handle what should happen after aknowledge the error popup
        setErrorPopupActive(false)
    }

    return <div className={classes.middle}>
            <h1>Page 1</h1>

            <PopupError title={errorPopupTitle} text={errorPopupText} onClick={handleClick} active={errorPopupActive}></PopupError>
        </div>
}

export default Page1