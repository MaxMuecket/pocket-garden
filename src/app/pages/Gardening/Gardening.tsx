import React from 'react';
import styles from './Gardening.module.css';

import { Link } from 'react-router-dom';
import useTasks from '../../hooks/useTasks';

import SideNav from '../../components/SideNav/SideNav';
import TaskCard from '../../components/TaskCard/TaskCard';

function Gardening(): JSX.Element {
  const { tasks, isLoading, errorMessage } = useTasks();

  if (errorMessage) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!tasks) {
    return <div>Tasks not found</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SideNav showSideNavLabel="Gardening" />
      </header>
      <main className={styles.main}>
        {tasks.map((task) => (
          <Link to={`/tasks/${task.title}`} className={styles.main__detailLink}>
            <TaskCard
              key={task.title}
              plantSelect={task.plantSelect}
              title={task.title}
            />
          </Link>
        ))}
      </main>
    </div>
  );
}

export default Gardening;
