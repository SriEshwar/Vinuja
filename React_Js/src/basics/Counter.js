import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    // Initialize state in the constructor
      this.state = {
        count:0
      }
    }
     // Method to handle button click and update state
    handleClick=()=>{
        this.setState({count:this.state.count+1});
    }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times.</p>
        <button onClick={this.handleClick}>
        Click me
        </button>
      </div>
    )
  }
}
