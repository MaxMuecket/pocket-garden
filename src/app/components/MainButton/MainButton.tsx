import React from 'react';
import styles from './MainButton.module.css';

export type MainButtonProps = {
  children: string;
  onClick?: () => void;
};

function Button({ children, onClick }: MainButtonProps): JSX.Element {
  return (
    <>
      <button className={styles.mainButton} onClick={onClick}>
        <h3 className={styles.mainButton__title}>{children}</h3>
        <div className={styles.mainButton__circle}></div>
      </button>
    </>
  );
}
export default Button;
