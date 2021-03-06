import { Component } from 'react';
import FetchCasts from '../apis/FetchCasts';
import style from './Cast.module.css';
export default class Cast extends Component {
    state = {
        cast: [],
    }
    componentDidMount() {
        const splittedUrl = this.props.match.url.split('/', 3);        
        FetchCasts(splittedUrl[2]).then(res => {
            this.setState({ cast: res.data.cast });
     })
    }
    render() {
        const casts = [
            ...this.state.cast.slice(0, 9)           
        ]        
        
        return (
            <>
            <ul className={style.list}>
                {casts.map(item => {
                    const { profile_path, id, name } = item;
                    return (<li key={id}>
                        <img src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt="profile" />
                        <p>{name}</p>
                             </li> 
                    )
                })}                
                </ul>
                <span className={style.text}>And Others...</span>
                </>
        )
    }
}