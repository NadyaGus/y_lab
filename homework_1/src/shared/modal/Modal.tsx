import type { Dispatch, ReactNode } from 'react';

import { clsx } from 'clsx';

import classes from './Modal.module.css';

export const Modal = ({
  login,
  open,
  setOpen,
}: {
  login: boolean;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}): ReactNode => {
  return (
    <div className={clsx(classes.modalBackground, { [classes.hidden]: !open })}>
      <div className={clsx(classes.modal, { [classes.isError]: !login })}>
        {login ? <h2>Успешно</h2> : <h2>Ошибка</h2>}
        {login ? <p>Вы вошли в аккаунт</p> : <p>Пользователь не найден</p>}
        <button onClick={() => setOpen(false)}>Закрыть</button>
      </div>
    </div>
  );
};
