// use to import prop types
import PropTypes from 'prop-types'

// user props as a paramater to take in props ({ name of prop })
const Header = ({ title}) => {
  return (
    <header>
        {/* the title is called in the app.js title ='hello' */}
        <h1>{title}</h1>
    </header>
  )
}

// this is a default prop

Header.defaultProps = {
    title: 'Habbit Tracker',
}

// prop types from the import above 
Header.propTypes = {
    title: PropTypes.string
}

export default Header 



