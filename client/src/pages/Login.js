import React, { useState, useContext } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../utils/hooks';
import { AuthContext } from '../context/auth';


function Login(props) {
  const historyPush = useNavigate();

  const context = useContext(AuthContext);
  
  const [errors, setErrors] = useState('');

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: '',
    password: ''
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, {data: {login: userData}}){
      context.login(userData);
      historyPush('/');
    },
    onError(err){
      console.log(err);
      let e = err.graphQLErrors[0].extensions.errors;
      setErrors(e);
    },
    variables: values
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <div className='form-container'>
      <Form onSubmit={onSubmit} className={loading ? 'loading' : ''} noValidate>
        <h1>Login</h1>
        <Form.Input
          label="Username"
          placeholder="Username"
          type='text'
          name="username"
          value={values.username}
          error={errors.username ? true : false}
          onChange={onChange}
        />
        <Form.Input
          label="Password"
          placeholder="Password"
          type='password'
          name="password"
          value={values.password}
          error={errors.password ? true : false}
          onChange={onChange}
        />
        <Button type='submit' primary>
          Login
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className='ui error message'>
          <ul className='list'>
            {Object.values(errors).map((value) => <li key={value}>{value}</li>)}
          </ul>
      </div>
      )}
    </div>
  )
}

const LOGIN_USER = gql `
  mutation login(
    $username: String!
    $password: String!
  ){
    login( username: $username password: $password){
      id
      username
      email
      createdAt
      token
    }
  }
`

export default Login;