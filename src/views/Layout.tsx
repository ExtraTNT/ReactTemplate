import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Sidebar from '../components/Sidebar'
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'
import { clsj } from '../utils/joinClasses'


export const Layout = (props) => {

    const theme = useTheme()
    const classes = useControlStyles({ ...props, theme })


    return <div className={clsj(classes.layout, classes.flexColumn, classes.grow, classes.app)}>
        <Header></Header>
        <div className={clsj(classes.flexRow, classes.grow, classes.page)}>
            <Sidebar></Sidebar>
            <div className={clsj(classes.flexColumn, classes.content, classes.grow, classes.spaceBefore)}>
                {props.children}
            </div>
        </div>
        <Footer></Footer>
    </div>
}

export default Layout
