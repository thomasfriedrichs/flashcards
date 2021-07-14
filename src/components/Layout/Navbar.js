import { CgCardSpades } from 'react-icons/cg'
import { IoOptionsSharp } from 'react-icons/io5'
import { BiHomeHeart } from 'react-icons/bi'

import { Link } from 'react-router-dom'

function Navbar(props) {
  const navbarStyles = {
    display: 'flex',
    flexDirection: 'row',
    background: 'rgba(200,200,200,0.7)',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '22px',
    overflow: 'none',
    justifyContent: 'center'
  }

  const linkStyles = {
    minWidth: '160px',
    lineHeight: '90px',
    display: 'flex',
    flexDirection: 'row',
    border: '1px groove gray',
    paddingLeft: '10px',
    paddingRight: '22px',
    fontWeight: '500',
  }

  const linkDivStyles = {
    paddingTop: '25px',
    lineHeight: '50px',
    paddingRight: '10px'
  }

  return (
    <div style={navbarStyles}>
      <Link style={linkStyles} to='/'>
        <div style={linkDivStyles}><BiHomeHeart style={{ fontSize: '40px'}} /></div>
        <span>Home</span>
      </Link>
      <Link style={linkStyles} to='/categories'>
        <div style={linkDivStyles}><IoOptionsSharp style={{ fontSize: '40px'}} /></div>
        <span>Categories</span>
      </Link>
      <Link style={linkStyles} to='/decks'>
        <div style={linkDivStyles}><CgCardSpades style={{ fontSize: '40px'}} /></div>
        <span>Decks</span>
      </Link>
    </div>
  )
}

export default Navbar
