import './Navbar.css';
import {NavLink} from 'react-router-dom'
import { useAuth } from '../auth/Authenticate';
import { FaRegUserCircle } from "react-icons/fa";
import { Dropdown } from 'react-bootstrap'

export function Navbar(){
  const { user, logoutUpdate } = useAuth();
  const sidebar = document.querySelector(".navlink")
    return(
      <nav className="navbar">
        <h2>Multi Shop</h2>
        
         <div className='navlink'>
            <NavLink className="page" to= 'home'> Home</NavLink>
            <NavLink className="page" to= 'products'> Products</NavLink>
            <NavLink className="page" to= 'cart'>Cart</NavLink>
            {
              user ? <>
                
                <Dropdown className='dropdown'>
                <Dropdown.Toggle>
                    {
                      user ? <>{user.firstName}</> : <>.....</>
                    }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={logoutUpdate} className='logout'>Logout <FaRegUserCircle /></Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                
              </> : <button><NavLink className="page btnlogin" to= "login">Login <FaRegUserCircle /></NavLink></button>
            }
              <NavLink onclick={sidebar}>
              <svg className="burger" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
              </NavLink>
        </div>
      </nav>
  )
}