import React, {Component } from 'react';
import { withFirebase } from '../Firebase';

class Light extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightMode: 0,
    };
}

render() {
  const onTouch = () => {
    console.log(this.state.lightMode);
    this.setState((prevState, props) => ({
      lightMode: (prevState.lightMode === 0 ? 1 : 0)
    }));
    this.props.firebase.light().set({
      Light: this.state.lightMode
    });
  }
  return (
    <div className="container">
      
      <h2>Light bulb</h2>
      
      <a className={this.state.lightMode ? "night": "bulb-light" } onClick={onTouch}>
        
        <div id="light"></div>
        
        <div id="bulb" >
          <div className="bulb-top">
            <div className="reflection"></div>
          </div>
          <div className="bulb-middle-1"></div>
          <div className="bulb-middle-2"></div>
          <div className="bulb-middle-3"></div>
          <div className="bulb-bottom"></div>
          <h3 className="clickme">Click me</h3>
        </div>
          
        <div id="base">
          <div className="screw-top"></div>
          <div className="screw-a"></div>
          <div className="screw-b"></div>
          <div className="screw-a"></div>
          <div className="screw-b"></div>
          <div className="screw-a"></div>
          <div className="screw-b"></div>
          <div className="screw-c"></div>
          <div className="screw-d"></div>
        </div>
      </a>
    </div>
  )
}
}

export default withFirebase(Light);
