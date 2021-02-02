import { Component } from 'react';
import axios from 'axios';
export default class Cast extends Component {
    state = {
        cast: [],
    }
    componentDidMount() {
        const splittedUrl = this.props.match.url.split('/', 3);        
        axios.get(`https://api.themoviedb.org/3/movie/${splittedUrl[2]}/credits?api_key=f2d49e4485f966274f529596950676bb`).then(res => {
            this.setState({ cast: res.data.cast });
     })
    }
    render() {
        const casts = [
            ...this.state.cast.slice(0, 9)           
        ]        
        
        return (
            <ul>
                {casts.map(item => {
                    const { profile_path, id, name } = item;
                    return (<li key={id}>
                        <img src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt="profile" />
                        <p>{name}</p>
                             </li> 
                    )
                })}
                <span>And Others...</span>
            </ul>
        )
    }
}