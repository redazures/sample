import React from 'react'
import { Form, Field } from 'react-final-form'
import { InputAdornment, Input } from '@material-ui/core';
import { Person, Lock } from '@material-ui/icons';

import EmailValidate from '../auth/EmailValidate'
import './LoginPage.css';

const onSubmit = values => {
    return new Promise(resolve=>{
        setTimeout(()=>{
            window.alert(JSON.stringify(values, 0, 2))
        }, 1000)
        resolve()
    })
}



const validate = values =>{
  const errors = {}

  if(!values.email){
    errors.email = "Email field cannot be empty"
  }else if (values.email.length>50){
    errors.email = "Email cannot be more than 50 characters"
  }else if (!EmailValidate.test(values.email)){
    errors.email = "Email is invalid."
  }

  if(!values.password){
    errors.password = "Password field cannot be empty"
  }else if (values.password.length < 4 || values.password.length>16){
    errors.password ='Password should be between 4 and 16 characters'
  }

  return errors
}

const LoginPage = () => (
    <Form 
      onSubmit={onSubmit}
      validate={validate}
    >
      {props => (
        <form onSubmit={props.handleSubmit} className="loginform">
          <Field name="email" className="fields">
              {({input, meta})=>{
                return (
                  <div>
                    <div>
                    <label htmlFor="Email">Email</label><br/>
                    <div className="formInputs" id={meta.error && meta.touched ? "errorBorder" : null}>
                    <Input 
                      {...input}
                      type='text'
                      placeholder="user@rapptr.labs.com"
                      fullWidth
                      id="email"
                      startAdornment={
                        <InputAdornment position="start">
                          <Person/>
                        </InputAdornment>
                      }/>
                    </div>
                    </div>
                    <div className='errorMessage'>{meta.error && meta.touched && (<span className='errorMessage'>{meta.error}</span>)}</div>
                  </div>
                )
              }}
          </Field>
          <Field name="password" className="fields">
            {({input, meta})=>{
              return (
                <div>
                  <div>
                  <label htmlFor="password">Password</label><br/>
                  <div className="formInputs" id={meta.error && meta.touched ? "errorBorder" : null}>
                    <Input 
                      {...input}
                      type='text'
                      placeholder="Password"
                      fullWidth
                      id="password"
                      startAdornment={
                        <InputAdornment position="start">
                          <Lock/>
                        </InputAdornment>
                      }/>
                    </div>
                  </div>
                  <div className='errorMessage'>{meta.error && meta.touched && (<span className='errorMessage'>{meta.error}</span>)}</div>
                </div>
              )
            }}
          </Field>
          <button type="submit" id="loginButton" className={props.pristine ? "pristine" : "notPristine" } disabled={props.submitting}>Login</button> 
          <pre>{JSON.stringify(props.values,0,2)}</pre>
        </form>
      )}
    </Form>
)

export default LoginPage