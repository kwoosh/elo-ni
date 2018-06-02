import React, { Component } from 'react'
import Stopwatch from './components/Stopwatch/Stopwatch'
import Snippets from './components/Snippets/Snippets'

class App extends Component {
    tabs = ['Stopwatch', 'Snippets']

    state = {
        screen: 'stopwatch',
        snippets: [],
    }

    toggleTab = tab => () => {
        this.setState(prev => ({ screen: tab.toLowerCase() }))
    }

    handleSnippetCreation = snippet => {
        console.log('From app:', snippet)
        this.setState(({ snippets }) => ({ snippets: [...snippets, snippet] }))
    }

    render() {
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
                <Stopwatch visible={this.state.screen === 'stopwatch'} onSippet={this.handleSnippetCreation} />
            </div>
        )
    }
}

export default App
