import React from 'react';
import styles from './PageInput.module.css';

export type PageInputProps = {
  label?: string;
  placeholder: string;
  value: string;
  type?: string;
  onNameChange: (name: string) => void;
  variant: 'newPlantName' | 'newTaskTitle' | 'newTaskDate';
};

function PageInput({
  label,
  placeholder,
  value,
  variant,
  type,
  onNameChange,
}: PageInputProps): JSX.Element {
  return (
    <label className={styles.container}>
      {label}
      <input
        className={styles[variant]}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(event) => onNameChange(event.target.value)}
      />
    </label>
  );
}

export default PageInput;
