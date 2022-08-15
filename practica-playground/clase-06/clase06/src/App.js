
import React from 'react'
import './App.css';



function ComponenteUno(props){
  return (<React.Fragment><span>Su nombre es {props.nombre}</span><span>La esas es {props.edad}</span></React.Fragment>)
}

function ComponenteDos({gusto, signo}){
  return (<><span>Su gusto es {gusto}</span><span>y su signo es {signo}</span></>)
}


function App() {
  return (
    <div>
      <ComponenteUno nombre="Edgardo" edad="48" />
      <ComponenteDos gusto="Diseñar" signo="Tauro" />
    </div>
  );
}

export default App;
