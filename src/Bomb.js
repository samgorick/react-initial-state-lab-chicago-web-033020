import React from 'react'

export default class Bomb extends React.Component {
  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    console.log(this)
    return this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'
  }
}