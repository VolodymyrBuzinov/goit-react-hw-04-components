import obj from '../apis/Url';
import axios from 'axios';

export default function FetchReviews (id) {    
    return axios.get(`${obj.dftUrl}/movie/${id}/reviews?api_key=${obj.key}`)
}