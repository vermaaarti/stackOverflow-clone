import React from 'react'
import {Link} from 'react-router-dom' 
import logo from '../../assets/logo.jfif'
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import './Navbar.css'

const Navbar = () => {

 var User = null

  return (
    <nav>
        <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
            <img src={ logo} alt='logo' width='270px' />
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
        <Link to='/' className=''><Avatar>A</Avatar></Link>
        <Button>Log Out</Button>
        </>
        }
        </div>
    </nav>
  )
}

export default Navbar