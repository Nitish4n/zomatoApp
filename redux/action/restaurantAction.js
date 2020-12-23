import {STORE_NEARBY} from '../reduxConstant';

export const setNearByStore = (data) => {
    return {
        type: STORE_NEARBY,
        payload: data
    }
}