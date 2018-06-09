import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'

import './Button.css'

const Button = ({ onClick, text, icon = '' }) => (
    <button className="Button" onClick={onClick}>
        {text && <div className="Button__text">{text}</div>}
        {icon && (
            <div className="Button__icon">
                <Icon size="11px" name={icon} />
            </div>
        )}
    </button>
)

Button.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
