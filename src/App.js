// integrat actions into the state 
// this is a HOOK useState
import{ useState} from 'react';
import Header from "./components/Header";
import Actions from "./components/Actions";

function App() {
  // this is app lvl state
  const[actions, setActions] = useState([
    {
      id: 1,
      text: 'Drs',
      day: 'yesterday',
      reminder: true,
    },
    {
      id: 2,
      text: 'Drs',
      day: 'Today',
      reminder: true,
    },
    {
      id: 3,
      text: 'Drs',
      day: 'tomorrow',
      reminder: true,
    }
  ])
 
  // function to Delete an action
  const deleteAction = (id) => {
    setActions(actions.filter((action) => action.id !== id))
  }

  // toggle remider - something that happened multiple times 
  const toggleReminder  = (id) => {
    setActions(actions.map((action) => action.id === id ? {...action, reminder: !action.reminder} : action))
  }

  return (
    <div className="container">
      <Header />
      { actions.length > 0 ? ( 
      <Actions actions={actions} onDelete={deleteAction} onToggle={toggleReminder} /> ) : ('No Actions')  }
    </div>
  );
}

export default App;
