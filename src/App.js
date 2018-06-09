import React, { Component } from 'react'

import Stopwatch from './components/Stopwatch/Stopwatch'
import Snippet from './components/Snippet/Snippet'

class App extends Component {
    tabs = ['Stopwatch', 'Snippets']

    state = {
        screen: 'stopwatch',
        snippets: [],
    }

    getLastSnippetId = () =>
        this.state.snippets.map(({ id }) => id).reduce((prev, curr) => (curr > prev ? curr : prev), 0)

    toggleTab = tab => () => {
        this.setState(prev => ({ screen: tab.toLowerCase() }))
    }

    handleCreateSnippet = snippet => {
        this.setState(({ snippets }) => ({ snippets: [...snippets, snippet] }))
    }

    handleDeleteSnippet = id => {
        const snippets = this.state.snippets.filter(snippet => snippet.id !== id)
        this.setState(() => ({ snippets }))
    }

    // componentWillMount() {
    //     const snippets = JSON.parse(localStorage.getItem('snippets') || JSON.stringify([]))
    // }

    // componentDidUpdate() {
    //     localStorage.setItem('snippets', JSON.stringify(this.state.snippets))
    // }

    render() {
        const Snippets = (
            <ul className={`Snippets ${this.state.screen === 'snippets' ? '' : 'hidden'}`}>
                {this.state.snippets.map(snippet => (
                    <Snippet key={snippet.id} snippet={snippet} onDelete={this.handleDeleteSnippet} />
                ))}
            </ul>
        )

        return (
            <div className="App">
                <ul className="App__tabs">
                    {this.tabs.map((tab, i) => (
                        <li key={i} onClick={this.toggleTab(tab)}>
                            {tab}
                        </li>
                    ))}
                </ul>

                {Snippets}

                <Stopwatch
                    visible={this.state.screen === 'stopwatch'}
                    onSippet={this.handleCreateSnippet}
                    lastSnippetId={this.getLastSnippetId()}
                />
            </div>
        )
    }
}

export default App
