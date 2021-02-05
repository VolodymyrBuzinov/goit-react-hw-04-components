import React, {Suspense, lazy} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Buttons from './Buttons/Buttons'

const Home = lazy(() =>
import('./home/Home' /* webpackChunkName: "home-page" */),
 );
const  MoviesPage = lazy(() =>
import(
'./MoviesPage/MoviesPage' /* webpackChunkName: "search-movie-page" */
  ),
 );
const MoviesDetailsPage = lazy(() =>
import(
'./MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
 );

export default function App() {
  return (
    <Router>
      <div>        
        <Buttons/>
        <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies/:movieId" component={MoviesDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
            <Redirect to="/"/>
          </Switch>
          </Suspense>
      </div>
    </Router>
  );
};

