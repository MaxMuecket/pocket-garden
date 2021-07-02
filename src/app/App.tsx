import React from 'react';
import { BrowserRouter, Route, RouteProps, Switch } from 'react-router-dom';
import styles from './App.module.css';

import LandingPage from './pages/LandingPage/LandingPage';
import GardenPage from './pages/GardenPage/GardenPage';
import NewPlantPage from './pages/NewPlantPage/NewPlantPage';
import PlantListPage from './pages/PlantListPage/PlantListPage';
import NewTaskPage from './pages/NewTaskPage/NewTaskPage';
import PlantPage from './pages/PlantPage/PlantPage';
import TaskPage from './pages/TaskPage/TaskPage';

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
  { path: '/new-task', Component: NewTaskPage },
  { path: '/tasks/:title', Component: TaskPage },
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
