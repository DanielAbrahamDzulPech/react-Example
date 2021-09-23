import React from 'react';
import '../css/header.css';

class header extends React.Component {
  render() {
    return (
      <div className="header">
        <ul className="header_ul">
          <li>Inicio</li>
          <li>Quienes Somos</li>
          <li>Nosotros</li>
        </ul>
      </div>
    );
  }
}

export default header;
