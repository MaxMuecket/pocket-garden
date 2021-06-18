import React from 'react';
import styles from './PageTextarea.module.css';

export type PageTextareaProps = {
  placeholder: string;
  value: string;
  variant: 'newPlantNote' | 'newTaskDescription';
  onChange: (value: string) => void;
};

function PageTextarea({
  placeholder,
  value,
  variant,
  onChange,
}: PageTextareaProps): JSX.Element {
  return (
    <>
      <textarea
        className={styles[variant]}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </>
  );
}

export default PageTextarea;
