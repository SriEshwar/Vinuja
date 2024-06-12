import React, { Component } from 'react';
import EnhancedComponent from './Hoc';
class ClickCounter extends Component {
  
  render() {
    const {count,incrementCount}=this.props;
    return (
    
      <button onClick={incrementCount}>
        Clicked {count} times
      </button>
    );
  }
}

export default EnhancedComponent(ClickCounter);
