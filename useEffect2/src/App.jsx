import { useState , useEffect} from 'react'
import axios from "axios"

import './App.css'

function App() {
  const [but, setBut] = useState(1);

  function changeButton(e){
      const value=parseInt(e.target.value);
      setBut(value);
  }

  return (
    <div>
      <button onClick={changeButton} value="1">1</button>
      <button onClick={changeButton} value="2">2</button>
      <button onClick={changeButton} value="3">3</button>
      <button onClick={changeButton} value="4">4</button>
      <Todo id={but}></Todo>
    </div>
  )
}

function Todo({id}){
  const [todos , setTodos]=useState({});

  useEffect(()=>{
     axios.get("https://sum-server.100xdevs.com/todo?id="+id)
     .then(function(response){
      setTodos(response.data.todo);
     })
  },[id]);

  return <div>
   <h1>{todos.title}</h1>
   <h5>{todos.description}</h5>
  </div>
}

export default App
