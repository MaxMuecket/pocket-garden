import React from 'react';
import styles from './PageInput.module.css';

export type PageInputProps = {
  label?: string;
  placeholder: string;
  value: string;
  disabled?: boolean;
  onNameChange: (name: string) => void;
  variant: 'newPlantName' | 'newTaskTitle' | 'newTaskDate';
};

function PageInput({
  label,
  placeholder,
  value,
  variant,
  disabled,
  onNameChange,
}: PageInputProps): JSX.Element {
  return (
    <label className={styles.container}>
      {label}
      <input
        className={styles[variant]}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(event) => onNameChange(event.target.value)}
      />
    </label>
  );
}

export default PageInput;
