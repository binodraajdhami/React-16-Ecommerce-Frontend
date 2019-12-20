import React from 'react';

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
    }

    watchNext() {
        this.setState({
            episode: this.state.episode + 1,
        })
    }

    // whenever a state is changed render method will be called
    render() {
        // 
        // this function required in class component
        // render will return single node
        console.log('render called >>');
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

// call bind apply
// bind scope bind===> context supply
