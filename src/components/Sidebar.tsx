import { Sidebar } from 'grommet/components/Sidebar'
import React, { useState } from 'react'
import { memo } from 'react'
import { useTheme } from 'react-jss'
import useControlStyles from '../styles/controls'
import { ThemeSwitch } from './ThemeSwitch'
import {UnorderedList, CaretPrevious }  from 'grommet-icons'
import { clsj } from '../utils/joinClasses'
import { Navigation } from './Navigation'
import StyledButton from './StyledButton'

export const Sidebar2 = (props) => {
    const theme = useTheme()
    const classes = useControlStyles({...props, theme})
    const [ isSmall, setSize ] = useState(false)
    const toggleSize = () => {
      setSize(!isSmall)
    }
    return <Sidebar background="brand" round="small" className={!isSmall?classes.sidebar: classes.smallSidebar}
    header={
      <div>
        <StyledButton
          onClick={toggleSize}
          icon={
            isSmall?
             <UnorderedList /> : <CaretPrevious />
          }
       />
      </div>
    }
    footer={
      <ThemeSwitch classNames={isSmall? [classes.invisible] : []}></ThemeSwitch>
    }
  >
    {!isSmall ?
      <Navigation></Navigation>
      :null}
  </Sidebar>
}

export default memo(Sidebar2)