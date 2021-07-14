import { useLocation } from 'react-router-dom'
import { CgCardSpades } from 'react-icons/cg'
import { IoOptionsSharp } from 'react-icons/io5'
import { BiHomeHeart } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <div className='navbar-wrapper'>
      <Link className={`link-wrapper ${ pathname === '/' ? 'link-selected' : null }`} to='/'>
        <div className='icon-wrapper'>
          <BiHomeHeart className='navbar-icon' />
        </div>
        <span>Home</span>
      </Link>
      <Link className={`link-wrapper ${ pathname === '/categories' ? 'link-selected' : null }`} to='/categories'>
        <div className='icon-wrapper'>
          <IoOptionsSharp className='navbar-icon' />
        </div>
        <span>Categories</span>
      </Link>
      <Link className={`link-wrapper ${ pathname === '/decks' ? 'link-selected' : null }`} to='/decks'>
        <div className='icon-wrapper'>
          <CgCardSpades className='navbar-icon' />
        </div>
        <span>Decks</span>
      </Link>
    </div>
  )
}

export default Navbar
