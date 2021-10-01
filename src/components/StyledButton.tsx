import React, { ReactElement } from 'react'
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'
import { Button } from 'grommet/components/Button'
import { clsj } from '../utils/joinClasses'

interface ButtonProps {
    fill?: boolean
    text?: string | null
    icon?: ReactElement | null
    className?: string
    onClick: () => void
}

export const StyledButton = ({fill, text, icon, className, onClick}: ButtonProps) => {

    const theme = useTheme()
    const classes = useControlStyles(theme)

    return <Button
            className={clsj(className, classes.button, (fill? classes.fill: undefined))}
            onClick={onClick}
            label={text}
            icon={icon}
        >
        </Button>
}

export default StyledButton