import React from 'react';
import PropTypes from 'prop-types';

import { findDOMNode } from 'react-dom';

class Slot extends React.Component {
  constructor() {
    super();
    this.targetRefs = [];
  }

  componentDidUpdate(prevProps) {
    if (this.props.target === prevProps.target) return;

    const $frame = this.FrameRef;

    $frame.scrollTop = 0;

    if (this.props.target === 0) return;

    const $target = findDOMNode(this.targetRefs[this.props.target]);

    if ($target == null) return;

    console.log(this.props.target, $target);

    const fullScroll = findDOMNode(this.targetRefs[this.targetRefs.length - 1]).offsetTop;
    const targetOffset = $target.offsetTop;

    const totalScroll = targetOffset + fullScroll * (this.props.times - 1);
    console.log(totalScroll, targetOffset, fullScroll);

    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed > this.props.duration) {
        this.props.onEnd();
        return;
      }

      const amount = this.props.easing(elapsed, 0, totalScroll, this.props.duration);
      $frame.scrollTop = amount % fullScroll;

      requestAnimationFrame(tick);
    };

    tick();
  }

  render() {
    return (
      <div
        className={this.props.className}
        style={{ overflow: 'hidden', position: 'relative' }}
        ref={FrameRef => (this.FrameRef = FrameRef)}
      >
        {this.props.children.map((child, index) =>
          React.cloneElement(child, { ref: ref => (this.targetRefs[index] = ref) }))}
      </div>
    );
  }
}

Slot.defaultProps = {
  duration: 3000,
  easing: function easeOutQuad(elapsed, initialValue, amountOfChange, duration) {
    return -amountOfChange * (elapsed /= duration) * (elapsed - 2) + initialValue;
  },
  times: 1,
  onEnd: () => {},
};

Slot.propTypes = {
  duration: PropTypes.number,
  target: PropTypes.number.isRequired,
  easing: PropTypes.func,
  times: PropTypes.number,
  onEnd: PropTypes.func,
};

export default Slot;