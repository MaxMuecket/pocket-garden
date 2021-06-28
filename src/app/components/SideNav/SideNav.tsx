import React, { useState } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

import styles from './SideNav.module.css';

export type SideNavProps = {
  showSideNavLabel: string;
};

type CustomLinkProps = LinkProps & {
  pageName: string;
};

const links: CustomLinkProps[] = [
  { to: '/garden', pageName: 'Garden' },
  { to: '/new-plant', pageName: 'NewPlant' },
  { to: '/plant-list', pageName: 'PlantList' },
  { to: '/new-task', pageName: 'NewTask' },
  { to: '/gardening', pageName: 'Gardening' },
];

function SideNav({ showSideNavLabel }: SideNavProps): JSX.Element {
  const [active, setActive] = useState(false);

  const showSideNav = () => setActive(!active);

  const location = useLocation();

  const filteredLinks = links.filter((link) => link.to !== location.pathname);
  return (
    <>
      <div>
        <button className={styles.sideNav__button} onClick={showSideNav}>
          {showSideNavLabel}
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
            {showSideNavLabel}
          </button>
          {filteredLinks.map(({ ...linkProps }) => (
            <Link key={linkProps.pageName} {...linkProps}>
              {linkProps.pageName}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default SideNav;
