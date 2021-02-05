import obj from '../apis/Url';
import axios from 'axios';

export default function FetchCasts (id) {    
    return axios.get(`${obj.dftUrl}/movie/${id}/credits?api_key=${obj.key}`)
}