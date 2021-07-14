import PropTypes from 'prop-types'

import SingleCategory from './SingleCategory'

function CategoriesList(props) {
  return (
    <div>
      { props.categories.map((category, index) => <SingleCategory key={`${category}${index}`} category={category}/>)}
    </div>
  )
}

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategoriesList
