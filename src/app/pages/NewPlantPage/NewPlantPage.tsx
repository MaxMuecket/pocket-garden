import React, { useState } from 'react';
import DateButton from '../../components/DateButton/DateButton';
import MainButton from '../../components/MainButton/MainButton';
import PageInput from '../../components/PageInput/PageInput';
import PageTextarea from '../../components/PageTextarea/PageTextarea';
import PlaceButton from '../../components/PlaceButton/PlaceButton';
import SideNav from '../../components/SideNav/SideNav';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';

import styles from './NewPlantPage.module.css';

function NewPlantPage(): JSX.Element {
  const [name, setName] = useState('');
  const [firstMonth, setFirstMonth] = useState(0);
  const [lastMonth, setLastMonth] = useState(0);
  const [place, setPlace] = useState(0);
  const [active, setActive] = useState(false);
  const [note, setNote] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SideNav showSideNavLabel="NewPlant" />
      </header>

      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="file" className={styles.form__file} />

          <div className={styles.form__inputName}>
            <PageInput
              variant="newPlantName"
              placeholder="Please enter a name"
              value={name}
              onNameChange={setName}
            />
          </div>

          <div className={styles.form__sowing}>
            <h3>Sowing:</h3>

            <DateButton month={firstMonth} onMonthChange={setFirstMonth} />
            <span className={styles.form__sowing_line}></span>
            <DateButton month={lastMonth} onMonthChange={setLastMonth} />
          </div>

          <div className={styles.form__place}>
            <h3>Place:</h3>

            <PlaceButton place={place} onPlaceChange={setPlace} />
          </div>

          <div className={styles.form__perennial}>
            <h3>Perennial:</h3>

            <ToggleSwitch checked={active} onChange={setActive} />
          </div>

          <div className={styles.form__inputNote}>
            <PageTextarea
              variant="newPlantNote"
              placeholder="Note..."
              value={note}
              onChange={setNote}
            />
          </div>

          <div className={styles.form__submitButton}>
            <MainButton children="plant" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default NewPlantPage;
