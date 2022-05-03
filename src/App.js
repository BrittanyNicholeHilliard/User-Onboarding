
import './App.css';
import Form from './components/Form'
import axios from 'axios'
import React, {useState} from 'react'
import * as yup from 'yup'

import schema from './validation/formSchema';


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


function App() {

  
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([])

  const validate= (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = newUser => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      setUsers([res.data, ...users]);
      setFormValues(initialFormValues);
    })
    .catch(err => console.error(err))
  }






  return (
    <div className="App">
      <Form 
      values={formValues}
      change={handleChange}
      submit={handleSubmit}
      errors={formErrors}/>
        <p>{users.createdAt}</p>
        <p> {users.email} </p>
    </div>
  );
}

export default App;
