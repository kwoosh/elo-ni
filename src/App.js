import React, { Component } from 'react'

import Stopwatch from './components/Stopwatch/Stopwatch'
import Snippets from './components/Snippets/Snippets'

class App extends Component {
    tabs = ['Stopwatch', 'Snippets']

    state = {
        screen: 'stopwatch',
        snippets: [],
    }

    getLastSnippetId = arr => arr.reduce((prev, curr) => (curr > prev ? curr : prev), 0)

    toggleTab = tab => () => {
        this.setState(prev => ({ screen: tab.toLowerCase() }))
    }

    handleSnippetCreation = snippet => {
        this.setState(({ snippets }) => ({ snippets: [...snippets, snippet] }))
    }

    render() {
        const lastSnippetId = this.getLastSnippetId(this.state.snippets.map(({ id }) => id))

        return (
            <div className="App">
                <ul className="App__tabs">
                    {this.tabs.map((tab, i) => (
                        <li key={i} onClick={this.toggleTab(tab)}>
                            {tab}
                        </li>
                    ))}
                </ul>

                <Snippets visible={this.state.screen === 'snippets'} />
                <Stopwatch
                    visible={this.state.screen === 'stopwatch'}
                    onSippet={this.handleSnippetCreation}
                    lastSnippetId={lastSnippetId}
                />
            </div>
        )
    }
}

export default App
