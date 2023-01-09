import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='symbol'>
        <button>&#60;</button>
        <button>&#62;</button>
        </div>
        <div className='registration'>
        <button>Sign Up</button>
        <button>Log in</button>
        </div>

    </div>
  )
}

export default Navbar