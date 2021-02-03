import { Component } from 'react';
import axios from 'axios';
import style from './MovieDetailsPage.module.css';
import Cast from '../Cast/Cast';
import Reviews from '../Rewievs/Reviews';
import {  
    Route,
  Link
} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default class MoviesDetailsPage extends Component {   
    
    state = {        
        film: {},
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=f2d49e4485f966274f529596950676bb`).then(res => {
            this.setState({ film: res.data });
        })
    }

    render() {    
        
        const { budget, genres, title, vote_average, vote_count, production_countries, production_companies, poster_path, overview } = this.state.film;       
        return (
            <div className={style.container}>
                <h1>{title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="poster" />
                <h2>Overview: {overview}</h2>
                <p>Budget: {budget}</p>
                <p>Votes: {vote_count}</p>
                <p>Vote average: {vote_average}</p>
                <div className={style.containerInner}>
                <ul> Genres:
                    {genres !== undefined && genres.map(item => {
                        const { id, name } = item;
                        return (
                            <li key={id}>
                                {name}
                            </li>
                        )
                    })}
                   
                </ul>
                <ul> Production countries:
                    {production_countries !== undefined && production_countries.map(item => {                        
                        const { name } = item;
                        return (
                            <li key={uuidv4()}>
                                {name}
                            </li>
                        )
                    })}
                   
                </ul>
                <ul className={style.companiesList}> Production companies:
                    {production_companies !== undefined && production_companies.map(item => {                        
                        const { name } = item;
                        return (
                            <li key={uuidv4()}>
                                {name}
                            </li>
                        )
                    })}
                   
                    </ul>
                    </div>
                <div className={style.innerButtons}>
                    <Link to={`${this.props.match.url}/credits`}>Cast
                </Link>
                <Link to={`${this.props.match.url}/reviews`}>Reviews
                </Link></div>
                <Route exact path={`${this.props.match.url}/credits`} component={Cast} />
                <Route exact path={`${this.props.match.url}/reviews`} component={Reviews} />
                
            </div>
    )
   }
}