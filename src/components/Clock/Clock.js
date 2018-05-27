// @flow
import React, { Component } from 'react'
import './Clock.css'

class Clock extends Component<{ seconds: number }> {
    render() {
        const degree = 360 / 60 * this.props.seconds

        return (
            <article className="clock simple">
                <div
                    className="seconds-container"
                    style={{
                        transform: `rotateZ(${degree}deg)`,
                    }}
                >
                    <div className="seconds" />
                </div>
            </article>
        )
    }
}

export default Clock
