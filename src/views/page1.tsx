import React from 'react'
import { memo } from 'react'
import useControlStyles from '../styles/controls'
import { useTheme } from 'react-jss'
import { PopupError } from '../components/PopupError'
import { useFetch } from 'usehooks-ts'

const url = `http://jsonplaceholder.typicode.com/posts`

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export const Page1 = (props) => {
    const theme = useTheme()
    const classes = useControlStyles({...props, theme})

    const [errorPopupActive, setErrorPopupActive] = React.useState(false)
    const [errorPopupMessage, setErrorPopupMessage] = React.useState('')
    const [errorPopupTitle, setErrorPopupTitle] = React.useState('')
    const [errorCount, setErrorCount] = React.useState(0) // to not rerender in to a infinity loop

    const { data, error } = useFetch<Post[]>(url)

    const handleClick = () => {
        // handle what should happen after aknowledge the error popup
        setErrorPopupActive(false)
    }
    if (error) {
        if (errorCount < 1) {
            setErrorPopupActive(true)
            setErrorPopupMessage(error.message)
            setErrorPopupTitle(error.name)
            setErrorCount(errorCount + 1)
        }
    }

    return <div>
            <h1 className={classes.middle}>Page 1 API Example</h1>
            <div>
                {data && data.map((post, index) => {
                    return <div key={index}>
                        <h1 className={classes.bold}>{post.id + ' ' + post.title}</h1>
                        <p className={classes.darkPrimaryColor}>{post.body}</p>
                    </div> 
                })}
                {!data && <h1 className={classes.bold} >Loading...</h1>}
            </div>
            
            <PopupError title={errorPopupTitle} text={errorPopupMessage} onClick={handleClick} active={errorPopupActive}/>  
        </div>
}

export default memo(Page1)