import obj from '../apis/Url';
import axios from 'axios';

export default function FetchDetails (id) {    
    return axios.get(`${obj.dftUrl}/movie/${id}?api_key=${obj.key}`)
}