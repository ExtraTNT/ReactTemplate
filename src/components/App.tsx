import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../views/Layout'
import { Helmet } from 'react-helmet'
import { Empty } from '../views/404'
import { Page1 } from '../views/page1'
import { Page2 } from '../views/page2'
import { Page3 } from '../views/page3'
import { Home } from '../views/home'

export const App = (props) => {
    return <BrowserRouter>
        <Route path="/">
            <Helmet>
                <title>Website Title</title>
            </Helmet>
            <Layout >
                <Switch>
                    <Route path="/page1" component={Page1} />
                    <Route path="/page2" component={Page2} />
                    <Route path="/page3" component={Page3} />
                    <Route exact path="/" component={Home} />
                    <Route path="*" component={Empty} />
                </Switch>
            </Layout>
        </Route>
    </BrowserRouter>
}

export default App
