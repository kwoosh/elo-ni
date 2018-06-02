import React from 'react'
import './Circle.css'

const Circle = ({ time, degree }) => {
    return (
        <article className="Circle">
            <div className="Circle__arrow-container" style={{ transform: `rotateZ(${degree}deg)` }}>
                <div className="Circle__arrow" />
            </div>
            <div className="Circle__center-text">{time}</div>
        </article>
    )
}

export default Circle
