import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {ChangeEventHandler, useContext, useState} from "react";
import styles from "./style.module.css";
import {getUser, loginUser} from "../../api/registration";
import {IUser} from "../types/auth";
import {useNavigate} from "react-router-dom";
import {Context} from "../../App";
import { NotificationManager } from "react-notifications";
import {validateEmail, validatePassword} from "../../utils/validation";

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(Context);
  const [error, setError] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const handleOnChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateEmail(event.target.value);
    if(error) {
      if(event.target.value.length === 0) {
        setErrorEmail('')
      } else {
        setErrorEmail(error)
      }
    } else {
      setErrorEmail('')
    }
    setEmail(event.target.value);
  };

  const handleOnChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validatePassword(event.target.value);
    if(error) {
      if(event.target.value.length === 0) {
        setErrorPassword('');
      } else {
        setErrorPassword(error);
      }
    } else {
      setErrorPassword('')
    }
    setPassword(event.target.value);
  };

  const handleOnClick = () => {
    setError('');

    const errors = {
      email: validateEmail(email),
      password: validatePassword(password),
    };

    setErrorEmail(errors.email);
    setErrorPassword(errors.password);

    const isValid = Object.values(errors).every((error) => error === '');

    let isOk = true;

    if(isValid) {
      loginUser(email, password)
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
            NotificationManager.error('Error!', 'Something goes wrong, try again')
          };

          return response.json();
        })
        .then((json) => {
          if(isOk) {
            localStorage.setItem('access', json.access);
            localStorage.setItem('refresh', json.refresh);

            getUser()
              .then((response) => {
                return response.json();
              })
              .then((user: IUser | null) => {
                setUser(user);
                navigate('/');
              });
          } else {
            if(json.detail.includes('No active account found')) {
              NotificationManager.error('Error!', 'No active account found with the given credentials');
              return
            };
          };
        });
    }
  };

  return (
    <div className={styles.formWrap}>
      <h1>Login</h1>
      <div className={styles.formWrapContent}>
        <label>Email</label>
        <Input text={email} placeholder='type an email' onChange={handleOnChangeEmail} />
        <p className={styles.error}>{errorEmail}</p>
        <label>Password</label>
        <Input text={password} placeholder='type password' onChange={handleOnChangePassword} type={'password'} />
        <p className={styles.error}>{errorPassword}</p>
      </div>
      <Button name='Login' onClick={() => handleOnClick()}></Button>
    </div>
  )
}