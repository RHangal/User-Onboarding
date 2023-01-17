import React from 'react'

export default function Form(props){
    const {values, submit, change, disabled, errors} = props;

    const onChange = evt =>{
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
} 

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }



    return (
        
        <form className='form' onSubmit={onSubmit}>
            <div>{errors.first_name}</div>
            <div>{errors.last_name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.tos}</div>
            <div>{errors.civil}</div>
                <div className="form--container">
                <label>First Name
                    <input onChange={onChange} name ='first_name' value={values.first_name}type='text' placeholder='First Name' />
                </label>
                <label>Last Name
                    <input onChange={onChange} name ='last_name' value={values.last_name}type='text' placeholder='Last Name' />
                </label>
                <label>Email
                    <input onChange={onChange} name ='email' value={values.email}type='email' placeholder='Email' />
                </label>
                <label>Password
                    <input onChange={onChange} name ='password' value={values.password}type='password' placeholder='Password' />
                </label>
                <label>Agree to the Terms of Service
                    <input onChange={onChange} name ='tos' type='checkbox' checked={values.tos}/>
                </label>
                <label>Single
                    <input onChange={onChange} name='civil' value='single' type='radio' checked={values.civil === 'single'}/>
                </label>
                <label>Married
                    <input onChange={onChange} name='civil' value='married' type='radio' checked={values.civil === 'married'}/>
                </label>
                <button disabled={disabled}>Submit</button>
        </div>
            </form>
        
    )
}