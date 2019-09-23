import {createStore, applyMiddleware, combineReducers} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import parkingPlaces from '../reducers/parkingPlaces';

const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL:'https://yakinotopark.com/admin/index.php/service',
    responseType: 'json'
});

const rootReducer = combineReducers({
    parkingPlaces
});


const store = createStore(
    rootReducer, //custom reducers
    applyMiddleware(

            axiosMiddleware(client), //second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix

    )
);

export default store;
