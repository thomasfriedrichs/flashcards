import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function SingleCategory(props) {
  return (
    <button className='buttonStyles' style={{ marginTop: '42px' }}>
      <Link to={`/category/${props.category}`} >{props.category}</Link>
    </button>
  )
}

SingleCategory.propTypes = {
  category: PropTypes.string.isRequired
}

export default SingleCategory
