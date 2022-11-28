import { useContext } from "react";
import CartContext from "../context/CartContext";
import styled from "styled-components";
import { BsCartPlus } from 'react-icons/bs'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <ProductWrapper>
      <div>
        <ProductImg src={product.image} alt='' />
        <h4>{product.name}</h4>
        <h5>R$ {product.price}</h5>
        <ProductButton
          onClick={() => addToCart(product)}
        >
          Add to basket <BsCartPlus/>
        </ProductButton>
      </div>
    </ProductWrapper>
  );
};

export default ProductCard;

const ProductWrapper = styled.div`
    width: 30%;
    padding: 10px;
    border: 1px solid gray;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 5px;
    margin: auto;
    word-wrap: break-word;

    @media screen and (max-width: 1147px) {
      width: 45%;
    }

    @media screen and (max-width: 700px) {
      width: 90%;
    }
`

const ProductImg = styled.img`
    object-fit: cover;
    flex-shrink: 1;
    width: 60%;
    height: 281px;
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`

const ProductButton = styled.button`
    padding: 6px 10px;
    cursor: pointer;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    background-color: #A8DADC;
    border: none;
    transition: all 0.2s ease-in;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`