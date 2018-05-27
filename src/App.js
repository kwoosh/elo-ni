import React, { Component } from 'react'

import Clock from './components/Clock/Clock'

class App extends Component {
    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState(prev => ({ seconds: prev.seconds + 1 }))
        }, 1000)
    }

    state = {
        seconds: 0,
    }

    render() {
        return (
            <div className="App">
                <Clock seconds={this.state.seconds} />
            </div>
        )
    }
}

export default App
