import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom';
import DelImgUrl from '../assets/images/shop/del.png'
import Checkout from './Checkout';

const CartPage = () => {
   
    const [cartItem, setcartItem] = useState([]);

    useEffect(() =>{
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setcartItem(storedCartItems);
    }, [])
    
    const calculateTotalPrice = (item) => {
        return (
            item.price * item.quantity  
        )
    }
    const handleIncrease =(item) =>{
        item.quantity += 1;
        setcartItem([...cartItem]);

        localStorage.setItem("cart", JSON.stringify(cartItem));
    }
    
    const handleDecrease = (item) =>{
        if(item.quantity > 1){
            item.quantity -= 1;
            setcartItem([...cartItem]);

            localStorage.setItem("cart", JSON.stringify(cartItem));
        }
    }
    const handleRemoveItem = (item) =>{
        const updateCart = cartItem.filter((cartItem) => cartItem.id !== item.id);

        setcartItem(updateCart);

        updateLocalStorage(updateCart);
    }
    const updateLocalStorage =(cart) =>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    
    const cartSubtotal = cartItem.reduce((total, item) =>{
        return total + calculateTotalPrice(item);
    }, 0)
   
    const orderTotal = cartSubtotal

  return (
     <>
     <PageHeader title={"Shop Cart"} curPage={"Cart Page"}/>
     <div className='shop-cart padding-tb'>
        <div className='container'>
           <div className='section-wrapper'>
              <div className='cart-top'>
                  <table>
                     <thead>
                         <tr>
                             <th className='cat-product'>Product </th>
                             <th className='cat-price'> Price</th>
                             <th className='cat-quantity'> Quantity</th>
                             <th className='cat-toprice'> Total</th>
                             <th className='cat-edit'> Edit</th>
                         </tr>
                     </thead>
                       <tbody>
                           {
                             cartItem.map((item, indx) =>(
                                <tr key={indx}>
                                   <td className='product-item cat-product'>
                                      <div className='p-thumb'>
                                         <Link to="/shop"> <img src={item.img} alt="" /> </Link>
                                      </div>
                                       <div className='p-content'>
                                           <Link to="/shop">{item.name} </Link>
                                       </div>
                                   </td>
                                   <td className='cat-price'> ${item.price} </td>
                                     <td className='cat-quantity'>
                                        <div className='cart-plus-minus'>
                                            <div className='dec qtybutton' onClick={()=> handleDecrease(item)} > -</div>
                                            <input type="text" className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                            <div className='inc qtybutton' onClick={()=> handleIncrease(item)}> + </div>  
                                        </div>
                                     </td>
                                     <td className='cat-toprice'> ${calculateTotalPrice(item)}</td>
                                     <td className='cat-edit'>
                                        <a href="#" onClick={() => handleRemoveItem(item)}>
                                           <img src={DelImgUrl} alt="" /> 
                                        </a>
                                     </td>
                                </tr>
                             ))
                           }
                       </tbody>
                  </table>
              </div>
               <div className='cart-bottom'>
                   <div className='cart-checkout-box'> 
                     <form className='coupon'>
                        <input className='cart-page-input-text' type="text" name='coupon' id='coupon' placeholder='Coupon code....'/>
                        <input type="submit" value="Apply Coupon" />
                     </form>

                      <form className="cart-checkout">
                         <input type="submit" value="Update Cart" />
                          <div>
                            <Checkout/>
                          </div>
                      </form>
                   </div>
                    <div className='shipping-box'>
                       <div className='row'>
                           <div className='col-md-6 col-12'>
                              <div className='calculate-shiping'>
                                 <h3>Calculate Shiping </h3>
                                 <div className='outline-select'>
                                  <select>
                                     <option value="USA">United States of America </option>
                                     <option value="BD">Bangladesh </option>
                                     <option value="PAK">Pakisthan </option>
                                     <option value="IND">India </option>
                                     <option value="SIR">Sirlanka </option>
                                  </select>
                                 </div>
                                 <div className='outline-select shipping-select'>
                                 <select>
                                    <option value="USA">New York </option>
                                    <option value="BD">Dhaka </option>
                                    <option value="PAK">Islamabad </option>
                                    <option value="IND">New Delhi </option>
                                    <option value="SIR">Colombo </option>
                                 </select>
                               </div>
                               <input type="text" name="postalCode" id="postalCode" placeholder="Postocode/ZIP * " className="cart-page-input-text" />
                               <button type='submit'> Update Adress</button>
                              </div>
                           </div>
                            <div className='col-md-6 col-12'> 
                            <div className='cart-overview'>
                                <h3> Cart Totals</h3>
                                <ul className='lab-ul'>
                                   <li>
                                     <span className="pull-left">Cart Subtotal</span>   
                                     <p className="pull-right">${cartSubtotal} </p>
                                   </li>
                                   <li>
                                     <span className='pull-left'>Shipping and Handleling </span>
                                     <p className='pull-right'> Free Shipping </p>
                                  </li>
                                  <li>
                                     <span className='pull-left'>Order Total </span>
                                     <p className='pull-right'> ${orderTotal.toFixed(2)} </p>
                                  </li>
                                </ul>
                            </div>
                            </div>
                       </div>
                    </div>
               </div>
           </div>
        </div>
     </div>
     </>
  )
}

export default CartPage