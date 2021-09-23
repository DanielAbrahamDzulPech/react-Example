import React from 'react';
import Header from './components/header';
import Micomponente from './components/Micomponente';
import './style.css';

function HolaMundo(nombre, edad) {
  var presentacion = (
    <div>
      <h2>Hola, soy {nombre}</h2>
      <h3>Tengo {edad}</h3>
    </div>
  );
  return presentacion;
}

export default function App() {
  var nombre = 'Daniel A';
  var presentacion = <h2>Hola, soy{nombre}</h2>;

  return (
    <div>
      <Header />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* {HolaMundo(nombre)} */}
      {HolaMundo(nombre, 18)}
      <Micomponente />
      {/* {presentacion} */}
      {/* {alert ('hola')} */}
      {/* {alert ('hola ' + nombre)} */}
    </div>
  );
}
