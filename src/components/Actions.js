// import component form Action
import Action from "./Action"

// this is set up so actions is used as a destructured and stat in the app form
const Actions = ({actions, onDelete, onToggle}) => {
  return (
    <>
    {actions.map ((action) => (
      <Action  key ='action.id' action = {action} onDelete={onDelete} onToggle={onToggle}></Action>
    ))}
    </>
  )
}

export default Actions