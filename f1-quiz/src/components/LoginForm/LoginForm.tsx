import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {ChangeEventHandler, useState} from "react";
import styles from "./style.module.css";

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
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
      <Button name='Login' onClick={() => {}}></Button>
    </div>
  )
}