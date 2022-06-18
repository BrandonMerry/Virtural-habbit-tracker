// integrat actions into the state
// this is a HOOK useState
import { useState } from "react";
import Header from "./components/Header";
import Actions from "./components/Actions";
import AddAction from "./components/AddAction";

const App = () => {
  // toggle the add action btn
  const [showAddAction, setShowAddAction] = useState(false);

  // this is app lvl state
  const [actions, setActions] = useState([
    {
      id: 1,
      text: "Drs",
      day: "yesterday",
      reminder: true,
    },
  ]);

  // add action
  const addAction = (action) => {
    // use id since we dont have backend to create its own id
    const id = Math.floor(Math.random() * 1000) + 1;
    const newAction = { id, ...action };
    setActions([...actions, newAction]);
  };

  // function to Delete an action
  const deleteAction = (id) => {
    setActions(actions.filter((action) => action.id !== id));
  };

  // toggle remider - something that happened multiple times
  const toggleReminder = (id) => {
    setActions(
      actions.map((action) =>
        action.id === id ? { ...action, reminder: !action.reminder } : action
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddAction(!showAddAction)}
        showAdd ={showAddAction}
      />
      {showAddAction && <AddAction onAdd={addAction} />}
      {actions.length > 0 ? (
        <Actions
          actions={actions}
          onDelete={deleteAction}
          onToggle={toggleReminder}
        />
      ) : (
        "No Actions"
      )}
    </div>
  );
};

export default App;
