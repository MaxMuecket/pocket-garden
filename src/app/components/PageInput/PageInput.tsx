import React from 'react';
import styles from './PageInput.module.css';

export type PageInputProps = {
  label?: string;
  placeholder: string;
  value: string;
  disabled?: boolean;
  type?: string;
  onChange: (name: string) => void;
  variant: 'newPlantName' | 'newTaskTitle' | 'newTaskDate';
};

function PageInput({
  label,
  placeholder,
  value,
  variant,
  disabled,
  type,
  onChange,
}: PageInputProps): JSX.Element {
  return (
    <label className={styles.container}>
      {label}
      <input
        className={styles[variant]}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        type={type}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default PageInput;
