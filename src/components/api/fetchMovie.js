import axios from "axios";
import URL from '../../constvalues/api';

export const fetchMovie = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            s: query,
            pages: 1,
        }
    });

    return data;
}