const INITIAL_STATE = {
    cart: []
}

const CartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "add-item":
            return {
                ...state, 
                cart: action.payload
            }
        default:
            return state
    }
}


export default CartReducer;