import type { ReactNode } from 'react';

import classes from './Header.module.css';

export function Header(): ReactNode {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Y_LAB Homework</h1>
        <a className={classes.link} href="https://github.com/NadyaGus" rel="noreferrer" target="_blank">
          By NadyaGus
        </a>
      </div>
    </header>
  );
}
