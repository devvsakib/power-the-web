import React from 'react'
import {findDOMNode} from "react-dom";

class ASlot extends React.Component {
    constructor(props) {
        super(props)
        this.targetRefs = [];
    }

    componentDidUpdate(prevProps) {
        console.log('%c [SW] eccomi!', 'background: blue; color: #fff; padding: 5px;');

        const $frame = this.FrameRef;
        $frame.scrollTop = 0;
        const $target = findDOMNode(this.targetRefs[this.props.target]);
        const fullScroll = findDOMNode(this.targetRefs[this.targetRefs.length - 1]).offsetTop
        const targetOffset = $target.offsetTop

        const totalScroll = targetOffset + fullScroll * (this.props.times - 1)
        const startTime = Date.now()

        const tick = () => {
            const elapsed = Date.now() - startTime;
            if (elapsed > this.props.duration) {
                this.onEnd()
                return
            }

            const amount = this.easing(elapsed, 0, totalScroll, this.props.duration)
            $frame.scrollTop = amount % fullScroll;

            requestAnimationFrame(tick);
        }

        tick()
    }

    easing(elapsed, initialValue, amountOfChange, duration) {
        return -amountOfChange * (elapsed /= duration) * (elapsed - 2) + initialValue
    }

    onEnd() {
        console.log(this)
        console.log('End!')
    }

    render() {
        return (
            <div
                id={this.props.id}
                ref={FrameRef => (this.FrameRef = FrameRef)}
            >
                {this.props.children.map((child, index) =>
                    React.cloneElement(child, { ref: ref => (this.targetRefs[index] = ref) }))}
            </div>
        )
    }
}

export default ASlot


// function debugMediamond(testo, tipo) {
//     var debugStyleError = 'background: none; color: #000; padding: 5px;';
//     if (tipo == 'error') {
//         debugStyleError = 'background: red; color: #fff; padding: 5px;';
//     } else if (tipo == 'worn') {
//         debugStyleError = 'background: orange; color: #000; padding: 5px;';
//     } else if (tipo == 'info') {
//         debugStyleError = 'background: blue; color: #fff; padding: 5px;';
//     }
//     console.log('%c[mediamond]' + testo + '', debugStyleError);
// }