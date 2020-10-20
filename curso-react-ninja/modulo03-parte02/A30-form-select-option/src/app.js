'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2'
    }
  }
  render () {
    return (
      <form onSubmit={(e) => {
          console.log('event', e)
      }}> 
        
        {/* <select value={this.state.value} onChange={(e) => { */}
        <select multiple value={['1', '2']} onChange={(e) => {
          this.setState({
            value: e.target.value
          })
        }}> 
          <option value='1'>Opção 1</option>
          <option value='2'>Opção 2</option>
          <option value='3'>Opção 3</option>
        </select>
        <br></br>
        <br></br>

        <textarea defaultValue={'Textarea\n value'} />
        <br></br>
        <button type='submit'>Enviar</button>
      </form>
    )
  }
}
export default App
