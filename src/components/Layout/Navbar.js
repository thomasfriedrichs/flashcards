import { CgCardSpades } from 'react-icons/cg'
import { IoOptionsSharp } from 'react-icons/io5'
import { BiHomeHeart } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbarStyles'>
      <Link className='linkStyles' to='/'>
        <div className='linkDivStyles'><BiHomeHeart style={{ fontSize: '40px'}} /></div>
        <span>Home</span>
      </Link>
      <Link className='linkStyles' to='/categories'>
        <div className='linkDivStyles'><IoOptionsSharp style={{ fontSize: '40px'}} /></div>
        <span>Categories</span>
      </Link>
      <Link className='linkStyles' to='/decks'>
        <div className='linkDivStyles'><CgCardSpades style={{ fontSize: '40px'}} /></div>
        <span>Decks</span>
      </Link>
    </div>
  )
}

export default Navbar
