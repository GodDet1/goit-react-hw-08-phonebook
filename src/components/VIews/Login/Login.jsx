import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'Redux/Auth/auth-operations';
import { Form, Label, LabelName } from './styled.module';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmail = e => setEmail(e.currentTarget.value);
  const handlePassword = e => setPassword(e.currentTarget.value);

  const handleLogin = e => {
    e.preventDefault();

    dispatch(authOperations.loginUser({ email, password }));
  };

  return (
    <div className="container">
      <Form onSubmit={handleLogin}>
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

        <button>Login</button>
      </Form>
    </div>
  );
}

export default Login;
