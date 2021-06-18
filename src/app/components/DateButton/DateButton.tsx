import React, { useState } from 'react';
import styles from './DateButton.module.css';

const buttonDate = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function DateButton(): JSX.Element {
  const [currentMonth, setCurrentMonth] = useState(0);

  function handleClick() {
    setCurrentMonth(currentMonth + 1);
    if (currentMonth === 11) setCurrentMonth(0);
  }

  return (
    <button className={styles.button} onClick={() => handleClick()}>
      {buttonDate[currentMonth]}
    </button>
  );
}

export default DateButton;
