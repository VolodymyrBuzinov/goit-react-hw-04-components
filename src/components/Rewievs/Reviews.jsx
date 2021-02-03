import { Component } from 'react';
import axios from 'axios';
import style from './Rewievs.module.css';
export default class Reviews extends Component {
    state = {
        reviews: [],
    }
    componentDidMount() {
        const splittedUrl = this.props.match.url.split('/', 3);        
        axios.get(`https://api.themoviedb.org/3/movie/${splittedUrl[2]}/reviews?api_key=f2d49e4485f966274f529596950676bb`).then(res => {
            
            if (res.data.results.length > 0) {
                this.setState({ reviews: res.data.results });                  
            }
            
            
     })
    }
    render() {          
        return (
            <ul className={style.list}>
                {this.state.reviews.map(item => {                    
                    const { author, id, content } = item;
                    return (<li key={id}>
                        <h2>Author: {author}</h2>
                        <p>{content}</p>                        
                             </li> 
                    )
                })}
                {this.state.reviews.length === 0 ? <span>Nothing found</span> : <span>And Others...</span>}                
            </ul>
        )
    }
}