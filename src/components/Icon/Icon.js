import React, { Component } from 'react'

import PropTypes from 'prop-types'

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

Icon.propTypes = {
    size: PropTypes.string,
    cursor: PropTypes.string,
    name: PropTypes.string,
}

export default Icon
