import React from 'react';
import DeleteIcon from '../Icons/DeleteIcon';
import styles from './PlantCard.module.css';

export type PlantCardProps = {
  imgSrc: string;
  imgName: string;
  name: string;
};

function PlantCard({ imgSrc, imgName, name }: PlantCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.cardImage}>
        <img src={imgSrc} alt={imgName} className={styles.cardImage__img} />
      </div>
      <div className={styles.cardInfo}>
        <h3 className={styles.cardInfo__title}>{name}</h3>
        <button className={styles.cardInfo__button}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default PlantCard;
