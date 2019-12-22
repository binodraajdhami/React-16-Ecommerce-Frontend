import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
        this.watchNext = this.watchNext.bind(this);
        console.log("i am constructor block");
    }

    watchNext() {
        this.myInterval = setInterval(() => {
            this.setState({
                episode: this.state.episode + 1,
            })
        }, 2000);
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
                <h1>Lets watch {this.state.title}</h1>
                <h2>Episode: {this.state.episode},</h2>
                <p>Narcos is good</p>
                <button onClick={this.watchNext}>watch next</button>
            </div>
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
