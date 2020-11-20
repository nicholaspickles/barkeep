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
    itemsInCart: ItemDetails[] | "No items in cart"
}

//INITIAL STATE
const initialState = {
    numInCart:0,
    itemsInCart: []
}

//ACTION CREATORS
export function updateCartNum(by) {
    return {
        type: UPDATE_CART_NUMBER,
        payload: by
    }
}

export function addCartItems(additionalItem: ItemDetails) {
    return {
        type: UPDATE_CART_ITEMS_ADD,
        payload: additionalItem
    }
}

export function removeCartItems(removedItem: ItemDetails) {
    return {
        type: UPDATE_CART_ITEMS_ADD,
        payload: removedItem
    }
}

//REDUCER
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_CART_NUMBER :
            return {
                ...state,
                numInCart: state.itemsInCart.length
            }
        case UPDATE_CART_ITEMS_ADD :
            return {
                itemsInCart: [...state.itemsInCart, action.payload]
            }
        case UPDATE_CART_ITEMS_REMOVE :
            return {
                itemsInCart: state.itemsInCart.filter(
                    item => item.removedItem !== action.payload
                )
            }
        default:
            return state;
    }
}