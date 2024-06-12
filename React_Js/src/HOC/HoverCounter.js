import React, { Component } from 'react'
import EnhancedComponent from './Hoc';
class HoverCounter extends Component {
   
  render() {
     const {count,incrementCount}=this.props;
    return <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
     
  }
}

export default EnhancedComponent(HoverCounter);