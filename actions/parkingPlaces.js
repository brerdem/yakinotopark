
export const getAllParkingPlaces = ()  => {
    return {
        types: ['GET_ALL_PLACES_LOAD', 'GET_ALL_PLACES_DONE', 'GET_ALL_PLACES_ERROR'],
        payload: {
            request: {
                url: '/get_maps?clear=&lang=en&category='
            }
        }
    }

};
