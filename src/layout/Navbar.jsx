import React from 'react'
import { Link } from 'react-router-dom'
import navLog from '../assets/WhatsApp Image 2023-11-22 at 12.23.16_fc46ce79.jpg'
import navImg from '../assets/WhatsApp Image 2023-11-22 at 12.23.17_b2500627.jpg'

const Navbar = () => {
  return (
    <> 
    <nav className='border-botton border-2 border-primary'>
      <div className='container d-flex justify-content-between align-items-center '>
        <div>
           <Link to="/" className='text-decoration-none'>
            <img src={navLog} alt="navLogo  "
            className='img-fluid  ' />
           </Link>
        </div>
        <div >
        <ul className='d-flex align-items-center gap-5 list-unstyled'>
        <li><Link to="/NewUser"className='text-decoration-none'>New User</Link></li>

          <li><Link to="/AllUsers"className='text-decoration-none'>All Users</Link></li>

          <li><img src={navImg} alt="navImg" className='d-none d-lg-block img-fluid'/></li>
          </ul>
        </div>
      </div>
    </nav>
    
    </>
  )
}

export default Navbar