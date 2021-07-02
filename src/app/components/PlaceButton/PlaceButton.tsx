import React from 'react';
import styles from './PlaceButton.module.css';

export type PlaceButtonProps = {
  place: number;
  disabled?: boolean;
  onPlaceChange: (place: number) => void;
};

const buttonPlace = ['sunny', 'half shady', 'shady'];

function PlaceButton({
  place,
  disabled,
  onPlaceChange,
}: PlaceButtonProps): JSX.Element {
  function handleClick() {
    onPlaceChange((place + 1) % 3);
  }

  return (
    <button
      className={styles.button}
      onClick={() => handleClick()}
      type="button"
      disabled={disabled}
    >
      {buttonPlace[place]}
    </button>
  );
}

export default PlaceButton;
