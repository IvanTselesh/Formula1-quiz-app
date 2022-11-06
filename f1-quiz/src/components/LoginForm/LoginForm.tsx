import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {ChangeEventHandler, useContext, useState} from "react";
import styles from "./style.module.css";
import {getUser, loginUser} from "../../api/registration";
import {IUser} from "../types/auth";
import {useNavigate} from "react-router-dom";
import {Context} from "../../App";
import { NotificationManager } from "react-notifications";

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(Context);

  const handleOnChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const handleOnClick: ChangeEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event?.target as any);
    const obj = Object.fromEntries(Array.from(formData.entries()));
    const email: string = obj.email as string;
    const password: string = obj.password as string;

    const promise = loginUser(email, password);
    let isOk = true;

    promise
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
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
            NotificationManager.error('No active account found with the given credentials');
            return
          };
        };
      });
  };

  return (
    <div className={styles.formWrap}>
      <h1>Login</h1>
      <div className={styles.formWrapContent}>
        <label>Email</label>
        <Input text={email} placeholder='type an email' onChange={handleOnChangeEmail} />
        <label>Password</label>
        <Input text={password} placeholder='type password' onChange={handleOnChangePassword} />
      </div>
      <Button name='Login' onClick={() => handleOnClick}></Button>
    </div>
  )
}