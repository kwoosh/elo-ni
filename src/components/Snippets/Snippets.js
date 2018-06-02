import React from 'react'

const Snippets = ({ visible }) => {
    return <div className={`Snippets ${visible ? '' : 'hidden'}`} />
}

export default Snippets
