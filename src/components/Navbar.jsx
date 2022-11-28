import { useContext } from "react";
import CartContext from "../context/CartContext";
import styled from 'styled-components'
import { BsCart } from 'react-icons/bs'

const Nav = () => {
  const { cartItems, showHiddenCart } = useContext(CartContext);

  return (
    <Navbar>
      <NavName>Store</NavName>
      <div>
        <CartIcon>
          < BsCart
            onClick={showHiddenCart}
          />
          {cartItems.length > 0 && (
            <ItemCount>
              <span>{cartItems.length}</span>
            </ItemCount>
          )}
        </CartIcon>
      </div>
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.nav`
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background-color: #1D3557;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

const NavName = styled.h2 `
  color: white;
`

const CartIcon = styled.div`
    position: relative;
    width: max-content;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ItemCount = styled.div`
    position: absolute;
    display: grid;
    place-items: center;
    background-color: #E63946;
    z-index: 10;
    border-radius: 50%;
    font-size: 10px;
    height: 14px;
    width: 14px;
    top: -50%;
    right: -50%;
`
