import React from 'react'
import { Form, Field } from 'react-final-form'

const onSubmit = values => {
    return new Promise(resolve=>{
        setTimeout(()=>{
            window.alert(JSON.stringify(values, 0, 2))
        }, 1000)
        resolve()
    })
}

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i


const validate = values =>{
  const errors = {}

  if(!values.email){
    errors.email = "Email cannot be empty"
  }else if (values.email.length>50){
    errors.email = "Email cannot be more than 50 characters"
  }else if (!emailRegex.test(values.email)){
    errors.email = "Email is invalid."
  }

  if(!values.password){
    errors.password = "Password cannot be empty"
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
        <form onSubmit={props.handleSubmit}>
          <div>
          <Field name="email">
              {({input, meta})=>{
                return (
                  <div>
                    <div>
                    <label htmlFor="Email">Email</label><br/>
                    <input {...input} type='text' placeholder="user@rapptr.labs.com"></input>
                    </div>
                    <div>{meta.error && meta.touched && (<span className='errorMessage'>{meta.error}</span>)}</div>
                  </div>
                )
              }}
            </Field>
          </div>
          <div>
            <Field name="password">
              {({input, meta})=>{
                return (
                  <div>
                    <div>
                    <label htmlFor="password">password</label><br/>
                    <input {...input} type='text' placeholder="Password"></input>
                    </div>
                    <div>{meta.error && meta.touched && (<span className='errorMessage'>{meta.error}</span>)}</div>
                  </div>
                )
              }}
            </Field>
          </div>
          <button type="submit" className={props.pristine ? "pristine" : "notPristine" } disabled={props.submitting}>Submit</button>
        </form>
      )}
    </Form>
)

export default LoginPage