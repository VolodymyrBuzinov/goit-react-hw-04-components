import { Component } from 'react';
import style from './Home.module.css';
import {
  Link
} from "react-router-dom";
import FetchAll from '../apis/FetchAll';

export default class Home extends Component {
    state = {
        films: []
    }

    componentDidMount() {
        FetchAll().then(res => {
            this.setState({ films: res.data.results });
       })
    }
    render() {
        
        return (
            <>                
                <h1 className={style.title}>Most popular films per day</h1>
                <ul className={style.list}>                    
                    {this.state.films.map(popularFilm => {
                        
                        const { id, popularity, title, poster_path } = popularFilm;
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
            </>
    )
    }
}