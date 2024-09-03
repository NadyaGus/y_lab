import type { ReactNode } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { signIn } from './api/Api';

import classes from './SignIn.module.css';

interface Inputs {
  email: string;
  password: string;
}

export function SignIn(): ReactNode {
  const { handleSubmit, register } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signIn({ email: data.email, password: data.password });
  };

  return (
    <div>
      <form className={classes.form} onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
        <h1>Войти</h1>
        <label className={classes.label}>
          Email
          <input className={classes.input} placeholder="Введите email" type="text" {...register('email')} />
        </label>
        <label className={classes.label}>
          Пароль
          <input className={classes.input} placeholder="Введите пароль" type="password" {...register('password')} />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
