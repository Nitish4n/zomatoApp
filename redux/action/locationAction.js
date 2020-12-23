import {SET_GEOLOCATION} from '../reduxConstant';


export function setCurrentGeoLocation(geolocation) {
    return {
        type: SET_GEOLOCATION,
        payload: geolocation
    }
}
