import React, { useState } from 'react';

import styles from './NewTaskPage.module.css';
import { Task } from '../../../types';
import { postTask } from '../../../utils/api';

import PageInput from '../../components/PageInput/PageInput';
import SideNav from '../../components/SideNav/SideNav';
import MainButton from '../../components/MainButton/MainButton';
import PageTextarea from '../../components/PageTextarea/PageTextarea';

function NewTaskPage(): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTitle('');
    setDescription('');
    setDate('');

    const task: Task = {
      title,
      description,
      date,
    };

    await postTask(task);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SideNav showSideNavLabel="NewTask" />
      </header>

      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <PageInput
            variant="newTaskTitle"
            placeholder="Title..."
            value={title}
            onNameChange={setTitle}
          />
          <PageTextarea
            variant="newTaskDescription"
            placeholder="Description..."
            value={description}
            onChange={setDescription}
          />
          <PageInput
            variant="newTaskDate"
            placeholder="dd/mm/jjjj"
            value={date}
            onNameChange={setDate}
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
