//ACTIONS
const UPDATE_CART_ITEMS_ADD = 'barkeep/cart/UPDATE_CART_ITEMS_ADD';
const UPDATE_CART_ITEMS_REMOVE = 'barkeep/cart/UPDATE_CART_ITEMS_REMOVE';
const MAKE_CART_CONCISE = 'barkeep/cart/MAKE_CART_CONCISE';
export interface ItemDetails {
    id: any,
    name: string,
    quantity?: any,
    image : string,
}
export interface CartState {
    itemsInCart: ItemDetails[] | "No items in cart"
}

//INITIAL STATE
const initialState = {
    itemsInCart: []
}

//ACTION CREATORS
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

export function makeCartConcise(adjustedArray) {
    return {
        type: MAKE_CART_CONCISE,
        payload: adjustedArray
    }
}

//REDUCER
export default function reducer(state = initialState, action) {
    switch(action.type) {
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
        case MAKE_CART_CONCISE:
            return {
                itemsInCart: [...action.payload]
            }
        default:
            return state;
    }
}