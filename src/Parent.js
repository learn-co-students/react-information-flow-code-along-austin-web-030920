import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor()
    }
  }

  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childColor: newChildColor
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child changeColor={this.changeColor} color={this.state.childColor}/>
        <Child changeColor={this.changeColor} color={this.state.childColor} />
      </div>
    )
  }
}

export default Parent
