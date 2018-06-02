import React from 'react'
import './Button.css'

const Button = ({ onClick, text, type }) => (
    <button className={`Button Button--${type || 'light'}`} onClick={onClick}>
        {text}
    </button>
)

export default Button
