
import './App.css';
import Form from './components/Form'
import axios from 'axios'
import React, {useState, useEffect} from 'react'

  const initialFormValues = {
    first_name: '', 
    last_name: '', 
    email: '', 
    password: '', 
    tos: false, 
  }

  const initialFormErrors = {
    first_name: '', 
    last_name: '', 
    email: '', 
    password: '', 
    tos: false, 
  }

  const initialTeam = []
  const initialDisabled = true;


function App() {


  const [formValues, setFormValues] = useState(initialFormValues)
  const [users, setUsers] = useState(initialTeam)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled);

  axios.get('https://reqres.in/api/users')
  .then(res => {
    setUsers(res.data);
  })
  .catch(err => console.error(err))

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
