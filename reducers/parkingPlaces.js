
const parkingPlaces = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_PLACES_DONE':
            return action.payload.data;

        default:
            return state;
    }
};

export default parkingPlaces;
