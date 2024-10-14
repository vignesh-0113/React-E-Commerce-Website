import './Navbar.css'; 
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/Authenticate';
import { FaRegUserCircle } from "react-icons/fa";
import { Dropdown } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";


export function Navbar() {
  const navRef = useRef();
  const { user, logoutUpdate } = useAuth();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <nav className="navbar">
      <h2>Vicky E-Commerce </h2>
      <form className='input-form'>
        <input className='input' type='search' placeholder='Search'/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className='navlink' ref={navRef}>
        <NavLink className="page" to='home' onClick={showNavbar}><FaHome /> Home</NavLink>
        <NavLink className="page" to='products' onClick={showNavbar}><AiFillProduct /> Products</NavLink>
        <NavLink className="page" to='cart' onClick={showNavbar}> <TiShoppingCart /> Cart</NavLink>
        {
          user ? (
            <Dropdown className='dropdown'>
              <Dropdown.Toggle>
                {user.firstName}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={logoutUpdate} className='logout'>
                Logout <FaRegUserCircle/>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            
              <NavLink className="page btnlogin" to="login" onClick={showNavbar}>
                Login <FaRegUserCircle/>
              </NavLink>
            
          )
        }
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </nav>
  );
}
