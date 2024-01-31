import TYPES from "./types.jsx";

const INITIAL_STATE = {
    loading: false,
    error: null,
    data: null
}

const photo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.FETCH_PHOTO_STARTED:
            return {...state, loading: true, data: null, error: null};
        case TYPES.FETCH_PHOTO_SUCCESS:
            return {...state, loading: false, data: action.payload, error: null};
        case TYPES.FETCH_PHOTO_ERROR:
            return {...state, loading: false, data: null, error: action.payload};
        default:
            return state
    }
}

export default photo;