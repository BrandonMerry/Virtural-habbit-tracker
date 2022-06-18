import {FaTimes} from 'react-icons/fa'

const Action = ({action, onDelete, onToggle}) => {
  return (
    <div className='action' onDoubleClick={() => onToggle(action.id)}>
        <h3>{action.text} <FaTimes cursor={'pointer'} onClick={() => onDelete(action.id)} /> </h3>
        <p>{action.day}</p>
    </div>
  )
}

export default Action