'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        {/* <Title name='Alessandro' lastname='Lima' /> 
        <Title name='Alessandro' lastname= {0} /> 
         <Title name='Alessandro' lastname= {[1, 2, 3, 4]} /> */}
         <Title name='Alessandro' lastname= {{ first: 'Li', last: 'ma'}} />
      </div>
    )
  }
})

export default App
