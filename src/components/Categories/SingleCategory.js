import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './SingleCategory.css'

function SingleCategory(props) {
  return (
    <div className='mt3'>
      <button className='buttonStyles'>
        <Link to={`/category/${props.category}`} >{props.category}</Link>
      </button>
    </div>
  )
}

SingleCategory.propTypes = {
  category: PropTypes.string.isRequired
}

export default SingleCategory
