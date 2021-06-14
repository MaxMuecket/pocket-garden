import React from 'react';

import styles from './LandingPage.module.css';

function LandingPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <a className={styles.title} href="#">
        Pocket-
        <br />
        Garden
      </a>
    </div>
  );
}

export default LandingPage;
