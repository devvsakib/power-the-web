import React from 'react'
import {findDOMNode} from "react-dom";

class SlotItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = { fontSize: this.props.fontSize, resized: false }
        this.resize = this.resize.bind(this);
    }

    componentDidUpdate(prevProps) {
        console.log('%c [SW] eccomi!', 'background: blue; color: #fff; padding: 5px;');
        if (this.state.resized === true) {
            return
        }


        this.resize()
    }

    resize = () => {
        let father = findDOMNode(this)
        let child = father.firstChild
        let secondChild = father.childNodes[1]
        if (this.state.resized === true) {
            return
        }
        if (child.clientHeight > father.clientHeight - secondChild.clientHeight) {
            this.setState({fontSize: parseInt(this.state.fontSize) - 1, resized: true})
        }
        if (child.clientHeight < father.clientHeight - secondChild.clientHeight) {
            this.setState({fontSize: parseInt(this.state.fontSize) + 1})
            console.log('setFont to ' + this.state.fontSize)
            return
        }
        this.setState({resized: true})
    }

    render() {
        return (
            <div
                key={this.props.key}
                className="slot-item"
            >
                <div
                    className="tooBig"
                    style={{'font-size': this.state.fontSize+'px'}}
                >
                    {this.props.phrase}
                </div>
                <div className="date" >
                    {this.props.date}
                </div>
            </div>
        )
    }
}

export default SlotItem
