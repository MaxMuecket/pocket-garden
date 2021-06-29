import React from 'react';
import PageLink from '../../components/PageLink/PageLink';

import styles from './GardenPage.module.css';

function GardenPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.header__title}>Garden</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.main__newPlant}>
          <PageLink pathname="new-plant" variant="newPlant">
            New<span className={styles.accent}>P</span>lant
          </PageLink>
        </div>
        <div className={styles.main__plantList}>
          <PageLink pathname="plant-list" variant="plantList">
            Plant<span className={styles.accent}>L</span>ist
          </PageLink>
        </div>
        <div className={styles.main__newTask}>
          <PageLink pathname="new-task" variant="newTask">
            New<span className={styles.accent}>T</span>ask
          </PageLink>
        </div>
        <div className={styles.main__gardening}>
          <PageLink pathname="gardening" variant="gardening">
            Gar<span className={styles.accent}>d</span>ening
          </PageLink>
        </div>
      </main>
    </div>
  );
}

export default GardenPage;
