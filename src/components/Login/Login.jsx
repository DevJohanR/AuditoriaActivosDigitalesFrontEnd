import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import axios from 'axios';


const Login = () => {
//CREAR ESTADOS
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState('');
const navigate = useNavigate();

const validateForm = () => {
  if (!username || !password) {
      setError('Ambos campos son obligatorios');
      return false;
  }
  setError(''); // Limpiar errores previos si pasa la validación
  return true;
}


const handleLogin = () =>{

    event.preventDefault(); 
    if (!validateForm()) return;
    setIsLoading(true);
    axios.post('https://auditoriaactivosdigitalesbackend.onrender.com/login', {
        username,
        password
    })
    .then(response => {
        alert(response.data.message);
        localStorage.setItem("isLoggedIn", "true");
        navigate('/panel')

    })
    .catch(error =>{
        alert(error.response.data.error)
    })
    .finally(() => {
      setIsLoading(false); // Desactivar el estado de carga independientemente del resultado
  });
};

const togglePassword = () => {
    setShowPassword(!showPassword);
};
  return (
    <div className={styles.Login}>
    
        <form  onSubmit={handleLogin}>
            <div className={styles.tituloLogin}>
        <h1>Iniciar Sesion</h1>
        </div>
        <div className={styles.inputGroup}>
        <input type="text" placeholder='Nombre de Usuario'  onChange={(e) => setUsername(e.target.value)} />
        <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Contraseña"
        className={`${styles.inputGroup} ${styles.passwordField}`} // Aplicando dos clases aquí
        onChange={(e) => setPassword(e.target.value)}
    />
               {password.length > 0 && (
            <button
              onClick={togglePassword}
              type="button"
              className={styles.togglePassword}
            >
              {showPassword ? 'Ocultar' : 'Mostrar Contraseña'}
            </button>
          )}
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button className={styles.btn} type="submit">
                    {isLoading ? 'Cargando...' : 'Entrar'}
                </button>
        </form>
    </div>
  )
}

export default Login