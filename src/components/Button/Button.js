// @flow
import React from 'react'
import './Button.css'

type Props = {
    onClick: () => void,
    text: string | number,
    type?: string,
}

const Button = ({ onClick, text, type }: Props) => (
    <button className={`Button Button--${type || 'light'}`} onClick={onClick}>
        {text}
    </button>
)

export default Button
