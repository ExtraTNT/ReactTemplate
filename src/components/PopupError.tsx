import React, { ReactElement } from 'react'
import { memo } from 'react'
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'
import { Card, CardBody, CardFooter, CardHeader } from 'grommet'
import { StyledButton } from './StyledButton'
import { clsj } from '../utils/joinClasses'
import { Popup } from './Popup'
import config from '../config'

interface PopupErrorProps {
    title: string
    text?: string | null
    onClick: () => void
    active: boolean
}

export const PopupError = ({title, text, onClick, active}: PopupErrorProps) => {

    const theme = useTheme()
    const classes = useControlStyles(theme)

    return <Popup active={active}>
            <Card className={clsj(classes.alignCenter, classes.justifyCenter)}>
                    <CardHeader pad="small" className={clsj(classes.middle)}><h1>{title || config.errorTitle}</h1></CardHeader>
                    <CardBody className={clsj(classes.middle)}><p>{text || config.errorMessage}</p></CardBody>
                    <CardFooter pad="small" className={clsj(classes.middle)}>
                        <StyledButton text={config.errorAknowledgement} onClick={onClick}></StyledButton>
                    </CardFooter>
            </Card>
  </Popup>
}

export default memo(PopupError)