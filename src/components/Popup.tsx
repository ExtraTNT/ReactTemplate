import React, { ReactElement } from 'react'
import { memo } from 'react'
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'
import { clsj } from '../utils/joinClasses'

interface PopupProps {
    children: ReactElement
    active: boolean
}

export const Popup = ({children, active}: PopupProps) => {

    const theme = useTheme()
    const classes = useControlStyles(theme)
    return <div className={clsj(classes.popup, classes.blurBackgroundMi, active? null: classes.invisible)}>
        {children}
  </div>
}

export default memo(Popup)