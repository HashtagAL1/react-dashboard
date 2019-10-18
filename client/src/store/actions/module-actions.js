import { getModules, getDashboardInfo } from '../../services/modules-service';

export const fetchModules = () => {
    return (dispatch, getState) => {
        //ASYNC code here
        getModules().then((res) => {
            dispatch({ type: 'GET_MODULES_SUCCESS', payload: res.data.modules });
        })
        .catch((e) => {
            dispatch({ type: 'GET_MODULES_ERROR', payload: e });
        });        
    }
};

export const filterModules = (criteria) => {
    return (dispatch, getState) => {
        let modules = getState().modules.modules;
        if (criteria === 'lowest') {
            modules = modules.filter(m => m.volume >= 0 && m.volume <= 40);
        } else if (criteria === 'low') {
            modules = modules.filter(m => m.volume > 40 && m.volume <= 65);
        } else if (criteria === 'avg') {
            modules = modules.filter(m => m.volume > 65 && m.volume <= 85);
        } else if (criteria === 'high') {
            modules = modules.filter(m => m.volume > 85 && m.volume <= 100);
        }
        dispatch({ type: `FILTER_MODULES`, payload: modules })
    }
};

export const fetchDashboardInfo = () => {
    console.log('in action');
    return (dispatch, getState) => {
        getDashboardInfo().then((res) => {
            console.log(res);
            dispatch({ type: 'GET_DASHBOARD_DATA_SUCCESS', payload: res.data.result });
        });
    };
};