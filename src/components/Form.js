import React from 'react'

export default function Form(props) {

 const { values, submit, change, disabled, errors } = props 

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}


 

 return (
    <form className='formcontainer' >
        <h1> CREATE AN ACCOUNT </h1>
        <div><label>First Name: 
            <input type='text' name='first_name' />
        </label>
        <label>Last Name: 
            <input type='text' name='last_name' />
        </label></div>
        <label>Password:
            <input type='text' name='password' />
        </label>
        <div><label>Terms Of Service: 
            <input type='checkbox' name='tos'/>
        </label></div>
    </form>


 )
}

