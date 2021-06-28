import React, { useEffect, useState } from 'react';
import styles from './PlantListPage.module.css';

import PlantCard from '../../components/PlantCard/PlantCard';
import SideNav from '../../components/SideNav/SideNav';

import { NewPlant } from '../../../types';

function PlantListPage(): JSX.Element {
  const [plants, setPlants] = useState<NewPlant[]>([]);
  useEffect(() => {
    fetch('/api/plants')
      .then((response) => response.json())
      .then((plants) => setPlants(plants));
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SideNav showSideNavLabel="PlantList" />
      </header>
      <main className={styles.main}>
        {plants.map((plant) => (
          <PlantCard
            key={plant.name}
            name={plant.name}
            imgSrc={plant.imagePath}
            imgName={plant.note}
          />
        ))}
      </main>
    </div>
  );
}

export default PlantListPage;
