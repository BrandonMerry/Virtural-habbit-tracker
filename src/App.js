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
      day: 'Today',
      reminder: true,
    },
    {
      id: 1,
      text: 'Drs',
      day: 'Today',
      reminder: true,
    },
    {
      id: 1,
      text: 'Drs',
      day: 'Today',
      reminder: true,
    }
  ])
 

  return (
    <div className="container">
      <Header />
      <Actions actions={actions} />
    </div>
  );
}

export default App;
