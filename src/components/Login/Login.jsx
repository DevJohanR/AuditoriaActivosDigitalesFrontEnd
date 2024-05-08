import React, { useState } from 'react';
import styles from './Login.module.css';
import axios from 'axios';


const Login = () => {
//CREAR ESTADOS
const [username, setUsername] = useState('');
const [password, setPassword] = useState('')

const handleLogin = () =>{
    axios.post('http://localhost:3001/login', {
        username,
        password
    })
    .then(response => {
        alert(response.data.message);
    })
    .catch(error =>{
        alert(error.response.data.error)
    });
};

  return (
    <div className={styles.Login}>
        <h1>login</h1>
        <form action="">
        <input type="text" placeholder='Nombre de Usuario'  onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Iniciar sesión</button>
        </form>
    </div>
  )
}

export default Login