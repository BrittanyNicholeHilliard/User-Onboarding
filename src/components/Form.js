
import React from 'react'


export default function Form(props) {

 const { change, submit, errors } = props 
 const {first_name, last_name, email, password, checked} = props.formValues;

    const onSubmit = evt => {
    evt.preventDefault()
    submit()
    }

    const onChange = evt => {
        const {name, value, tos, type } = evt.target
        const newVal = type === 'checkbox' ? tos : value
        change(name, newVal);
    }


 

 return (
    <form className='formcontainer' onSubmit={onSubmit} >
        <p> {errors.first_name} </p>
        <p> {errors.last_name}</p>
        <p> {errors.email}</p>
        <p> {errors.password}</p>
        <p> {errors.tos}</p>
        <h1> CREATE AN ACCOUNT </h1>
        <div><label>First Name: 
            <input type='text' name='first_name' onChange={onChange} value={first_name}/>
        </label>
        <label>Last Name: 
            <input type='text' name='last_name' onChange={onChange} value={last_name} />
        </label></div>
        <div><label>Email Address: 
            <input type='email' name='email' onChange={onChange} value={email} />
        </label></div>
        <label> Password:
            <input type='text' name='password' onChange={onChange} value={password} />
        </label>
        <div><label>Terms Of Service: 
            <input type='checkbox' name='tos' checked={checked} onChange={onChange} />
        </label></div>
                <input type='submit' value="Create Account"  />
    </form>

 )
}

