import obj from '../apis/Url';
import axios from 'axios';

export default function FetchAll () {
    return axios.get(`${obj.dftUrl}/trending/movie/day?api_key=${obj.key}`);
}