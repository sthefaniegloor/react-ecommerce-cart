import { useContext } from "react";
import CartContext from "../context/CartContext";
import ItemCart from './ItemCart'
import styled from 'styled-components'

const Cart = () => {

  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
    <>
      {showCart && (
        <CartWrapper>
          <div>
            <CartCircle
              onClick={showHideCart}
            ></CartCircle>
          </div>
          <InnerCart>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <ItemCart key={item._id} item={item} />
                ))}
              </ul>
            )}
          </InnerCart>
          <CartTotal>
            <div>Cart Total</div>
            <div>
              R$ {cartItems.reduce((amount, item) => item.price + amount, 0)}
            </div>
          </CartTotal>
        </CartWrapper>
      )}
    </>
  );
};

export default Cart;

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 20px;
  border-radius: 12px;
  background-color: white;
  border: 1px solid gray;
  padding: 10px;
  z-index: 10;
`

const InnerCart = styled.div`
  height: max-content;
  max-height: 50vh;
  overflow-y: auto;
`

const CartTotal = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`

const CartCircle = styled.i`
  color: white;
  transition: transform 0.2s linear;
`

