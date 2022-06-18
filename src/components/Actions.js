// this is set up so actions is used as a destructured and stat in the app form

const Actions = ({actions}) => {
  return (
    <>
    {actions.map ((actions) => (
      <h3 key ='actions'>{actions.text}</h3>
    ))}
    </>
  )
}

export default Actions