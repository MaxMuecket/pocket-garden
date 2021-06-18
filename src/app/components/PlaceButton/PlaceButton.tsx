import React, { useState } from 'react';
import styles from './PlaceButton.module.css';

const buttonDate = ['sunny', 'half shady', 'shady'];

function PlaceButton(): JSX.Element {
  const [currentPlace, setCurrentPlace] = useState(0);

  function handleClick() {
    setCurrentPlace(currentPlace + 1);
    if (currentPlace === 2) setCurrentPlace(0);
  }

  return (
    <button className={styles.button} onClick={() => handleClick()}>
      {buttonDate[currentPlace]}
    </button>
  );
}

export default PlaceButton;