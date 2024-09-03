import type { ReactNode } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import classes from './SignIn.module.css';

interface Inputs {
  login: string;
  password: string;
}

export function SignIn(): ReactNode {
  // const handleSubmit = (e: FormEvent): void => {
  //   e.preventDefault();
  //   console.log('submit');
  // };

  const { handleSubmit, register } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <form className={classes.form} onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
        <h1>Войти</h1>
        <label className={classes.label}>
          Логин
          <input className={classes.input} type="text" {...register('login')} />
        </label>
        <label className={classes.label}>
          Пароль
          <input className={classes.input} type="password" {...register('password')} />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
