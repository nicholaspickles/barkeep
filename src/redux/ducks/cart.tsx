//ACTIONS
const UPDATE_CART_NUMBER = 'barkeep/cart/UPDATE_CART_NUMBER';
const UPDATE_CART_ITEMS_ADD = 'barkeep/cart/UPDATE_CART_ITEMS_ADD';
const UPDATE_CART_ITEMS_REMOVE = 'barkeep/cart/UPDATE_CART_ITEMS_REMOVE';

export interface ItemDetails {
    id: number,
    quantity: number,
    image : string,
}
export interface CartState {
    numInCart: number,
    itemsInCart: Array <ItemDetails>
}

//INITIAL STATE
const initialState = {
    numInCart:0,
    itemsInCart: "No items in cart."
}

//ACTION CREATORS
export function updateCartNum(by) {
    return {
        type: UPDATE_CART_NUMBER,
        payload: by
    }
}

export function addCartItems(additionalItem) {
    return {
        type: UPDATE_CART_ITEMS_ADD,
        payload: additionalItem
    }
}

//REDUCER
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_CART_NUMBER :
            return {
                ...state,
                numInCart: state.numInCart + action.payload
            }
        default:
            return state;
    }
}