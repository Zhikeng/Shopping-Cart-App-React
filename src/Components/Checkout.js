import React, { useContext } from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
import QuantityBtn from './QuantityBtn';
import { CartContext } from '../CartContext';
import { Alert } from 'react-bootstrap';

export default function Checkout() {

  const { cartItems } = useContext(CartContext)

  const cartEmpty = cartItems.length <= 0 ? true : false;

  const grandTotal = cartItems.reduce((total, product) => {
    return total += product.price * product.quantity
  }, 0);

  const freeShippingPrice = 99;

  return (
    <div>
      <Title mainTitle={'Your shopping cart'} />

      {
        cartEmpty &&
        <div>
          <Alert className="nothingInCart" variant='warning'>No items in the shopping cart</Alert><br />
          <Link to="/">Go to the item list</Link>
        </div>
      }


      {
        !cartEmpty &&
        <div className="container">
          <div className="cartSection">
            <table className='checkoutTable'>
              <tbody>
                {cartItems.map(product => (
                  <div key={product.id}>
                    <img src={process.env.PUBLIC_URL + '/img/' + product.image} alt="fail to open img" /><br />
                    Name: {product.name}<br />
                    Description: {product.description}<br />
                    Price: ${product.price}<br />
                    Purchase Volume: {product.quantity}<br />
                    Quantity: <QuantityBtn itemInfo={product} />
                  </div>
                ))
                }
              </tbody>
            </table>
          </div>

          <div className="checkOutSection"></div>
          <div>The total value of the items is </div>
          <div>${grandTotal}</div>
          {
            grandTotal >= freeShippingPrice ?
              <div>We provide free shipping</div> :
              <div>We provide free shipping from ${freeShippingPrice}. We still need ${freeShippingPrice - grandTotal}.</div>
          }

            <form onSubmit={() => alert('Thank you! See y\'a soon!')}>
            <button className='checkOutBtn'>Checkout</button>
           </form>

        </div>
      }
    </div>
  )
}
