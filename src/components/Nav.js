import React from 'react';

function Nav() {
  

  return (
    <div className="nav">
      <NavLink to="/">About Me</NavLink>
      <NavLink to="/projects">My Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>


    
  )
}
// <nav className="main-header-menu">
    //   <section
    //     style={{
    //       display: 'flex',
    //       fontFamily: 'helvetica',
    //       flexDirection: 'row',
    //       alignItems: 'flex-start',
    //       justifyContent: 'flex-start',
    //     }}
    //   >
       
    //     <div style={linkStyle}>
    //       <a href="#">About</a>
    //     </div>
    //     <div style={linkStyle}>
    //       <a href="#">Projects</a>
    //     </div>
    //     <div style={linkStyle}>
    //       <a href="#">Contact</a>
    //     </div>
    //   </section>
    // </nav>