import React from 'react';
import styles from './PlantListPage.module.css';

import PlantCard from '../../components/PlantCard/PlantCard';
import SideNav from '../../components/SideNav/SideNav';

import { Link } from 'react-router-dom';
import usePlants from '../../hooks/usePlants';

function PlantListPage(): JSX.Element {
  const { plants, isLoading, errorMessage } = usePlants();

  if (errorMessage) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!plants) {
    return <div>Pants not found</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SideNav showSideNavLabel="PlantList" />
      </header>
      <main className={styles.main}>
        {plants.map((plant) => (
          <Link
            to={`/plants/${plant.name}`}
            className={styles.main__detailLink}
          >
            <PlantCard
              key={plant.name}
              name={plant.name}
              imgSrc={plant.imagePath}
              imgName={plant.note}
            />
          </Link>
        ))}
      </main>
    </div>
  );
}

export default PlantListPage;
