
import {take} from 'ramda';


const parkingPlaces = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_PLACES_DONE':
            return take(20, action.payload.data);

        default:
            return state;
    }
};

export default parkingPlaces;
