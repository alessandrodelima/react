import React from 'react';

export default function Fragmento(props) {
  return (
    /*
    <div>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!</p>
    </div>
    //Outra maneira, usando o fragmento
    */
    <React.Fragment>
    <h2>Fragmento</h2>
    <p>Cuidado com esse erro!</p>
    </React.Fragment>
  )
}