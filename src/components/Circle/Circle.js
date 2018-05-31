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
                <div
                    className="Circle__center-text"
                    style={{ transform: `translate(-50%, -50%) rotateZ(${-degree}deg)` }}
                >
                    {time}
                </div>
            </div>
        </article>
    )
}

export default Circle
