import PropTypes from 'prop-types'

const Button = ({color, text, onClick }) => {
  return (
    <button 
      style={{backgroundColor: color}} 
      className='btn'>{text}</button>
  )
}

// default props
Button.defaultProps = {
  color: 'stealblue'
}

Button.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button