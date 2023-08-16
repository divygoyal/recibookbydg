import React from 'react'
import navbarlogo from "./logorecibooknew.png"
import '../Pagescss/Navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="navbar"  >
        <div className="navbarlogo">
            <img src={navbarlogo} alt="" />
        </div>
        <div className="navbarnavigation">
            <ul className='navbarlist'>
            
                <li><a href="/" >Home</a></li>
                <li><a href="/publish" >Submit</a></li>
                <li><a href="https://github.com/divygoyal/"  target='bs'>About</a></li>
                <li><a href="https://www.linkedin.com/in/divy-goyal/" target='aasa' >Contact</a></li>
            </ul>
        </div>
        <div className="navbarsearch">
           <form method="POST" action='/search' >
            <input type="text" name='Search' placeholder='Search..' />
           </form>
        </div>
      </div>
      {/* <div style={{borderBottom:"1px solid lightgray" , height:"10px" , width:"100%"}}></div> */}
    </>
  )
}

export default Navbar
