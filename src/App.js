
import './App.css';
import { useState } from 'react';
import Todos from './Todos';
import Todo from './components/Todo'

function App() {

  //set up and use state, state's initial value is your array of items
  const [taskList, setTaskList] = useState(Todos)

  const addItem = e => {
    e.preventDefault()
    setTaskList(taskList.concat([
      {
        task: document.querySelector('input[name="task"]').value,
        details: document.querySelector('input[name="details"]').value,
        category: document.querySelector('input[name="category"]').value,
        isComplete: false,
      }
    ])
    )
  }

  return (

    <div className='App'>
      <h1>welcome to this mess</h1>
      {taskList.map((ele, idx) => {
        return ( !ele.isComplete && <Todo ele={ele} key={idx} />)
      })}


      <form className="AddItem" onSubmit={addItem}>
        <h3>Add A Task!</h3>
        <p>Task:</p> <input type='text' name="task"></input> 
        <br />        
        <p>Category:</p> <input type='text' name="category"></input>
        <br />
        <p>Details:</p> <input type='text' name="details"></input>
        <br />
        <input type='submit' value='submit'></input>
      
      </form>


    </div>
  );
}

export default App;
