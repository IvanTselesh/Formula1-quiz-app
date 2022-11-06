import styles from "../LoginForm/style.module.css";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {ChangeEventHandler, useState} from "react";
import {useNavigate} from "react-router-dom";
import {validateConfirm, validateEmail, validatePassword, validateRequired} from "../../utils/validation";
import {registrateUser} from "../../api/registration";

export const RegForm = () => {
  const [userName, setUserName] = useState('');
  const [errorUserName, setErrorUserName] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorRepeatPassword, setErrorRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleOnChangeUserName: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateRequired(event.target.value);
    if(error) {
      setErrorUserName(error);
    } else {
      setErrorUserName('')
    }
    setUserName(event.target.value);
  };

  const handleOnChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateEmail(event.target.value);
    if(error) {
      setErrorEmail(error)
    } else {
      setErrorEmail('')
    }
    setEmail(event.target.value);
  };

  const handleOnChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validatePassword(event.target.value);
    if(error) {
      setErrorPassword(error);
    } else {
      setErrorPassword('')
    }
    setPassword(event.target.value);
  };

  const handleOnChangeRepeatPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateConfirm(password, event.target.value);
    if(error) {
      setRepeatPassword(error);
    } else {
      setRepeatPassword('')
    }
    setRepeatPassword(event.target.value);
  };

  const handleOnClick = () => {
    setError('');

    const errors = {
      user: validateRequired(userName),
      email: validateEmail(email),
      password: validatePassword(password),
      repeatPassword: validateConfirm(password, repeatPassword),
    };

    setErrorUserName(errors.user);
    setErrorEmail(errors.email);
    setErrorPassword(errors.password);
    setErrorRepeatPassword(errors.repeatPassword);

    const isValid = Object.values(errors).every((error) => error === '');

    if(isValid) {
      const promise = registrateUser(userName, email, password);
      let isOk = true;

      promise
        .then((response) => {
          if(response.ok) {
            isOk = true
          } else {
            isOk = false
          };
          response.json();
        })
        .then((json: any) => {
          if(isOk) {
            navigate('/reg-success');
          } else {
            if (json?.email?.includes('user with this Email already exists.')) {
              setError("User with this Email already exists");
              return;
            };
            if (json?.username?.includes("A user with that username already exists.")) {
              setError('A user with that username already exists.');
              return;
            };
            if(json?.password?.includes("The password is too similar to the username.")) {
              setError("The password is too similar to the username.");
              return;
            };
          }
        })
    }
  }

  return (
    <div className={styles.formWrap}>
      <h1>Registration</h1>
      <div className={styles.formWrapContent}>
        <label>Username</label>
        <Input text={userName} placeholder='type username' onChange={handleOnChangeUserName} />
        <p className={styles.error}>{errorUserName}</p>
        <label>Email</label>
        <Input text={email} placeholder='type an email' onChange={handleOnChangeEmail} />
        <p className={styles.error}>{errorEmail}</p>
        <label>Password</label>
        <Input text={password} placeholder='type password' onChange={handleOnChangePassword} type='password' />
        <p className={styles.error}>{errorPassword}</p>
        <label>Repeat password</label>
        <Input text={repeatPassword} placeholder='repeat password' onChange={handleOnChangeRepeatPassword} type='password' />
        <p className={styles.error}>{errorRepeatPassword}</p>
      </div>
      <Button name='Sign Up' onClick={() => {}}></Button>
    </div>
  )
}
