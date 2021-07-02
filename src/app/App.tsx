import React from 'react';
import { BrowserRouter, Route, RouteProps, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import GardenPage from './pages/GardenPage/GardenPage';

import styles from './App.module.css';
import NewPlantPage from './pages/NewPlantPage/NewPlantPage';
import PlantListPage from './pages/PlantListPage/PlantListPage';
import PlantPage from './pages/PlantPage/PlantPage';

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: '/', Component: LandingPage, exact: true },
  { path: '/garden', Component: GardenPage },
  { path: '/new-plant', Component: NewPlantPage },
  { path: '/plant-list', Component: PlantListPage },
  { path: '/plants/:name', Component: PlantPage },
];

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ Component, ...routeProps }) => (
            <Route key={routeProps.path} {...routeProps}>
              <Component />
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
