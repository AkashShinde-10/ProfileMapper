import React from 'react'
import image from '../../public/Images/Untitled1.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='nav'>
      <div className="logo">
        <img src={image} alt="Logo" />
      </div>
      <div className="navbtns">
      <Link to="/"><button>Home</button></Link> <Link to="/admin"><button>Admin</button></Link>
      </div>
    </div>
  )
}

export default Header