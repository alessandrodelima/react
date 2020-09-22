'use strict'

import React, { Component } from 'react'
import Title from './title'

class App  extends Component {
  render () {
    return (
      <div className='container'>
         <Title name='Alessandro' /> 
      </div>
    )
  }


}


// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         {/* <Title name='Alessandro' lastname='Lima' /> 
//         <Title name='Alessandro' lastname= {0} /> 
//          <Title name='Alessandro' lastname= {[1, 2, 3, 4]} /> 
//          <Title name='Alessandro' lastname= {{ first: 'Li', last: 'ma'}} />*/}
//           <Title name='Alessandro' /> 
//       </div>
//     )
//   }
// })

export default App
