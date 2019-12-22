import React, { Component } from 'react';

import './register.component.css';

export class Register extends Component {

    constructor() {
        super();
        this.state = {
            username: null,
            password: null,
            name: null,
            email: null,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log('event name >>', e.target.name);
        console.log('event value >>', e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();

        // i should get form data here
        // if form data is ready call BE with those data
        // navigation

        // routing ==>navigation
        // axios // promise
        // rxjs // observables
    }

    render() {
        let form = (
            <div className="register-container">
                <h2>Register</h2>
                <p>Please provide your details to register</p>
                <form className="form-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" className="form-control" id="name" onChange={this.handleChange} type="text" placeholder="Name" />
                    <label htmlFor="email">Email</label>
                    <input name="email" className="form-control" id="email" onChange={this.handleChange} type="text" placeholder="Email" />
                    <label htmlFor="username">Username</label>
                    <input name="username" className="form-control" id="username" onChange={this.handleChange} type="text" placeholder="Username" />
                    <label htmlFor="password">Password</label>
                    <input name="password" className="form-control" id="password" onChange={this.handleChange} type="text" placeholder="Password" />
                    <br></br>
                    <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Register</button>
                </form>
                <p> Already Registered</p>
                <p>back to <a href="/login">login</a></p>
            </div>

        );
        return form;
    }

}