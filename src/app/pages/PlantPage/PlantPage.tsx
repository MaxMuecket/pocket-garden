import React from 'react';
import DateButton from '../../components/DateButton/DateButton';
import MainButton from '../../components/MainButton/MainButton';
import PageInput from '../../components/PageInput/PageInput';
import PageTextarea from '../../components/PageTextarea/PageTextarea';
import PlaceButton from '../../components/PlaceButton/PlaceButton';
import SideNav from '../../components/SideNav/SideNav';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';

import styles from './PlantPage.module.css';

import usePlantDetails from '../../hooks/usePlantDetails';
import { useParams } from 'react-router-dom';

function PlantPage(): JSX.Element {
  const { name } = useParams<{ name: string }>();
  const { plant, isLoading, errorMessage } = usePlantDetails(name);

  if (errorMessage) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!plant) {
    return <div>Plant not found</div>;
  }

  console.log(plant);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SideNav showSideNavLabel={`${plant.name}`} />
      </header>

      <main className={styles.main}>
        <article className={styles.article}>
          <label className={styles.article__label}>
            <input
              type="file"
              onChange={console.log}
              className={styles.article__file}
              disabled
            />
            <img src={plant.imagePath} className={styles.article__image} />
          </label>
          <div className={styles.article__inputName}>
            <PageInput
              variant="newPlantName"
              placeholder="Please enter a name"
              value={plant.name}
              onNameChange={console.log}
              disabled
            />
          </div>
          <div className={styles.article__sowing}>
            <h3>Sowing:</h3>
            <DateButton
              month={plant.firstMonth}
              onMonthChange={console.log}
              disabled
            />
            <span className={styles.article__sowing_line}></span>
            <DateButton
              month={plant.lastMonth}
              onMonthChange={console.log}
              disabled
            />
          </div>
          <div className={styles.article__place}>
            <h3>Place:</h3>
            <PlaceButton
              place={plant.place}
              onPlaceChange={console.log}
              disabled
            />
          </div>
          <div className={styles.article__perennial}>
            <h3>Perennial:</h3>
            <ToggleSwitch
              checked={plant.active}
              onChange={console.log}
              disabled
            />
          </div>
          <div className={styles.article__inputNote}>
            <PageTextarea
              variant="newPlantNote"
              placeholder="Note..."
              value={plant.note}
              disabled
              onChange={console.log}
            />
          </div>
          <div className={styles.article__submitButton}>
            <MainButton children="task" />
            <MainButton children="edit" />
          </div>
        </article>
      </main>
    </div>
  );
}
export default PlantPage;
