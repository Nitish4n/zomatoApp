import {STORE_NEARBY} from '../reduxConstant';
const initialState = {
    nearBy: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case STORE_NEARBY:
            return { ...state, nearBY: payload }

        default:
            return state
    }
}
