import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return(
    <section className="Header">
      <NavLink to='/' className='nav-'><h1>raechel<span>odom.</span></h1></NavLink>
      <nav>
        <NavLink exact to='/about' className='nav'><button>about</button></NavLink>
        <NavLink exact to='/skills' className='nav'><button>skills</button></NavLink>
        <NavLink exact to='/projects' className='nav'><button>projects</button></NavLink>
        <NavLink exact to='/contact' className='nav'><button>contact</button></NavLink>
      </nav>
    </section>
  )
}

export default Header;