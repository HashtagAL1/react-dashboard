import axios from 'axios';

export const getModules = () => {
    return axios.get('http://localhost:5555/modules/getAll');
};

export const getModuleIcon = (value) => {
    if (value >= 0 && value <= 40) {
        return `/green-bin.png`;
    } else if (value > 40 && value <= 65) {
        return `/yellow-bin.png`;
    } else if (value > 65 && value <= 85) {
        return `/orange-bin.png`;
    } else {
        return `/orange-bin.png`;
    }
}

export const getDashboardInfo = () => {
    return axios.get('http://localhost:5555/other/dashboardData');
}

export const getGreenModuleIcon = () => {
    return `/green-bin.png`;
}

export const getTruckIcon = () => {
    return `/truck.png`;
}