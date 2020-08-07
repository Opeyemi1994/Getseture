import React from 'react';
import './CheckoutItem.scss'
import { connect } from 'react-redux';
import { removeItem, addItem, reduceItem } from '../../Redux/Cart/cart.actions';
const CheckoutItem = ({cartItem,removeItem,reduceItem,addItem }) => {
  const {name,price, quantity,imageUrl} = cartItem
  return (
    <div className="checkout-item">
        <div className="image-container">
        <img src={imageUrl} alt="item"/>
        </div>
 
  <span className='name'>{name}</span>
  <span className="quantity">
    <div className="arrow" onClick={()=> reduceItem(cartItem)}>&#10094;</div>
    <span className="value">{quantity}</span>
    <div className="arrow" onClick={() => addItem(cartItem)}> &#10095;</div>
    </span>
  <span className="price">{price}</span>
        <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  reduceItem:item => dispatch(reduceItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)
