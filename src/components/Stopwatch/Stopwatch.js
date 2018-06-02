import React, { Component } from 'react'
import Circle from '../Circle/Circle'
import Button from '../Button/Button'
import './Stopwatch.css'

class Stopwatch extends Component {
    state = {
        milliseconds: 0,
    }

    constructor(props: Props) {
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

    createSnippet = time => () => {
        const snippet = { time, date: new Date(Date.now()).toString() }

        this.props.onSippet(snippet)
    }

    getTimeSample = (millisecondsRaw: number) => {
        const millisecondsModule = millisecondsRaw % 1000
        const totalSeconds = (millisecondsRaw - millisecondsModule) / 1000

        const milli = millisecondsModule / 100
        const sec = totalSeconds % 60
        const min = (totalSeconds - totalSeconds % 60) / 60

        return { minutes: min, seconds: sec, milliseconds: milli }
    }

    getFormatedTime = ({ minutes, seconds, milliseconds }) => `${minutes}:${seconds}.${milliseconds}`

    getArrowDegree = ({ minutes, seconds, milliseconds }) => 360 / 600 * ((seconds + minutes * 60) * 10 + milliseconds)

    render() {
        const time = this.getTimeSample(this.state.milliseconds)

        const arrowDegree = this.getArrowDegree(time)
        const formatted = this.getFormatedTime(time)

        return (
            <div className={`Stopwatch ${this.props.visible ? '' : 'hidden'}`}>
                <Circle time={formatted} degree={arrowDegree} />

                <div className="Stopwatch__actions">
                    <Button onClick={this.start} text="start" />
                    <Button onClick={this.stop} text="stop" />
                    <Button onClick={this.clear} text="clear" />
                    <Button onClick={this.createSnippet(time)} text="snippet" />
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        this.clear()
    }
}

export default Stopwatch
