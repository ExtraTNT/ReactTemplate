import React, { ReactElement } from 'react'
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'
import { Card, CardBody, CardFooter, CardHeader } from 'grommet'
import { StyledButton } from './StyledButton'
import { clsj } from '../utils/joinClasses'
import { Popup } from './Popup'

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
                    <CardHeader pad="small" className={clsj(classes.middle)}><h1>{title}</h1></CardHeader>
                    {text && <CardBody className={clsj(classes.middle)}><p>{text}</p></CardBody>}
                    <CardFooter pad="small" className={clsj(classes.middle)}>
                        <StyledButton text="OK" onClick={onClick}></StyledButton>
                    </CardFooter>
            </Card>
  </Popup>
}

export default PopupError