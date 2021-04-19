 import React, {useEffect, useState} from 'react'
 import './Nav.css'
 
 function Nav() {

  const [show, handleShow] = useState(false);

  //scroll listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // 100px down from y axis
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
      });
      return () => {
        window.removeEventListener("scroll")
      
    }
  }, []);


   return (
     // class variation with scoll listener
     <div className={`nav ${show && "nav__black"}`}> 
       <img 
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Neflix Logo"
       />

       <img 
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Logo"
       />
       
     </div>
   )
 }
 
 export default Nav
 