import React from 'react';
import styles from './PageTextarea.module.css';

export type PageTextareaProps = {
  placeholder: string;
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  variant: 'newPlantNote' | 'newTaskDescription';
};

function PageTextarea({
  placeholder,
  value,
  variant,
  disabled,
  onChange,
}: PageTextareaProps): JSX.Element {
  return (
    <>
      <textarea
        className={styles[variant]}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
      />
    </>
  );
}

export default PageTextarea;
