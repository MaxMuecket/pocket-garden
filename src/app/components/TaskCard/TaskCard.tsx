import React from 'react';
import DeleteIcon from '../Icons/DeleteIcon';
import styles from './TaskCard.module.css';

export type TaskCardProps = {
  plantSelect: string;
  title: string;
};

function PlantCard({ plantSelect, title }: TaskCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.cardPlantName}>
        <h3>{plantSelect}</h3>
      </div>
      <div className={styles.cardInfo}>
        <h3 className={styles.cardInfo__title}>{title}</h3>
        <button className={styles.cardInfo__button}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default PlantCard;
