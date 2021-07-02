import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './TaskPage.module.css';
import useTaskDetails from '../../hooks/useTaskDetails';

import PageInput from '../../components/PageInput/PageInput';
import SideNav from '../../components/SideNav/SideNav';
import MainButton from '../../components/MainButton/MainButton';
import PageTextarea from '../../components/PageTextarea/PageTextarea';

function TaskPage(): JSX.Element {
  const { title } = useParams<{ title: string }>();
  const { task, isLoading, errorMessage } = useTaskDetails(title);

  if (errorMessage) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SideNav showSideNavLabel={task.plantSelect} />
      </header>

      <main className={styles.main}>
        <article className={styles.article}>
          <PageInput
            variant="newTaskTitle"
            placeholder="Title..."
            value={title}
            disabled
            onChange={console.log}
          />
          <PageTextarea
            variant="newTaskDescription"
            placeholder="Description..."
            value={task.description}
            disabled
            onChange={console.log}
          />
          <PageInput
            variant="newTaskDate"
            placeholder=""
            value={task.date}
            type="date"
            disabled
            onChange={console.log}
          />
          <div className={styles.article__button}>
            <MainButton children="edit" />
          </div>
        </article>
      </main>
    </div>
  );
}

export default TaskPage;
