import React from 'react';
import styles from './PageLink.module.css';
import PageLink from './PageLink';

export default {
  title: 'Component/PageLink',
  component: PageLink,
};

export const NewPlant = (): JSX.Element => (
  <PageLink pathname="#" variant="newPlant">
    New<span className={styles.accent}>P</span>lant
  </PageLink>
);

export const PlantList = (): JSX.Element => (
  <PageLink pathname="#" variant="plantList">
    Plant<span className={styles.accent}>L</span>ist
  </PageLink>
);

export const NewTask = (): JSX.Element => (
  <PageLink pathname="#" variant="newTask">
    New<span className={styles.accent}>T</span>ask
  </PageLink>
);

export const Gardening = (): JSX.Element => (
  <PageLink pathname="#" variant="gardening">
    Gar<span className={styles.accent}>d</span>ening
  </PageLink>
);
