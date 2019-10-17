import axios from 'axios';

export const getTruckPath = () => {
    return axios.get('http://localhost:5555/trucks/getMeasurements');
}