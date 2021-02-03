import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import Home from './home/Home';
import MoviesPage from './MoviesPage/MoviesPage';
import MoviesDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Buttons from './Buttons/Buttons'

export default function App() {
  return (
    <Router>
      <div>        
        <Buttons/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/movies/:movieId" component={MoviesDetailsPage}></Route>
          <Route path="/movies" component={MoviesPage}></Route>
        </Switch>
      </div>
    </Router>
  );
};

