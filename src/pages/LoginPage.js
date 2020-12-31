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

const validate = values =>{
  const errors = {}
  if(!values.password){
    errors.password = "Password is empty"
  }else if (values.password.length<8){
    errors.password='Password is too short'
  }
}

const LoginPage = () => (
    <Form 
      onSubmit={onSubmit}
      validate={validate}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label><br/>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="user@rapptr.labs.com"
            />
          </div>
          <div>
            <label htmlFor="password">password</label><br/>
            <Field
              name="password"
              component="input"
              type="text"
              placeholder="Password"
            />
          </div>
          <button type="submit" classname={props.pristine ? "pristine" : "notPristine" } disabled={props.submitting}>Submit</button>
        </form>
      )}
    </Form>
)

export default LoginPage