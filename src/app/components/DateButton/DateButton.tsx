import React from 'react';
import styles from './DateButton.module.css';

export type DateButtonProps = {
  month: number;
  disabled?: boolean;
  onMonthChange: (month: number) => void;
};

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

function DateButton({
  month,
  disabled,
  onMonthChange,
}: DateButtonProps): JSX.Element {
  function handleClick() {
    onMonthChange((month + 1) % 12);
  }

  return (
    <button
      className={styles.button}
      onClick={() => handleClick()}
      type="button"
      disabled={disabled}
    >
      {buttonDate[month]}
    </button>
  );
}

export default DateButton;
