import React from 'react'
import { memo } from 'react'
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'
import { PopupError } from '../components/PopupError'

export const Page3 = (props) => {
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
            <h1>Page 3</h1>

            <PopupError title={errorPopupTitle} text={errorPopupText} onClick={handleClick} active={errorPopupActive}/>
            {/*
                you can also use a popup like this
                {errorPopupActive && <PopupError title={errorPopupTitle} text={errorPopupText} onClick={handleClick} active={true}/>}
            */}
        </div>
}

export default memo(Page3)