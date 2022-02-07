import { useState } from 'react';
import { Card, CardContent, FormGroup, Grid } from '@mui/material';
import './App.css';
import AddTodo from './Components/AddTodo';
import ListTask from './Components/ListTask';

function App() {

  //todos state
  const [todos, setTodos] = useState([]);

  // remove a todo
  const handleRemove = (id) => {
    setTodos( todos.filter((el) => el.id !== id) );
  }
  
  //mark a todo
  const  handleDone = (id) => {
    setTodos( todos.map( (el) => el.id === id ? { ...el, isDone: !el.isDone } : el ));
  };
  
  // new todo
  const [todo, setTodo] = useState("");

  //change todo
  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  //add new todo
  const add = (newTodo) => {
    setTodos([...todos, newTodo]);
    setTodo("");
  }
  return (
    <div className="App">
    <Grid container spacing={3}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <div className="card__todo">
          <Card sx={{  minWidth: 275}}>
            <CardContent>
              <FormGroup>
                <AddTodo
                  newAction={todo}
                  change={handleChange}
                  add={add}
                />
                <ListTask
                  list={todos}
                  delete={handleRemove}
                  done={handleDone}
                />
              </FormGroup>
            </CardContent>
          </Card>
        </div>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  </div>
  );
}

export default App;
