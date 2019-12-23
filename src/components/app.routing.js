// assume this file is routing configuration
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Register } from './register/register.component';
import { Login } from './login/login.component';
import Navigate from './header/navbar.component';
class About extends Component {

    render() {
        return (
            <div>
                <h2>About</h2>
                <p>I am About Page</p>
            </div>
        )
    }
}
class Home extends Component {

    render() {
        return (
            <div>
                <h2>Home</h2>
                <p>I am Home Page</p>
            </div>
        )
    }
}
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



const appRouting = () => {
    return (
        <Router>
            <Navigate />
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Router >
    )
}

export default appRouting;