// @flow
import React from 'react'
import './Circle.css'

type Props = {
    time: string,
    degree: number,
}

const Circle = ({ time, degree }: Props) => {
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
