import React, { useState, useContext } from 'react'
import { CartContext } from '../CartContext'

export default function QuantityBtn({ itemInfo }) {


    const { cartItems, setCartItems } = useContext(CartContext)

    // if item in the cart
    let productIndexIncart = cartItems.findIndex((element) => {
        return element.id === itemInfo.id
    })

    //findIndex
    // if found that ittem in cart. => return index : 0, 1, 2...
    // item never added in cart => return -1
    const [numInCart, setNumInCart] = useState(
        (productIndexIncart === -1) ? 0 : cartItems[productIndexIncart].quantity
    )

    const handleAdd = () => {
        if (productIndexIncart === -1) {
            // if not this item, add object
            setCartItems(
                [{
                    id: itemInfo.id,
                    name: itemInfo.name,
                    price: itemInfo.price,
                    image: itemInfo.image,
                    description: itemInfo.description,
                    quantity: 1
                },
                ...cartItems]
            )
        } else {
            // if item already here, add num
            let newCartArray = [...cartItems]
            newCartArray[productIndexIncart].quantity++
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart + 1)
    }

    const handleSubtract = () => {
        if (productIndexIncart === 1) {
            // only one item, remove object
            let newCartArray = [...cartItems]
            newCartArray.splice(productIndexIncart, 1)
            setCartItems(newCartArray)
        } else {
            // if item already here, subtract num
            let newCartArray = [...cartItems]
            newCartArray[productIndexIncart].quantity--
            setCartItems(newCartArray)
        }
        setNumInCart(numInCart - 1)
    }

    return (
        <div className="addToCart">
            {(numInCart === 0) ?
                <div className="addToCartBtn" onClick={handleAdd}>Add to cart</div> :
                <div>
                    <span className="subtractBtn" onClick={handleSubtract}>-</span>
                    {numInCart}
                    <span className="addBtn" onClick={handleAdd}>+</span>
                </div>
            }
        </div>
    )
}
