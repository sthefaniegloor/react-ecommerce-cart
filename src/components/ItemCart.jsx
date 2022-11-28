import { useContext } from "react";
import CartContext from "../context/CartContext";
import styled from 'styled-components'
import { BsTrash } from 'react-icons/bs'

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <Item>
      <img src={item.image} alt='' />
      <div>
        {item.name} - R$ {item.price}
      </div>
      <ItemButton onClick={() => removeItem(item.id)}>
        <BsTrash/>
      </ItemButton>
    </Item>
  );
};

export default CartItem;

const Item = styled.li`
  border-bottom: 1px solid gray;
  padding: 10px 0;
  margin-top: 10px;
  list-style-type: none;
  height: 100px;
  display: flex;
  gap: 5px;
  align-items: center;

  img {
    height: 100%;
    object-fit: cover;
  }
`

const ItemButton = styled.button`
  margin-left: auto;
  padding: 6px 6px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #E63946;
  color: white;
`
