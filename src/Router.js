import React, { lazy, Suspense } from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import history from './config/history';
import ErrorBoundary from './ErrorBoundary';
import { PUBLIC_ROUTE } from './route.constants';

import IntervieweeById from './containers/Interviewees/IntervieweeById';
import IntervieweeById2 from './containers/Interviewees/IntervieweeById2';

//NO WORKING WITH ROUTE WITH PARAMS
const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: lazy(() => import('./containers/Interviewees/IntervieweesList')),
  },
  {
    path: PUBLIC_ROUTE.DASHBOARD,
    exact: true,
    component: lazy(() => import('./containers/Dashboard/Dashboard')),
  },
  {
    path: PUBLIC_ROUTE.PAGE_404,
    component: lazy(() => import('@iso/containers/Pages/404/404')),
  },
];



export default function Routes() {
  return (
    <ErrorBoundary>
        <Router history={history}>
          <Switch>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}

            <Route
              path={PUBLIC_ROUTE.INTERVIEWEES}
              exact={true}
              component={IntervieweesList}
            />
            <Route
              path={PUBLIC_ROUTE.INTERVIEWEES_ID}
              exact={true}
              // Attention changement component pour nouvelle vue interviewee/question/answer
              // remettre IntervieweeById pour l'ancien
              component={IntervieweeById}
            />

            
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Router>
    </ErrorBoundary>
  );
}
// ANSWERTOQUESTION: '/answer/interviewee/:id/question/:id',
