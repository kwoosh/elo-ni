import React, { Component } from 'react'
import dayjs from 'dayjs'

import Button from '../Button/Button'
import Circle from '../Circle/Circle'
import TextInput from '../TextInput/TextInput'

import './Stopwatch.css'

class Stopwatch extends Component {
    state = {
        snippetMassage: '',
        milliseconds: 0,
        isOnPause: true,
    }

    constructor(props) {
        super(props)

        this.interval = null
    }

    start = () => {
        if (this.interval) return
        this.setState(prev => ({ isOnPause: false }))
        this.interval = setInterval(() => {
            this.setState(({ milliseconds }) => ({ milliseconds: milliseconds + 100 }))
        }, 100)
    }

    stop = () => {
        if (this.interval) clearInterval(this.interval)
        this.interval = null
        this.setState(prev => ({ isOnPause: true }))
    }

    clear = () => {
        this.stop()
        this.setState({ milliseconds: 0 })
    }

    handleSnippetInput = value => {
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
        this.clear()
    }

    getTimeSample = (millisecondsRaw: number) => {
        const millisecondsModule = millisecondsRaw % 1000
        const totalSeconds = (millisecondsRaw - millisecondsModule) / 1000

        const millis = millisecondsModule / 100
        const secs = totalSeconds % 60
        const mins = (totalSeconds - (totalSeconds % 60)) / 60

        return { mins, secs, millis }
    }

    getFormatedTime = ({ mins, secs, millis }) => `${this.formatZeros(mins)}:${this.formatZeros(secs)}.${millis}`

    formatZeros(num) {
        const str = String(num)
        const arr = str.split('')

        if (arr.length < 2) arr.unshift('0')

        return arr.join('')
    }

    getArrowDegree = ({ mins, secs, millis }) => (360 / 600) * ((secs + mins * 60) * 10 + millis)

    render() {
        const { milliseconds, isOnPause } = this.state

        const time = this.getTimeSample(milliseconds)

        const arrowDegree = this.getArrowDegree(time)
        const formatted = this.getFormatedTime(time)

        const isOnStart = isOnPause && milliseconds === 0
        const isGoing = !isOnPause && !(milliseconds === 0)
        const isPaused = isOnPause && !(milliseconds === 0)

        return (
            <div className={`Stopwatch ${this.props.visible ? '' : 'hidden'}`}>
                <Circle time={formatted} degree={arrowDegree} />

                <div className="Stopwatch__actions">
                    {isOnStart && <Button onClick={this.start} text="start" />}
                    {isPaused && <Button onClick={this.clear} text="reset" />}
                    {isPaused && <Button onClick={this.start} text="continue" />}
                    {isGoing && <Button onClick={this.stop} text="pause" />}
                </div>

                {isPaused && (
                    <div className="Stopwatch__snippet-form">
                        <TextInput placeholder="Massage" onInput={this.handleSnippetInput} />
                        <Button onClick={this.createSnippet(time, this.state.snippetMassage)} text="snippet" />
                    </div>
                )}
            </div>
        )
    }

    componentWillUnmount() {
        this.clear()
    }
}

export default Stopwatch
