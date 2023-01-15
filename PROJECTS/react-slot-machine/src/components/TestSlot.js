import React from 'react'
import ASlot from "./ASlot";
import '../App.css';
import classNames from "classnames";


const jsonList = require('./phrases.json');


class TestSlot extends React.Component {
    constructor() {
        super()
        this.state = {
            target: 1,
            times: 1,
            duration: 3000,
            triggered: [1]
        }
    }

    generateRandomIntegerInRange(min, max, used) {
        let random
        do {
            random = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (used.includes(random))
        return random
    }

    componentDidUpdate(prevProps) {
        const triggerArm = () => {
            requestAnimationFrame(triggerArm)
        }

        triggerArm()
    }

    render() {
        let random = this.generateRandomIntegerInRange(0, jsonList.length - 1, this.state.triggered)
        this.state.triggered.push(random)

        const delay = (time) => {
            return new Promise(resolve => setTimeout(resolve, time))
        }

        const animation = (event) => {
            const trigger = document.getElementById('slot-trigger')
            trigger.classList.add('animation')
            delay(2000).then(() => trigger.classList.remove('animation'))

        }

        return (
            <div id="slot-machine">
                <div id="slot-body" className="center">
                    <div id="slot-title"></div>
                    <div id="slot-block"></div>
                    <div id="slot-box"></div>
                    <div id="slot-trigger"
                        onClick={() => [animation(), this.setState({ target: random, triggered: this.state.triggered })]}
                    >
                        <div className="arm-shadow" ></div>
                        <div className="arm">
                            <div className="knob"></div>
                        </div>
                        <div className="ring1">
                            <div className="shadow" style={{top: '0px', opacity: '0'}}></div>
                        </div>
                        <div className="ring2">
                            <div className="shadow" style={{top: '0px', 'opacity': '0'}}></div>
                        </div>
                    </div>
                    <ASlot
                        duration={this.state.duration}
                        times={this.state.times}
                        target={this.state.target}
                        id='slot-frame'
                    >
                        {jsonList.map(({ phrase, author, date }, index) => (
                            <div
                                key={index}
                                className={classNames("slot-item", date ? "" : "evergreen")}
                            >
                                <div className="tooBig">
                                    {phrase.split("\n").map(function(char, index){
                                        return <p key={index}>{char}</p>
                                    })}
                                </div>
                                <div className={classNames("date", date ? "" : "evergreen")} >
                                    {date ? date : "evergreen"}
                                </div>
                            </div>
                        ))}
                    </ASlot>
                    <div className="slot-frame shadow"></div>
                </div>
            </div>
        );
    }
}

export default TestSlot
