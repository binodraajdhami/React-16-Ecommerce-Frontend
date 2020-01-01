// assume this file is routing configuration
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Register } from './components/register/register.component';
import { Login } from './components/login/login.component';
import NavBar from './components/header/navbar.component';
import SideBar from './components/sidebar/sidebar.component';
import { Dashboard } from './components/dashboard/dashboard.component';

class NotFound extends Component {

    render() {
        return (
            <div>
                <h2>Page Not Found</h2>
                <p>I am 404 Error handler page</p>
            </div>
        )
    }
}

const ProtectedRoute = ({ component: Component, ...abc }) => {
    return (
        <Route path={abc.path} render={() => {
            return (
                localStorage.getItem('token')
                    ? (
                        <>
                            <div className="navmenu">
                                <NavBar />
                            </div>
                            <div className="sidemenu">
                                <SideBar />
                            </div>
                            <Component />
                        </>
                    )
                    : (
                        <Redirect to="/" /> // TODO redirect will take additional props
                    )
            )
        }} />
    )
}



const appRouting = () => {
    return (
        <Router>
            <div>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        {/* <Route path="/home" component={Home}></Route> */}
                        {/* <Route path="/about" component={About}></Route> */}
                        <ProtectedRoute path="/dashboard" component={Dashboard} />
                        <ProtectedRoute path="/add-product" component={Dashboard} />
                        <ProtectedRoute path="/edit-product" component={Dashboard} />
                        <Route component={NotFound}></Route>
                    </Switch>
                </div>

            </div>

        </Router >
    )
}

export default appRouting;