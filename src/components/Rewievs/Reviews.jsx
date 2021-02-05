import { Component } from 'react';
import axios from 'axios';
import style from './Rewievs.module.css';
import FetchReviews from '../apis/FetchReviews'
export default class Reviews extends Component {
    state = {
        reviews: [],
    }
    componentDidMount() {
        const splittedUrl = this.props.match.url.split('/', 3);        
       FetchReviews(splittedUrl[2]).then(res => {
            
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