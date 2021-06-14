import React from 'react';

import styles from './LandingPage.module.css';

function LandingPage(): JSX.Element {
  return (
    <header>
      <div className={styles.container}>
        <a className={styles.title} href="#">
          Pocket-<br></br>Garden
        </a>
      </div>
    </header>
  );
}

export default LandingPage;
