import React, { useState } from 'react';
import './css/App.css';

function App() {
  const [formData, setFormData] = useState({
    pk_cedula_user: '',
    nombre_user: '',
    email_user: '',
    password_user: '',
    descripcion_user: '',
    telefono_user: '',
    rol_user: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    try {
      const  response = fetch('http://localhost:4000//
      method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
    } catch (e) {
      
    }
  }

  return (
    <div className='containerPrincipal'>
      <div className='form-group'>
        <h1 className='title'>Registrar Usuario.</h1>
        <label>Cedula: </label>
        <input type="number" className='form-input' />
        <br />
        <label>Usuario: </label>
        <input type="text" className='form-input' />
        <br />
        <label>Email: </label>
        <input type="email" className='form-input' />
        <br />
        <label>Contraseña: </label>
        <input type="password" className='form-input' />
        <br />
        <label>Descripción: </label>
        <input type="text" className='form-input' />
        <br />
        <label>Telefono: </label>
        <input type="text" className='form-input' />
        <br />
        <label>Fecha nacimiento: </label>
        <input type="date" className='form-date' />
        <br />
        <select name="rol" id="rol" className='form-select'>
          <option value="" selected disabled>Seleccione el Rol del Usuario</option>
          <option value="1">vendedor</option>
          <option value="2">comprador</option>
          <option value="3">admin</option>
        </select>
        <br />
        <button className='btn'>Enviar</button>
      </div>
    </div>
  )
}

export default App;