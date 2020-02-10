import React, { Component } from 'react';
import * as io from 'socket.io-client';
import './chat.component.css'
export class ChatComponent extends Component {
    socket;
    user;
    constructor() {
        super();
        this.socket = io.connect('http://localhost:8081');
        this.user = JSON.parse(localStorage.getItem('user'));
        this.state = {
            messages: [],
            requestData: {
                senderName: '',
                senderId: '',
                message: '',
                receiverName: '',
                receiverId: '',
            }
        }
    }

    componentDidMount() {
        this.socketBlock();
    }

    socketBlock() {
        this.socket.on('hello', (data) => {
            console.log('data in hello >>>', data);
        })
        this.socket.on('reply-msg', (msg) => {
            console.log('msg >>',msg);
            // let { messages } = this.state.messages
            // messages.push(msg);
            // this.setState((pre) => ({
            //     ...pre.requestData,
            //     messages: messages
            // }))

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { requestData } = this.state;
        requestData.time = Date.now();
        this.socket.emit('new-msg', requestData);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState((pre) => ({
            requestData: {
                ...pre.requestData,
                [name]: value
            }
        }))
    }

    render() {
        let msgData = this.state.messages.map((msg) => (
            <li>{msg}</li>
        ))
        return (
            <>
                <p>Let's Chat <ins>{this.user.username}</ins></p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="chat-container">
                            <ins>Messages</ins>
                            {msgData}
                        </div>
                        <form className="form-group" onSubmit={this.handleSubmit}>
                            <input name="message" type="text" onChange={this.handleChange} className="form-control"></input>
                            <button className="btn btn-success" type="submit">send</button>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4 chat-container">
                        <ins>Users</ins>
                    </div>

                </div>

            </>
        )
    }
}