import React from 'react';
import {
  Gardening,
  NewPlant,
  NewTask,
  PlantList,
} from '../../components/Button/PageLink/PageLink.stories';

import styles from './GardenPage.module.css';

function GardenPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.header__title}>Garden</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.main__newPlant}>
          <NewPlant />
        </div>
        <div className={styles.main__plantList}>
          <PlantList />
        </div>
        <div className={styles.main__newTask}>
          <NewTask />
        </div>
        <div className={styles.main__gardening}>
          <Gardening />
        </div>
      </main>
    </div>
  );
}

export default GardenPage;
