import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './PageLink.module.css';

type PageLinkProps = {
  children: ReactNode;
  pathname: string;
  variant: 'newPlant' | 'plantList' | 'newTask' | 'gardening';
};

function PageLink({ children, pathname, variant }: PageLinkProps): JSX.Element {
  return (
    <Link to={pathname} className={styles[variant]}>
      {children}
    </Link>
  );
}

export default PageLink;
