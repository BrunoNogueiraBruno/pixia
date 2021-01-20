import React, { Component } from 'react'
import Context from '../components/Context'

class Canvas extends Component {
  render() {
    return (
      <Context.Consumer>
        {(value) => {
          console.log(value);
          return (
            <div>
              Canvas
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Canvas
