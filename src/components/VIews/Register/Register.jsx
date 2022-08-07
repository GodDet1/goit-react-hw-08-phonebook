import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'Redux/Auth/auth-operations';
import { Form, Label, LabelName } from './styled.module';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmail = e => setEmail(e.currentTarget.value);
  const handleName = e => setName(e.currentTarget.value);
  const handlePassword = e => setPassword(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.registerUser({ name, email, password }));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <LabelName>Name</LabelName>
          <input type="name" name="login" value={name} onChange={handleName} />
        </Label>

        <Label>
          <LabelName>Email</LabelName>
          <input
            type="email"
            name="login"
            value={email}
            onChange={handleEmail}
          />
        </Label>
        <Label>
          <LabelName>Password</LabelName>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </Label>

        <button>Register</button>
      </Form>
    </>
  );
}

export default Register;
