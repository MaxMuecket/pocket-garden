import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './SideNav.module.css';

export type SideNavProps = {
  children: string;
  garden?: string;
  newPlant?: string;
  plantList?: string;
  newTask?: string;
  gardening?: string;
};

function SideNav({
  children,
  garden,
  newPlant,
  plantList,
  newTask,
  gardening,
}: SideNavProps): JSX.Element {
  const [active, setActive] = useState(false);

  const showSideNav = () => setActive(!active);
  return (
    <>
      <div className={styles.sideNav}>
        <button className={styles.sideNav__button} onClick={showSideNav}>
          {children}
        </button>
      </div>
      <nav
        className={
          active ? `${styles.sideNav__menu_active}` : `${styles.sideNav__menu}`
        }
      >
        <div className={styles.sideNav__menu_items}>
          <button
            className={styles.sideNav__button_active}
            onClick={showSideNav}
          >
            {children}
          </button>
          <Link to="/garden">{garden}</Link>
          <Link to="/new-plant">{newPlant}</Link>
          <Link to="/plant-list">{plantList}</Link>
          <Link to="/new-task">{newTask}</Link>
          <Link to="/gardening">{gardening}</Link>
        </div>
      </nav>
    </>
  );
}

export default SideNav;
