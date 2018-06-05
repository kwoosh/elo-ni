import React, { Component } from 'react'

import Icon from '../Icon/Icon'

import './TextInput.css'

class TextInput extends Component {
    state = {
        value: '',
    }

    handleValueChanging = (value, eventName) => {
        this.setState(prev => ({ value }))

        if (this.props[eventName]) this.props[eventName](value)
    }

    clearValue = () => {
        this.setState(prev => ({ value: '' }))
    }

    render() {
        return (
            <div className="Input">
                <input
                    value={this.state.value}
                    className="Input__field"
                    type="text"
                    placeholder={this.props.placeholder}
                    onInput={e => this.handleValueChanging(e.target.value, 'onInput')}
                    onChange={e => this.handleValueChanging(e.target.value, 'onChange')}
                />
                {this.state.value && <Icon cursor="pointer" name="close" size="15px" onClick={this.clearValue} />}
            </div>
        )
    }
}

export default TextInput
