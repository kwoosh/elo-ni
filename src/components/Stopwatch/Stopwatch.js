import React, { Component } from 'react'
import dayjs from 'dayjs'

import Button from '../Button/Button'
import Circle from '../Circle/Circle'
import Input from '../Input/Input'

import './Stopwatch.css'

class Stopwatch extends Component {
    state = {
        snippetMassage: '',
        milliseconds: 0,
    }

    constructor(props) {
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

    handleSnippetInput = e => {
        const { value } = e.target

        this.setState(prev => ({ snippetMassage: value }))
    }

    createSnippet = (time, massage) => () => {
        const snippet = {
            id: this.props.lastSnippetId + 1,
            when: dayjs().format('DD MMMM in HH:mm:ss'),
            inHours: Number((time.mins / 60).toFixed(2)),
            massage,
        }

        this.props.onSippet(snippet)
    }

    getTimeSample = (millisecondsRaw: number) => {
        const millisecondsModule = millisecondsRaw % 1000
        const totalSeconds = (millisecondsRaw - millisecondsModule) / 1000

        const millis = millisecondsModule / 100
        const secs = totalSeconds % 60
        const mins = (totalSeconds - totalSeconds % 60) / 60

        return { mins, secs, millis }
    }

    getFormatedTime = ({ mins, secs, millis }) => `${mins}:${secs}.${millis}`

    getArrowDegree = ({ mins, secs, millis }) => 360 / 600 * ((secs + mins * 60) * 10 + millis)

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
                </div>

                <div className="Stopwatch__snippet-form">
                    <Input type="text" placeholder="massage" onInput={this.handleSnippetInput} />
                    <Button onClick={this.createSnippet(time, this.state.snippetMassage)} text="snippet" />
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        this.clear()
    }
}

export default Stopwatch
