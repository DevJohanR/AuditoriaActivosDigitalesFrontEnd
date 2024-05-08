// src/components/Navbar/Navbar.js
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import styles from './Navbar.module.css'

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.Navbar} style={{ padding: "10px", backgroundColor: "#333", borderRadius: "0px 0px 10px 10px"}}>
      <ul style={{ listStyle: "none", display: "flex", justifyContent: 'space-between', alignItems:'center', gap: "20px" }}>
        <li>
          <img src={Logo} width={60} alt="Logo" />
        </li>
        {location.pathname === "/panel" && (
          <li>
            <Link to="/">Salir</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
