'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container' onClick = {(e) => {
        alert('Clicou')
      }}>
        {['blue', 'red', 'green', 'yellow'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
          <Title name='Alessandro' />
      </div>
    )
  }
}
export default App
