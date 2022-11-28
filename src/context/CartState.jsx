import { useReducer } from "react";
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { SHOW_HIDDEN_CART, ADD_TO_CART, REMOVE_ITEM } from './CartType';

const CartState = ({children}) => {
    
    const initialState = {
        showCart: false,
        cartItems: []
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (item) => {
        dispatch({type: ADD_TO_CART, payload: item});
    }

    const showHiddenCart = () => {
        dispatch({type: SHOW_HIDDEN_CART})
    }

    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload: id})
    }

    return (
        <CartContext.Provider value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            addToCart,
            showHiddenCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState;