// @flow
import React, { Component } from 'react'
import Circle from '../Circle/Circle'
import Button from '../Button/Button'
import './Stopwatch.css'

type State = {
    milliseconds: number,
}

class Stopwatch extends Component<{}, State> {
    interval: null | IntervalID

    state = {
        milliseconds: 0,
    }

    constructor(props: {}) {
        super(props)

        this.interval = null
    }

    start = () => {
        if (this.interval) return
        this.interval = setInterval(() => {
            this.setState(({ milliseconds }) => ({ milliseconds: milliseconds + 100 }))
        }, 100)
    }

    stop = () => {
        if (this.interval) clearInterval(this.interval)
        this.interval = null
    }

    clear = () => {
        this.stop()
        this.setState({ milliseconds: 0 })
    }

    formatTime = (millisecondsRaw: number) => {
        const millisecondsModule = millisecondsRaw % 1000
        const totalSeconds = (millisecondsRaw - millisecondsModule) / 1000

        const milli = millisecondsModule / 100
        const sec = totalSeconds % 60
        const min = (totalSeconds - totalSeconds % 60) / 60

        return { minutes: min, seconds: sec, milliseconds: milli }
    }

    render() {
        const { minutes, seconds, milliseconds } = this.formatTime(this.state.milliseconds)
        const formatted = `${minutes}:${seconds}.${milliseconds}`
        const arrowDegree = 360 / 60 * (seconds + minutes * 60)

        return (
            <div className="Stopwatch">
                <Circle time={formatted} degree={arrowDegree} />

                <div className="Stopwatch__actions">
                    <Button onClick={this.start} text="start" />
                    <Button onClick={this.stop} text="stop" />
                    <Button onClick={this.clear} text="clear" />
                </div>
            </div>
        )
    }
}

export default Stopwatch
