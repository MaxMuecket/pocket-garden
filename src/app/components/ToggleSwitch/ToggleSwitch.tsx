import React from 'react';

import styles from './ToggleSwitch.module.css';

export type ToggleSwitchProps = {
  checked: boolean;
  onChange: (toggled: boolean) => void;
};

function ToggleSwitch({ checked, onChange }: ToggleSwitchProps): JSX.Element {
  return (
    <div className={styles.container}>
      <p>No</p>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onChange(!checked)}
        />
        <span className={styles.slider}></span>
      </label>
      <p>Yes</p>
    </div>
  );
}

export default ToggleSwitch;
