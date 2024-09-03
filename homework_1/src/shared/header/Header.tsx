import type { ReactNode } from 'react';

import classes from './Header.module.css';

export function Header(): ReactNode {
  const handleClick = (): void => {
    // TODO: add modal here
    alert('О задании');
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Y_LAB Homework by NadyaGus</h1>
      <button className={classes.button} onClick={handleClick}>
        О задании
      </button>
    </header>
  );
}
