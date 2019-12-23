import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Broadway',
            password: 'testing',
            remember_me: true,
            episode: 1,
            title: "Narcos"
        }
        console.log("i am constructor block");
    }

    handleSubmit() {

    }

    componentWillMount() {
        console.log('it is life cycle state which will execute before rendering')
    }

    componentDidMount() {
        console.log('after render completed')
    }

    componentDidUpdate(previousProps, previousState) {
        console.log('previous props .>', previousProps);
        console.log('previous state .>', previousState);
        console.log('update ')
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);

        console.log('component destroyed');
    }
    // whenever a state is changed render method will be called
    render() {
        console.log('render called');
        // 
        // this function required in class component
        // render will return single node
        return (
            <div>
                <h2>Login</h2>
                <p>Please provide your details to login</p>
                <form className="form-group">
                    <label htmlFor="username">Username</label>
                    <input name="username" className="form-control" id="username" onChange={this.handleChange} type="text" placeholder="Username" />
                    <label htmlFor="password">Password</label>
                    <input name="password" className="form-control" id="password" onChange={this.handleChange} type="text" placeholder="Password" />
                    <br></br>
                    <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Register</button>
                </form>
                <p> Don't have an Account?</p>
                <p>Register <NavLink to="/register">here</NavLink></p>
            </div >
        )
    }
}

export class Auth extends Component {
    constructor() {
        super();
        this.state = {};
    }

    mount() {
        ReactDOM.render(<Login name='abcd'></Login>, document.getElementById('login'))
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('login'));
    }

    render() {
        return (
            <div>
                <p>I am parent component</p>
                <button onClick={this.mount} >mount</button>
                <button onClick={this.unmount} >unmount</button>
                <div id="login"></div>
            </div>
        )
    }
}

// call bind apply
// bind scope bind===> context supply
