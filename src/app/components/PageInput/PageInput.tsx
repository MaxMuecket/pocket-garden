import React from 'react';
import styles from './PageInput.module.css';

export type PageInputProps = {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  variant: 'newPlantName' | 'newTaskTitle' | 'newTaskDate';
};

function PageInput({
  label,
  placeholder,
  value,
  onChange,
  variant,
}: PageInputProps): JSX.Element {
  return (
    <label className={styles.container}>
      {label}
      <input
        className={styles[variant]}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default PageInput;
