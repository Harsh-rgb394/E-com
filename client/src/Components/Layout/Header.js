import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {
  return (
    <>
    <nav className="navbar">
       <div className='home'>
       <AiOutlineShoppingCart/>
        <Link>COMIC-CON</Link>

       </div>

       <div className='items'>
        <ul className='bar'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/category'>Category</NavLink>
          </li> 
          <li>
            <NavLink to='/register'>Register</NavLink>
          </li>
           <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
           <li>
            <NavLink to='/cart'>Cart (0)</NavLink>
          </li>
        </ul>

       </div>
     </nav>

   </>
  )
}

export default Header