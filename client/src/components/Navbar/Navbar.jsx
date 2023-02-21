import React from 'react'
import {Link} from 'react-router-dom' 
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'
//import Button from '../../components/Button/Button'
import './Navbar.css'

const Navbar = () => {

 var User = null

  return (
    <nav className='main-nav'>
        <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
            <img src={ logo} alt='logo' width='140px' />
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form>
            <input type="text" placeholder='search...' />
            <img src={search} className='search-icon' alt='search' width='20px'/>
        </form>
        {User === null ? 
        <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
        <>
        <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to='/User' style={{color:"white", textDecoration :'none'}} >A</Link></Avatar>
        <button className='nav-item nav-links'>Log Out</button>
        </>
        }
        </div>
    </nav>
  )
}

export default Navbar