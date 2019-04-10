import React from 'react';

const Header = () => {
  return(
    <header className="Header">
      <nav>
        <a className="nav-abt" href="#">About</a>
        <a className="nav-projects" href="#">Projects</a>
        <a className="nav-contact" href="#">Contact</a>
      </nav>
      <h1>raechel<span>odom.</span></h1>
    </header>
  )
}

export default Header;