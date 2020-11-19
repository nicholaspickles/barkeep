//ACTIONS
const UPDATE_CART = 'barkeep/cart/UPDATE_CART';

export interface CartState {
    inCart: number
}

//INITIAL STATE
const initialState = {
    inCart:0
}

//ACTION CREATORS
export function updateCart(by) {
    return {
        type: UPDATE_CART,
        payload: by
    }
}
//REDUCER
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_CART :
            return {
                ...state,
                inCart: state.inCart + action.payload
            }
        default:
            return state;
    }
}