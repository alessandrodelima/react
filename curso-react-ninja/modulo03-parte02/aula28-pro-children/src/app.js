'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Button>
          <span>Texto do span </span>
          Texto Filho
        </Button>
      </div>
    )
  }
}
export default App
