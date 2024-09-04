import { type ReactNode, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { clsx } from 'clsx';

import { Modal } from '@/shared/modal/Modal';

import { signIn } from './api/Api';

import classes from './SignIn.module.css';

interface Inputs {
  email: string;
  password: string;
}

export function SignIn(): ReactNode {
  const [login, setLogin] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    resetField,
  } = useForm<Inputs>();

  const resetFields = (): void => {
    resetField('email');
    resetField('password');
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const response = signIn({ email: data.email, password: data.password });
    response
      .then(() => {
        setLogin(true);
      })
      .catch((err) => {
        console.error(err);
        setLogin(false);
      })
      .finally(() => {
        setModalIsOpen(true);
        resetFields();
      });
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
        <h1 className={classes.title}>Войти</h1>

        <label className={classes.label}>
          Email
          <input
            className={clsx(classes.input, { [classes.invalid]: errors.email })}
            placeholder="Введите email"
            type="text"
            {...register('email', {
              pattern: { message: 'Некорректный email', value: /^\S+@\S+$/i },
              required: 'Обязательное поле',
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          <p className={clsx(classes.error, { [classes.hidden]: !errors.email })}>{errors.email?.message}</p>
        </label>

        <label className={classes.label}>
          Пароль
          <input
            aria-invalid={errors.email ? 'true' : 'false'}
            className={clsx(classes.input, { [classes.invalid]: errors.password })}
            placeholder="Введите пароль"
            type="password"
            {...register('password', { required: 'Обязательное поле' })}
          />
          <p className={clsx(classes.error, { [classes.hidden]: !errors.password })}>{errors.password?.message}</p>
        </label>

        <button className={classes.button} type="submit">
          Войти
        </button>
      </form>

      <Modal login={login} open={modalIsOpen} setOpen={setModalIsOpen} />
    </div>
  );
}
