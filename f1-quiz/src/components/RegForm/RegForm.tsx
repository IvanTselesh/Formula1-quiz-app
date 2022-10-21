import styles from "../LoginForm/style.module.css";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {ChangeEventHandler, useState} from "react";

export const RegForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleOnChangeUserName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserName(event.target.value);
  };

  const handleOnChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const handleOnChangeRepeatPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setRepeatPassword(event.target.value);
  };

  return (
    <div className={styles.formWrap}>
      <h1>Registration</h1>
      <div className={styles.formWrapContent}>
        <label>Username</label>
        <Input text={userName} placeholder='type username' onChange={handleOnChangeUserName} />
        <label>Email</label>
        <Input text={email} placeholder='type an email' onChange={handleOnChangeEmail} />
        <label>Password</label>
        <Input text={password} placeholder='type password' onChange={handleOnChangePassword} />
        <label>Repeat password</label>
        <Input text={repeatPassword} placeholder='repeat password' onChange={handleOnChangeRepeatPassword} />
      </div>
      <Button name='Sign Up' onClick={() => {}}></Button>
    </div>
  )
}
