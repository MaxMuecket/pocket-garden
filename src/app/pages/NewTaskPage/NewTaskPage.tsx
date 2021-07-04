import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './NewTaskPage.module.css';
import { Task } from '../../../types';
import { postTask } from '../../../utils/api';
import usePlants from '../../hooks/usePlants';

import PageInput from '../../components/PageInput/PageInput';
import SideNav from '../../components/SideNav/SideNav';
import MainButton from '../../components/MainButton/MainButton';
import PageTextarea from '../../components/PageTextarea/PageTextarea';

function NewTaskPage(): JSX.Element {
  const history = useHistory();
  const { plants, isLoading, errorMessage } = usePlants();
  const [plantSelect, setPlantSelect] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  if (errorMessage) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!plants) {
    return <div>Plants not found</div>;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const task: Task = {
      plantSelect,
      title,
      description,
      date,
    };

    setPlantSelect('');
    setTitle('');
    setDescription('');
    setDate('');

    await postTask(task);
    history.push('/gardening');
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SideNav showSideNavLabel="NewTask" />
      </header>

      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <select
            className={styles.form__select}
            value={plantSelect}
            onChange={(event) => setPlantSelect(event.target.value)}
          >
            <option>-- Please select a plant --</option>
            {plants.map((plant) => (
              <option>{plant.name}</option>
            ))}
          </select>

          <PageInput
            variant="newTaskTitle"
            placeholder="Title..."
            value={title}
            onChange={setTitle}
          />
          <PageTextarea
            variant="newTaskDescription"
            placeholder="Description..."
            value={description}
            onChange={setDescription}
          />
          <PageInput
            variant="newTaskDate"
            placeholder=""
            value={date}
            onChange={setDate}
            type="date"
          />
          <div className={styles.form__button}>
            <MainButton children="create" />
          </div>
        </form>
      </main>
    </div>
  );
}
export default NewTaskPage;
