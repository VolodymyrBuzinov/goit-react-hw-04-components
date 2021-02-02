import { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import axios from 'axios';
import style from './MoviesPage.module.css';

import {
  Link
} from "react-router-dom";
export default class MoviesPage extends Component {
    state = {
        films: [],        
        name: null,
        status: 'idle',
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.name !== this.state.name) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f2d49e4485f966274f529596950676bb&query=${this.state.name}`).then(res => {
                this.setState({ films: res.data.results, status: 'ok' });
          })
        }        
    }
    formSubmitHendler = name => {
        this.setState({ name });  
    }
    render() {
        const { films, status } = this.state;
        return (
            <>
                <SearchForm onSubmit={this.formSubmitHendler} />
                {status === 'ok' && 
                <ul className={style.list}>
                    {films.map(newFilm => {
                        const { id, popularity, title, poster_path} = newFilm;
                        return (
                            <li className={style.listItem} key={id}>
                                <Link to={`/movies/${id}`}>                                
                                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="poster" />
                                <h2>{title}</h2>
                                    <p>Rating: {popularity}</p>
                                </Link>
                            </li>
                        )
                 })}
                </ul>
                }     
            
            </>
        )
    }
}