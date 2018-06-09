import React from 'react'

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

export default Button
