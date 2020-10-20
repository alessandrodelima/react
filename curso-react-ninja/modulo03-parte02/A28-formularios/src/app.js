'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Valor inicial',
      checked: 'false'
    }
  }
  render () {
    return (
      <div>
        <br/>
        <form>
          <input type='text' value={this.state.value} onChange={(e) => {
            //console.log(e.target)
            this.setState({value: e.target.value })
          }} />
          <label>
            <input 
              type='checkbox' 
              value='my-checkbox' 
              checked={this.state.checked} />
            Checkbox
          </label>
        </form>
    </div>
    )
  }
}
export default App
