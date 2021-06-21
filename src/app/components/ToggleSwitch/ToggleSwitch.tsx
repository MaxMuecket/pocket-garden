import React from 'react';

import styles from './ToggleSwitch.module.css';

function ToggleSwitch(): JSX.Element {
  return (
    <div className={styles.container}>
      <p>No</p>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>
      <p>Yes</p>
    </div>
  );
}

export default ToggleSwitch;
