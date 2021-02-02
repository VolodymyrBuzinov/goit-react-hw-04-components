import { Component } from 'react';
import axios from 'axios';
export default class Reviews extends Component {
    state = {
        reviews: [],
    }
    componentDidMount() {
        const splittedUrl = this.props.match.url.split('/', 3);        
        axios.get(`https://api.themoviedb.org/3/movie/${splittedUrl[2]}/reviews?api_key=f2d49e4485f966274f529596950676bb`).then(res => {
            this.setState({ rewievs: res.data.results });  
            
     })
    }
    render() {          
        return (
            <ul>
                {this.state.reviews.map(item => {
                    console.log(item);
                    // const { profile_path, id, name } = item;
                    // return (<li key={id}>
                    //     <img src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt="profile" />
                    //     <p>{name}</p>
                    //          </li> 
                    // )
                })}
                <span>And Others...</span>
            </ul>
        )
    }
}