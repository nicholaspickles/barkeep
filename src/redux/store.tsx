import { createStore, Reducer, combineReducers } from 'redux';
import cart from './ducks/cart';

export interface ApplicationState {
    cart: any;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    cart: cart
});

export default function configureStore(initialState: ApplicationState) {
    return createStore(reducers, initialState);
}