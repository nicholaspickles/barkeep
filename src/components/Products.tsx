import React from 'react';

import {ApplicationState} from '../redux/store';
import {addCartItems, ItemDetails, removeCartItems} from '../redux/ducks/cart';
import {useDispatch, useSelector} from 'react-redux';

function createEntry(item: ItemDetails): {id:number; quantity:number; image:string} {
    let newEntry = {id:1, quantity:1, image:'here it is'};
    if (item.id) {
        newEntry.id = item.id;
    }
    if (item.quantity) {
        newEntry.quantity = item.quantity;
    }
    if (item.image) {
        newEntry.image = item.image;
    }
    return newEntry;
}

const Product = () => {
    const dispatch = useDispatch();
    const items = useSelector((state:ApplicationState) => state.cart.itemsInCart);
    const neww = createEntry({id:1, quantity:5, image:'herherh'});

    const handleClick = () => {
        dispatch(addCartItems(neww));
        console.log("one put in")
        console.log(items.length);
        console.log(items)
    }
    return (
        <div>
            <h1>PRODUCT PAGE</h1>
            <button onClick={handleClick}>bleh</button>
        </div>
    )
}

export default Product;