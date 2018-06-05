import React, { Component } from 'react'

class Icon extends Component {
    handleClick = e => {
        this.props.onClick(e)
    }

    render() {
        const { size, name, cursor } = this.props

        return (
            <img
                onClick={this.handleClick}
                alt={name}
                src={require(`../../assets/icons/${name}.svg`)}
                style={{
                    width: size,
                    height: size,
                    cursor: cursor || '',
                }}
            />
        )
    }
}

export default Icon
