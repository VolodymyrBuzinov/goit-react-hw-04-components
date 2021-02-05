import obj from '../apis/Url';
import axios from 'axios';

export default function FetchByQuery (name) {    
    return axios.get(`${obj.dftUrl}/search/movie?api_key=${obj.key}&query=${name}`)
}