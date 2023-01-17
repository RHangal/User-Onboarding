import Form from './components/form';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import schema from './components/formSchema';
import * as yup from "yup";
import Users from './components/user';

import './App.css';

const initialFormValues ={
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: false,
  civil: ''
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: 'You must agree to the Terms of Service',
  civil: '',
}

const initialUsers = [];
const initialDisabled = true;

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ""}))
    .catch(err =>setFormErrors({...formErrors, [name]: err.errors[0]}))
  }


  /*Since we're not getting any users initially the .get is unessarry */
  // const getUsers = () => {
  //   axios.get("https://reqres.in/api/users")
  //   .then(res =>{
  //     console.log(res.data)
  //     setUsers([res.data])
  //   }).catch(err => console.error(err));
  // }

  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
    .then(res =>{
      console.log(res.data)
      setUsers([res.data,...users])
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  };





  const inputChange = (name, value) =>{
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      civil: formValues.civil.trim(),
    }
    postNewUser(newUser);
  }
/*getUsers in unessessary as we're not rendering users when the screen loads */
//  useEffect(() => {
//   getUsers()
//  },[]);

 useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
 },[formValues]);

  return (
    <div className="App">
         <h1>Advanced Form Management</h1> 
         <Form 
         values={formValues}
         disabled={disabled}
         change={inputChange}
         submit={formSubmit}
         errors={formErrors}
         />
         <div className='users--container'>
          {users.map(user =>{
           return(<Users key={user.id} details={user}/>)
          })}
          </div>
    </div>
  );
}

export default App;
