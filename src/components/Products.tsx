import React from 'react';
import { Card } from 'antd';

import {ApplicationState} from '../redux/store';
import {addCartItems, ItemDetails, removeCartItems} from '../redux/ducks/cart';
import {useDispatch, useSelector} from 'react-redux';

import {DrinkData} from '../shared/products';

function createEntry(item: ItemDetails): {id:number; quantity:number; image:string; name:string} {
    let newEntry = {id:1, quantity:1, name:'default name', image:'here it is'};
    if (item.id) {
        newEntry.id = item.id;
    }
    if (item.quantity) {
        newEntry.quantity = item.quantity;
    }
    if (item.image) {
        newEntry.image = item.image;
    }
    if (item.name){
        newEntry.name = item.name;
    }
    return newEntry;
}

const DRINKS = DrinkData;
const renderItem = ({item}) => {
    if (item != null) {
        return (
            <div>
                <Card hoverable style={{width:250}} cover ={<img src={item.back} />}>
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <hr />
                        <p>{item.description}</p>
                    </div>
                </Card>
            </div>
        )
    }
}

const Product = () => {
    const dispatch = useDispatch();
    const items = useSelector((state:ApplicationState) => state.cart.itemsInCart);
    // const neww = createEntry({id:1, quantity:5, image:'herherh', name:'yo momma'});

    // const handleClick = () => {
    //     dispatch(addCartItems(neww));
    //     console.log("one put in")
    //     console.log(items.length);
    //     console.log(items)
    // }
    const handleClick = () => {
        console.log(DrinkData)
    }
    return (
        <div>
            <h1>PRODUCT PAGE</h1>
            <button onClick={handleClick}>bleh</button>
            <div>
                {DRINKS.map(drink => <div>
                    <img src={drink.image_1} />
                </div>)}
            </div>
        </div>
    )
}

export default Product;