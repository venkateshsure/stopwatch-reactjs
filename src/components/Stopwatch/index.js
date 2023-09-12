// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {min: '00', sec: '00'}

  start = () => {
    this.id = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(pre => {
      let newSec = parseInt(pre.sec) + 1
      let newMin = parseInt(pre.min)
      // const newMin = newSec === 60 ? parseInt(pre.min) + 1 : parseInt(pre.min)
      console.log(newSec, newMin)
      if (newSec === 60) {
        newMin += 1
        newSec = '0'
      }

      return {
        sec: newSec < 10 ? `0${newSec}` : `${newSec}`,
        min: newMin < 10 ? `0${newMin}` : `${newMin}`,
      }
    })
  }

  stop = () => {
    clearInterval(this.id)
  }

  reset = () => {
    this.setState({min: '00', sec: '00'})
  }

  render() {
    const {min, sec} = this.state
    return (
      <div className="stopwatch">
        <div className="stopwatch-con">
          <h1 className="head">Stopwatch</h1>
          <div className="box-con">
            <div className="img-timer-con">
              <img
                className="img"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p>Timer</p>
            </div>
            <h1 className="timer-text">
              {min}:{sec}
            </h1>

            <div className="but-con">
              <button onClick={this.start} type="button" className="start">
                Start
              </button>
              <button onClick={this.stop} type="button" className="stop">
                stop
              </button>
              <button onClick={this.reset} type="button" className="reset">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
