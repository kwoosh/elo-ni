// @flow
import React, { Component } from 'react'
import Clock from './components/Clock/Clock'

type State = {
    seconds: number,
}

class App extends Component<{}, State> {
    state = {
        seconds: 0,
    }

    constructor(props: {}) {
        super(props)

        setInterval(() => {
            this.setState(prev => ({ seconds: prev.seconds + 1 }))
        }, 1000)
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
