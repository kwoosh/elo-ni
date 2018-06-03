import React from 'react'

import './Input.css'

const Input = ({ type = 'text', placeholder, onInput, onChange }) => (
    <div className="Input">
        <input className="Input__field" type={type} placeholder={placeholder} onInput={onInput} onChange={onChange} />
    </div>
)

export default Input
