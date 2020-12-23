import {SET_GEOLOCATION} from '../reduxConstant';

const initialState = {
    accuracy: '',
    altitude: '',
    course: '',
    latitude: '',
    longitude: '',
    speed: '',
    time: '',
    verticalAccuracy: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_GEOLOCATION:
        return { ...state, ...payload }

    default:
        return state
    }
}
